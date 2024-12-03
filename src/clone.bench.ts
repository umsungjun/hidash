// clone.bench.ts
import _clone from 'lodash/clone'
import {bench, describe} from 'vitest'

import {clone} from './clone'

const testCases = [
    42,
    'hello',
    true,
    null,
    undefined,

    new Date(),
    /test/gi,

    [1, 2, 3],
    Array.from({length: 1000}, (_, i) => i),

    new Int32Array([1, 2, 3]),
    new Float64Array(Array.from({length: 1000}, (_, i) => i)),

    {a: 1, b: 2, c: 3},
    Object.fromEntries(Array.from({length: 100}, (_, i) => [String(i), i])),

    new Set([1, 2, 3]),
    new Map([
        [1, 2],
        [3, 4],
    ]),

    {
        date: new Date(),
        regexp: /test/,
        array: [1, 2, 3],
        nested: {a: 1, b: 2},
        set: new Set([1, 2, 3]),
    },
]

const ITERATIONS = 1000

describe('clone performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                clone(testCase)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                _clone(testCase)
            })
        }
    })
})
