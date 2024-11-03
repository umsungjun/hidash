import _size from 'lodash/size'
import {bench, describe} from 'vitest'

import size from './size'

const testCases = [
    null,
    undefined,
    '',
    'hello',
    [],
    [1, 2, 3],
    {},
    {key: 'value'},
    new Map(),
    new Set(),
    new Map([
        ['a', 1],
        ['b', 2],
    ]),
    new Set([1, 2, 3]),
    {a: 1, b: 2, c: 3},
    Array(1000).fill(0),
    'a'.repeat(1000),
    new Array(1000)
        .fill(0)
        .map((_, i) => [`key${i}`, i])
        .reduce((acc, [k, v]) => ({...acc, [k]: v}), {}),
]

const ITERATIONS = 10000

describe('size', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                size(testCase)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                size(testCase)
            })
        }
    })
})
