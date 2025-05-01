import _toString from 'lodash/toString'
import {bench, describe} from 'vitest'

import toString from './toString'

const testCases = [
    {value: 123},
    {value: -0},
    {value: ''},
    {value: 'hello'},
    {value: true},
    {value: Symbol('test')},

    // null, undefined
    {value: null},
    {value: undefined},

    // array
    {value: []},
    {value: [1, 2, 3]},
    {value: ['a', 'b', 'c']},
    {value: [1, null, 'mixed', undefined]},

    // objects
    {value: {}},
    {value: {toString: () => 'custom'}},

    // special values
    {value: NaN},
    {value: Infinity},
    {value: -Infinity},

    // nested structures
    {
        value: [
            [1, 2],
            [3, 4],
        ],
    },
    {value: {a: {b: {c: 1}}}},
    {value: [1, {a: 2}, [3, {b: 4}]]},
]

const ITERATIONS = 10000

describe('toString performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({value}) => {
                toString(value)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({value}) => {
                _toString(value)
            })
        }
    })
})
