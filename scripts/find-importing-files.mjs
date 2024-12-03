#!/usr/bin/env node
/* eslint-disable no-console */
import {execSync} from 'child_process'
import fs from 'fs'
import path from 'path'

function isTestFile(filePath) {
    return filePath.endsWith('.bench.ts') || filePath.endsWith('.test.ts')
}

function getAllFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir)
    files.forEach((file) => {
        const filePath = path.join(dir, file)
        if (filePath.endsWith('.ts') && !isTestFile(filePath)) {
            fileList.push(filePath)
        }
    })
    return fileList
}

function getModifiedInternalFiles(commitId) {
    const output = execSync(`git diff --name-only HEAD origin/${commitId} -- src/internal/*.ts`, {
        encoding: 'utf8',
    })

    return output
        .split('\n')
        .map((file) => file.trim())
        .filter(Boolean)
}

function findImportingFiles(modifiedInternalFiles, allFiles) {
    const result = new Set()

    modifiedInternalFiles.forEach((internalFile) => {
        allFiles.forEach((file) => {
            const content = fs.readFileSync(file, 'utf8')
            const relativePath =
                './' + path.relative(path.dirname(file), internalFile).replace(/\\/g, '/').replace('.ts', '')

            if (content.includes(`import`) && content.includes(relativePath)) {
                result.add(file)
            }
        })
    })

    return [...result]
}

const rootDir = process.cwd()

const [, , commitId = 'main'] = process.argv

;(async () => {
    const srcDir = path.resolve('src')
    const allFiles = getAllFiles(srcDir)
    const modifiedInternalFiles = getModifiedInternalFiles(commitId)

    if (modifiedInternalFiles.length === 0) {
        console.log('No modified internal files.')
        process.exit(0)
    }

    const importingFiles = findImportingFiles(modifiedInternalFiles, allFiles)

    if (importingFiles.length > 0) {
        console.log(importingFiles.map((importingFile) => path.relative(rootDir, importingFile)))
    }
})()
