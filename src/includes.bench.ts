import _includes from 'lodash/includes'
import {bench, describe} from 'vitest'

import {includes} from './includes'

const testCases = [
    // Basic cases
    [{a: 1, b: 2}, 1],
    [{a: 'test', b: 'value'}, 'test'],
    [null, 1],
    [undefined, 'test'],

    // Arrays as objects
    [{0: 'a', 1: 'b', length: 2}, 'a'],
    [{0: 1, 1: 2, 2: 3, length: 3}, 2],

    // Large objects
    [
        Object.fromEntries(
            Array(1000)
                .fill(0)
                .map((_, i) => [`key${i}`, i]),
        ),
        999,
    ],
    [
        Object.fromEntries(
            Array(1000)
                .fill(0)
                .map((_, i) => [`key${i}`, 'value']),
        ),
        'value',
    ],

    // Edge cases
    [{}, 'nonexistent'],
    [{a: undefined}, undefined],
    [{a: null}, null],

    // Different types
    [{a: 1, b: '2', c: true}, true],
    [{a: [], b: {}, c: new Date()}, []],

    // With from Index
    [{0: 'a', 1: 'b', 2: 'a', length: 3}, 'a', 1],
    [{0: 1, 1: 2, 2: 1, length: 3}, 1, 2],
] as const

const ITERATIONS = 1000

describe('includes performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([obj, target, fromIndex]) => {
                includes(obj, target, fromIndex)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([obj, target, fromIndex]) => {
                _includes(obj, target, fromIndex)
            })
        }
    })
})
