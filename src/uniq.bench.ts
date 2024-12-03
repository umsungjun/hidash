import _uniq from 'lodash/uniq'
import {bench, describe} from 'vitest'

import {uniq} from './uniq'

const testCases = [
    [1, 2, 1, 4, 1, 3],
    [true, false, true, true, false],
    ['a', 'b', 'a', 'c', 'b'],
    [null, undefined, null, 1, undefined],
    [0, -0, 0, NaN, NaN],
    [Infinity, -Infinity, Infinity],
    ['', 'hello', ''],

    [[1], [2], [1]],
    [
        [1, 2],
        [2, 1],
        [1, 2],
    ],

    [{id: 1}, {id: 2}, {id: 1}],
    [{toString: () => 'a'}, {toString: () => 'b'}, {toString: () => 'a'}],

    Array.from({length: 1000}, (_, i) => i % 100),
]

const ITERATIONS = 1000

describe('uniq performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                uniq(testCase)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                _uniq(testCase)
            })
        }
    })
})
