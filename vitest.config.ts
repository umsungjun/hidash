// vitest.config.ts
import {defineConfig} from 'vitest/config'

export default defineConfig({
    test: {
        benchmark: {
            reporters: ['default'],
            outputJson: 'benchmark-result.json',
        },
        coverage: {
            provider: 'istanbul', // or 'v8'
            reporter: ['text', 'json', 'html'],
        },
        reporters: ['default', 'html'],
    },
})
