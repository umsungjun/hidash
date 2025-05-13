import _isMap from 'lodash/isMap'
import {bench, describe} from 'vitest'

import {isMap} from './isMap'

const testCases = [new Map(), {}, [], new Set(), null, undefined, 21, 'string', false, Symbol('symbol')]

const ITERATIONS = 10000

describe('isMap performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                isMap(testCase)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                _isMap(testCase)
            })
        }
    })
})
