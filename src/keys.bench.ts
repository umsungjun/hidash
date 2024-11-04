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

    // // 특정 케이스들에 대한 세부 벤치마크
    // bench('array-like objects', () => {
    //     const arrayLike = {length: 1000, ...Array(1000).fill(1)}
    //     for (let i = 0; i < ITERATIONS; i++) {
    //         keys(arrayLike)
    //     }
    // })

    // bench('large objects', () => {
    //     const largeObj = Object.fromEntries(
    //         Array(1000)
    //             .fill(0)
    //             .map((_, i) => [`key${i}`, i]),
    //     )
    //     for (let i = 0; i < ITERATIONS; i++) {
    //         keys(largeObj)
    //     }
    // })

    // bench('sparse arrays', () => {
    //     const sparseArray = Object.assign(Array(1000), {1: 'a', 500: 'b', 999: 'c'})
    //     for (let i = 0; i < ITERATIONS; i++) {
    //         keys(sparseArray)
    //     }
    // })

    // bench('prototype chain', () => {
    //     const proto = {inherited1: true, inherited2: true}
    //     const obj = Object.create(proto, {
    //         own1: {value: true, enumerable: true},
    //         own2: {value: true, enumerable: true},
    //     })
    //     for (let i = 0; i < ITERATIONS; i++) {
    //         keys(obj)
    //     }
    // })
})
