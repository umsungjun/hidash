import _omit from 'lodash/omit'
import {bench, describe} from 'vitest'

import {omit} from './omit'

const testCases = [
    // Basic objects
    [{a: 1, b: 2, c: 3}, ['a', 'b']],
    [{x: 1, y: 2, z: 3, w: 4}, ['x', 'z']],

    // Nested objects
    [{a: {b: 2, c: 3}, d: 4}, ['a']],
    [{x: {y: {z: 1}}}, ['x.y']],

    // Arrays
    [{arr: [1, 2, 3], b: 2}, ['arr']],
    [{a: [{b: 1}, {b: 2}]}, ['a.0']],

    // Null & undefined
    [null, ['a']],
    [undefined, ['a', 'b']],

    // Large objects
    [
        Object.fromEntries(
            Array(100)
                .fill(0)
                .map((_, i) => [`key${i}`, i]),
        ),
        ['key1', 'key50'],
    ],

    // Deep paths
    [
        {
            a: {b: {c: {d: {e: 5}}}},
        },
        ['a.b.c'],
    ],

    // Special characters
    [{'a.b': 1, 'x.y': 2}, ['a.b']],
    [{'a.b.c': 3}, ['a.b.c']],

    // Edge cases
    [{}, []],
    [{a: 1}, ['nonexistent']],
    [{a: undefined, b: null}, ['a', 'b']],
] as const

const ITERATIONS = 1000

describe('omit performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([obj, paths]) => {
                omit(obj, ...paths)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([obj, paths]) => {
                _omit(obj, ...paths)
            })
        }
    })
})
