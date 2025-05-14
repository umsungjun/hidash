import _last from 'lodash/last'
import {bench, describe} from 'vitest'

import {last} from './last'

const testCases = [
    null,
    undefined,
    ['a', 'b', 'c'],
    [1, 2, 3],
    [],
    new Array(3),
    [null],
    [undefined],
    [false],
    [0],
    [''],
    [1, 'string', null, undefined, false],
    new Array(1000).fill(0).map((_, i) => i),
    Object('hello'),
]

const ITERATIONS = 1000

describe('last performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                last(testCase)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                _last(testCase)
            })
        }
    })
})
