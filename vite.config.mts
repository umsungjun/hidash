import {babel} from '@rollup/plugin-babel'
import browserslistToEsbuild from 'browserslist-to-esbuild'
import preserveDirectives from 'rollup-preserve-directives'
import {defineConfig} from 'vite'

import moduleMap from './index'

const SUPPORT_TARGETS = browserslistToEsbuild()

export default defineConfig({
    plugins: [
        preserveDirectives(),
        babel({
            babelHelpers: 'runtime',
            plugins: [
                ['@babel/plugin-transform-runtime'],
                [
                    'babel-plugin-polyfill-corejs3',
                    {
                        method: 'usage-pure',
                        version: '3.38.1',
                        proposals: true,
                        exclude: [
                            'es.array.push',
                            'es.array.includes', // has.ts
                            'es.object.from-entries', // mapValues.ts
                            'es.array.reduce', // mapValues.ts
                            'es.array.flat-map', // omit.ts
                            'es.string.trim', // toNumber.ts
                        ],
                    },
                ],
            ],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            exclude: 'node_modules/**',
        }),
    ],
    build: {
        minify: false,
        outDir: 'dist',
        lib: {
            entry: moduleMap,
        },
        rollupOptions: {
            // if neccessary
            // external: [...Object.keys(pkg.peerDependencies), ...Object.keys(pkg.dependencies)].flatMap((dep) => [
            //     dep,
            //     new RegExp(`^${dep}/.*`),
            // ]),
            output: [
                {
                    format: 'es',
                    dir: 'dist',
                    exports: 'named',
                },
                {
                    format: 'cjs',
                    dir: 'dist',
                    exports: 'named',
                },
            ],
        },
        target: SUPPORT_TARGETS,
    },
})
