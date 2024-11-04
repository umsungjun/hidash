import {defineConfig} from 'tsup'

import moduleMap from './index'

export default defineConfig({
    entry: moduleMap,
    dts: {only: true},
    format: 'esm',
    outDir: './dist',
})
