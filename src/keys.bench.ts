import _keys from 'lodash/keys'
import {bench, describe} from 'vitest'

import {keys} from './keys'

const testCases = [
    // null & undefined
    null,
    undefined,

    // Arrays
    [],
    [1, 2, 3],
    Array(1000).fill(1),
    [...Array(1000).keys()],

    // Objects
    {},
    {a: 1, b: 2},
    Object.create(null),
    Object.create(
        {},
        {
            a: {value: 1, enumerable: true},
            b: {value: 2, enumerable: false},
        },
    ),

    // Array-like objects
    {length: 2, 0: 'a', 1: 'b'},
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    {length: 1000, ...Array(1000).fill(1)},

    // String objects
    Object(''),
    Object('hello'),

    // Other cases
    new Date(),
    new Map([
        ['a', 1],
        ['b', 2],
    ]),
    new Set([1, 2, 3]),

    // Objects with prototype
    Object.create(
        {inherited: true},
        {
            own: {value: true, enumerable: true},
        },
    ),

    // Large object
    {
        ...Object.fromEntries(
            Array(1000)
                .fill(0)
                .map((_, i) => [`key${i}`, i]),
        ),
    },

    // Object with symbols
    {[Symbol('test')]: 'value', regular: 'key'},

    // Sparse array
    Object.assign(Array(1000), {1: 'a', 500: 'b', 999: 'c'}),
]

const ITERATIONS = 1000

describe('keys performance', () => {
    bench('hidash keys', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                keys(testCase)
            })
        }
    })

    bench('lodash keys', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                _keys(testCase)
            })
        }
    })
})
