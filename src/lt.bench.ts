import _lt from 'lodash/lt'
import {bench, describe} from 'vitest'

import lt from './lt'

const testCases = [
    {value: 1, other: 0}, // comparison of numbers
    {value: -1, other: -2}, // negative comparison
    {value: 0, other: 0}, // comparison of the same numbers
    {value: 3.14, other: 2.71}, // prime number comparison
    {value: '5', other: '3'}, // numeric strings comparison
    {value: 'a', other: 'b'}, // string comparison
    {value: '123', other: 456}, // mixing string and numbers
    {value: null, other: undefined}, // null and undefined
    {value: {}, other: []}, // comparison of objects and arrays
    {value: NaN, other: Infinity}, // comparison of special values
]

const ITERATIONS = 10000

describe('lt performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({value, other}) => {
                lt(value, other)
            })
        }
    })
    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({value, other}) => {
                _lt(value, other)
            })
        }
    })
})
