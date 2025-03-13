import _unzip from 'lodash/unzip'
import {bench, describe} from 'vitest'

import {unzip} from './unzip'

const testCases = [
    [
        ['a', 1, true],
        ['b', 2, false],
        ['c', 3, true],
    ],
    [Array(1000).fill(['a', 1, true])],
    [
        [
            {id: 1, name: 'John'},
            {age: 30, city: 'New York'},
        ],
        [
            {id: 2, name: 'Jane'},
            {age: 25, city: 'London'},
        ],
    ],
    [
        [
            Object.fromEntries(
                Array(1000)
                    .fill(0)
                    .map((_, i) => [`key${i}`, `value${i}`]),
            ),
            Object.fromEntries(
                Array(1000)
                    .fill(0)
                    .map((_, i) => [`key${i}`, i]),
            ),
        ],
    ],
    [
        ['string', new Set([1, 2, 3])],
        [
            123,
            new Map([
                ['a', 1],
                ['b', 2],
            ]),
        ],
        [true, /regex/],
        [null, BigInt(123)],
        [undefined, () => {}],
        [Symbol('test'), new Date()],
    ],
    [[1, 'a'], [[2, 'b']], [[[3, 'c']]], [[[[4, 'd']]]]],
    [Array(100).fill(['a', 1, true]), Array(50).fill(['b', 2, false]), Array(25).fill(['c', 3, true])],
    [[], [null], [undefined], [null, undefined]],
]

const ITERATIONS = 1000

describe('unzip performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            for (const testCase of testCases) {
                unzip(testCase)
            }
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            for (const testCase of testCases) {
                _unzip(testCase)
            }
        }
    })
})
