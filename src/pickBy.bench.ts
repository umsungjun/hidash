import _pickBy from 'lodash/pickBy'
import {bench, describe} from 'vitest'

import pickBy from './pickBy'

const testCases = [
    // simple large objects
    [
        Object.fromEntries(
            Array(1000)
                .fill(0)
                .map((_, i) => [`key${i}`, i]),
        ),
        (v) => v > 500, // test that leave only values greater than 500
    ],
    // sparse large objects
    [
        Object.fromEntries(
            Array(1000)
                .fill(undefined)
                .map((_, i) => [`key${i}`, i % 2 === 0 ? i : undefined]),
        ),
        (v) => v !== undefined, // test that leave only values not undefined
    ],
    // filter booleans
    [
        Object.fromEntries(
            Array(1000)
                .fill(0)
                .map((_, i) => [`key${i}`, i % 2 === 0]),
        ),
        (v) => typeof v === 'boolean' && v === true, // test that leave only true
    ],
    // nested objects
    [
        {
            a: {b: {c: Array(1000).fill({nested: true})}},
            d: {e: {f: Array(1000).fill({nested: false})}},
        },
        (v) => v.nested === true, // test that leaves only values where nested is true
    ],
    // filter only numbers
    [
        {a: 1, b: 2, c: 3, d: 4},
        (v) => typeof v === 'number' && v % 2 === 0, // test to leave only even values
    ],
    // empty object case
    [
        {},
        (v) => !!v, // test to leave only truthy values, also test if it is dealing with an empty object
    ],
    // filter specific values
    [
        {a: null, b: 0, c: false, d: true},
        (v) => v === true, // test that leave only true
    ],
] as const

const ITERATIONS = 1000

describe('pickBy performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([collection, predicate]) => {
                pickBy(collection, predicate)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([collection, predicate]) => {
                _pickBy(collection, predicate)
            })
        }
    })
})
