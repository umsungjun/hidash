import _isArray from 'lodash/isArray'
import {bench, describe} from 'vitest'

import {isArray} from './isArray'

const testCases = [
    [],
    [1, 2, 3],
    {},
    'string',
    21,
    true,
    null,
    undefined,
    Symbol('symbol'),
    function () {},
    new Date(),
    new Error(),
    /regex/,
    new Set(),
    new Map(),
]

const ITERATIONS = 10000

describe('isArray performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                isArray(testCase)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                _isArray(testCase)
            })
        }
    })
})
