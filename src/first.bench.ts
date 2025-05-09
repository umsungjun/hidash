import _first from 'lodash/first'
import {describe, bench} from 'vitest'

import {first} from './first'

const testCases = [
    null,
    undefined,
    [],
    ['a', 'b', 'c'],
    [1, 2, 3],
    new Array(3),
    Array(3),
    [null],
    [undefined],
    [false],
    [0],
    [''],
    ['a', 1, false, null, undefined],
    new Array(10000).fill(0),
]

const ITERATIONS = 10000

describe('first performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                first(testCase)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                _first(testCase)
            })
        }
    })
})
