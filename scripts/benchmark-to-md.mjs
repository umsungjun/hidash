#!/usr/bin/env node
import {readFile} from 'node:fs/promises'

function getMethodName(filePath) {
    const match = filePath.match(/\/([^/]+)\.bench\.ts$/)
    return match ? match[1] : filePath
}

function formatBenchmarkResults(benchmarkData, commitId) {
    const results = []

    // JSON 데이터 파싱
    for (const file of benchmarkData.files) {
        const methodName = getMethodName(file.filepath)

        for (const group of file.groups) {
            // 두 개의 벤치마크를 비교하는 경우만 처리
            if (group.benchmarks.length === 2) {
                const [bench1, bench2] = group.benchmarks
                const fasterBench = bench1.hz > bench2.hz ? bench1 : bench2
                const slowerBench = bench1.hz > bench2.hz ? bench2 : bench1
                const ratio = (fasterBench.hz / slowerBench.hz).toFixed(2)

                results.push({
                    method: methodName,
                    winner: fasterBench.name,
                    ratio: ratio,
                    loser: slowerBench.name,
                    fasterHz: fasterBench.hz.toFixed(2),
                    slowerHz: slowerBench.hz.toFixed(2),
                })
            }
        }
    }

    const repoUrl = process.env.GITHUB_REPOSITORY
        ? `https://github.com/${process.env.GITHUB_REPOSITORY}`
        : 'https://github.com/NaverPayDev/hidash'

    return [
        '### Benchmark Results',
        '',
        '| Method | Performance Comparison | Operations/sec |',
        '|--------|----------------------|----------------|',
        ...results.map(
            (result) =>
                `| [${result.method}](${repoUrl}/blob/${commitId}/src/${result.method}.ts) | ${result.winner} is ${result.ratio}x faster than ${result.loser} | ${result.fasterHz} vs ${result.slowerHz} ops/sec |`,
        ),
        '',
        '> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.',
        '',
        '<details>',
        '<summary>View Full Benchmark Data</summary>',
        '',
        '```json',
        JSON.stringify(benchmarkData, null, 2),
        '```',
        '</details>',
    ].join('\n')
}

// CLI에서 실행할 경우
const [, , inputFile, commitId = 'main'] = process.argv

if (!inputFile) {
    console.error('Usage: benchmark-to-md.mjs <benchmark-result.json> [commit-id]')
    process.exit(1)
}

try {
    const input = await readFile(inputFile, 'utf8')
    const benchmarkData = JSON.parse(input)
    const output = formatBenchmarkResults(benchmarkData, commitId)
    console.log(output)
} catch (error) {
    console.error('Error:', error.message)
    process.exit(1)
}
