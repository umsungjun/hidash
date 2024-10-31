import _isEmpty from 'lodash/isEmpty'
import {bench, describe} from 'vitest'

import isEmpty from './isEmpty'

const testCases = [
    null,
    undefined,
    '',
    'hello',
    [],
    [1, 2, 3],
    {},
    {key: 'value'},
    0,
    1,
    true,
    false,
    new Date(),
    new Map(),
    new Set(),
    NaN,
    Infinity,
]

const ITERATIONS = 10000

describe('isEmpty', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                isEmpty(testCase)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                _isEmpty(testCase)
            })
        }
    })
})
