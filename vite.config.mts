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
                            'es.array.push', // https://bugs.chromium.org/p/v8/issues/detail?id=12681
                            'es.array.includes', // https://bugzilla.mozilla.org/show_bug.cgi?id=1767541
                            'es.array.reduce', // https://issues.chromium.org/issues/40672866
                            'es.string.trim', // https://github.com/zloirock/core-js/issues/480#issuecomment-457494016 safari bug
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
