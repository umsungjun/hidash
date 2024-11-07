import _clamp from 'lodash/clamp'
import {bench, describe} from 'vitest'

import {clamp} from './clamp'

const testCases = [
    // Basic number cases
    [5, 0, 10],
    [-10, -5, 5],
    [10, -5, 5],
    [3, 0, 5],
    [0, -1, 1],

    // Edge cases
    [Number.MAX_VALUE, 0, 100],
    [Number.MIN_VALUE, -100, 0],
    [0, Number.MIN_VALUE, Number.MAX_VALUE],

    // Single bound cases
    [2, 5],
    [-2, 0],
    [100, 50],

    // Infinity cases
    [Infinity, -100, 100],
    [-Infinity, -100, 100],
    [0, -Infinity, Infinity],

    // Zero cases
    [0, -0, 0],
    [-0, -1, 1],
    [0, -1, 1],

    // Decimal cases
    [3.14159, 3, 4],
    [2.718, 2.5, 3],
    [1.23456, 1.2, 1.3],

    // Very close numbers
    [1.00000001, 1, 1.00000002],
    [0.99999999, 0.99999998, 1],

    // Large numbers of operations
    ...Array(100)
        .fill(0)
        .map((_, i) => [i, 0, 100]),

    // Boundary cases
    [5, 5, 5],
    [1, 1, 1],
    [0, 0, 0],
] as const

const ITERATIONS = 1000

describe('clamp performance', () => {
    bench('hidash clamp', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([num, lower, upper]) => {
                clamp(num, lower, upper)
            })
        }
    })

    bench('lodash clamp', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([num, lower, upper]) => {
                _clamp(num, lower, upper)
            })
        }
    })
})
