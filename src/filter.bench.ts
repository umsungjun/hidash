import _filter from 'lodash/filter'
import {bench, describe} from 'vitest'

import {filter} from './filter'

const testCases = [
    // Simple large arrays
    [Array(1000).fill(1), (v) => typeof v === 'number' && v > 500],
    [Array(1000).map((_, i) => i), (v) => typeof v === 'number' && v % 2 === 0],
    // Sparse arrays
    [
        Array(1000)
            .fill(undefined)
            .map((_, i) => (i % 2 === 0 ? i : undefined)),
        (v) => v === undefined,
    ],
    // Large objects
    [
        Object.fromEntries(
            Array(1000)
                .fill(0)
                .map((_, i) => [`key${i}`, i]),
        ),
        (v) => v > 999,
    ],
    [
        Object.fromEntries(
            Array(1000)
                .fill(0)
                .map((_, i) => [`key${i}`, {nestedKey: i}]),
        ),
        (v) => v.nestedKey > 999,
    ],
    // Deeply nested objects
    [
        {
            a: {b: {c: Array(1000).fill({nested: true})}},
            d: {e: {f: Array(1000).fill({nested: false})}},
        },
        (v) => v.nested === true,
    ],
    // Mixed large arrays
    [Array(1000).map((_, i) => (i % 3 === 0 ? 'string' : i % 5 === 0 ? NaN : i)), (v) => typeof v === 'string'],
    // Large falsy arrays
    [
        Array(1000)
            .fill(0)
            .map((_, i) => (i === 999 ? 1 : 0)),
        (v) => v === 1,
    ],
    // Large truthy arrays
    [
        Array(1000)
            .fill(false)
            .map((_, i) => i === 999),
        (v) => v === true,
    ],
] as const

const ITERATIONS = 1000

describe('filter performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([collection, predicate]) => {
                filter(collection, predicate)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([collection, predicate]) => {
                _filter(collection, predicate)
            })
        }
    })
})
