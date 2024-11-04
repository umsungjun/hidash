import {defineConfig} from 'tsup'

import moduleMap from './index'

import type {Format, Options} from 'tsup'

const sharedConfig: Options = {
    entry: moduleMap,
    dts: {only: true},
} as const

const createConfig = (format: Exclude<Format, 'iife'>) =>
    defineConfig({
        ...sharedConfig,
        format: [format],
        outDir: `./dist/${format}`,
    })

export default [createConfig('esm'), createConfig('cjs')]
