import _shuffle from 'lodash/shuffle'
import {bench, describe} from 'vitest'

import shuffle from './shuffle'

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
] as const

const ITERATIONS = 1000

describe('shuffle performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                shuffle(testCase)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                _shuffle(testCase)
            })
        }
    })
})
