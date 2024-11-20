#!/usr/bin/env node
import {readFile} from 'node:fs/promises'

function getMethodName(filePath) {
    const match = filePath.match(/\/([^/]+)\.bench\.ts$/)
    return match ? match[1] : filePath
}

function formatBenchmarkResults(benchmarkData, commitId, isMainBranch = false) {
    const results = []

    for (const file of benchmarkData.files) {
        const methodName = getMethodName(file.filepath)

        for (const group of file.groups) {
            if (group.benchmarks.length === 2) {
                const [bench1, bench2] = group.benchmarks
                const hidashBench = bench1.name.includes('hidash') ? bench1 : bench2
                const lodashBench = bench1.name.includes('lodash') ? bench1 : bench2
                const isHidashFaster = hidashBench.hz > lodashBench.hz
                const ratio = (
                    Math.max(hidashBench.hz, lodashBench.hz) / Math.min(hidashBench.hz, lodashBench.hz)
                ).toFixed(2)
                const warningEmoji = !isHidashFaster ? ' ⚠️' : ''

                results.push({
                    method: methodName,
                    fullName: group.fullName,
                    isHidashFaster,
                    winner: isHidashFaster ? 'hidash' : 'lodash',
                    ratio,
                    loser: isHidashFaster ? 'lodash' : 'hidash',
                    fasterHz: Math.max(hidashBench.hz, lodashBench.hz).toFixed(2),
                    slowerHz: Math.min(hidashBench.hz, lodashBench.hz).toFixed(2),
                    warningEmoji,
                })
            }
        }
    }

    const repoUrl = process.env.GITHUB_REPOSITORY
        ? `https://github.com/${process.env.GITHUB_REPOSITORY}`
        : 'https://github.com/NaverPayDev/hidash'

    const title = isMainBranch
        ? '# Benchmark Results\n\nLatest benchmark results comparing hidash vs lodash performance.'
        : '### Benchmark Results'

    const markdownParts = [
        title,
        '',
        '| Method | Test | Performance Comparison | Operations/sec |',
        '|--------|------|----------------------|----------------|',
        ...results.map(
            (result) =>
                `| [${result.method}](${repoUrl}/blob/${commitId}/src/${result.method}.ts)${result.warningEmoji} | ${result.fullName} | ${result.winner} is ${result.ratio}x faster than ${result.loser} | ${result.fasterHz} vs ${result.slowerHz} ops/sec |`,
        ),
        '',
        '> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.',
        '> ⚠️ indicates where hidash is slower than lodash.',
    ]

    if (isMainBranch) {
        markdownParts.push('', `\n_Last updated: ${new Date().toISOString().split('T')[0]}_`)
    } else {
        markdownParts.push(
            '',
            '<details>',
            '<summary>View Full Benchmark Data</summary>',
            '',
            '```json',
            JSON.stringify(benchmarkData, null, 2),
            '```',
            '</details>',
        )
    }

    return markdownParts.join('\n')
}

// CLI에서 실행할 경우
const [, , inputFile, commitId = 'main', isMain] = process.argv

if (!inputFile) {
    // eslint-disable-next-line no-console
    console.error('Usage: benchmark-to-md.mjs <benchmark-result.json> [commit-id]')
    process.exit(1)
}

try {
    const input = await readFile(inputFile, 'utf8')
    const benchmarkData = JSON.parse(input)
    const output = formatBenchmarkResults(benchmarkData, commitId)
    // eslint-disable-next-line no-console
    console.log(output)
} catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error:', error.message)
    process.exit(1)
}
