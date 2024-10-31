import {defineConfig} from 'tsup'

import type {Options} from 'tsup'

const entries: Options['entry'] = {
    isEmpty: './src/isEmpty.ts',
} as const

export default defineConfig({
    entry: entries,
    dts: {only: true},
    format: 'esm',
    outDir: './dist',
})
