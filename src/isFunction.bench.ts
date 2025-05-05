import _isFunction from 'lodash/isFunction'
import {bench, describe} from 'vitest'

import {isFunction} from './isFunction'

const testCases = [
    function () {},
    async function () {},
    function* () {},
    new Proxy(function () {}, {}),
    {},
    [],
    42,
    'string',
    true,
    Symbol('symbol'),
    null,
    undefined,
    class MyClass {},
    new Proxy({}, {}),
    Reflect,
]

const ITERATIONS = 1000

describe('isFunction performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                isFunction(testCase)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                _isFunction(testCase)
            })
        }
    })
})
