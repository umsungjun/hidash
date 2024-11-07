import _sum from 'lodash/sum'
import {bench, describe} from 'vitest'

import sum from './sum'

const testCases = [
    // Empty array
    [[]],
    // Simple arrays
    [[1, 2, 3, 4, 5]],
    [[0.1, 0.2, 0.3]],
    // Negative numbers
    [[-1, -2, -3, -4, -5]],
    // Mixed positive and negative
    [[1, -2, 3, -4, 5]],
    // Large arrays
    [Array(1000).fill(1)],
    [Array(1000).map((_, i) => i)],
    // Decimal numbers
    [[0.1, 0.01, 0.001, 0.0001]],
    // Large numbers
    [[Number.MAX_SAFE_INTEGER, 1, 2, 3]],
    // Small numbers
    [[Number.MIN_SAFE_INTEGER, -1, -2, -3]],
    // Arrays with zeros
    [[0, 0, 0, 0, 0]],
    [[1, 0, 2, 0, 3]],
    // Single element
    [[42]],
    // Repeated numbers
    [[1, 1, 1, 1, 1]],
    // Scientific notation
    [[1e5, 1e4, 1e3]],
    // Various lengths
    [Array(10).fill(1)],
    [Array(100).fill(1)],
    [Array(1000).fill(1)],
    // Random numbers
    [Array(100).map(() => Math.random() * 100)],
    // Edge cases with Number limits
    [[Number.MAX_VALUE, 1]],
    [[Number.MIN_VALUE, -1]],
] as const

const ITERATIONS = 1000

describe('sum performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([arr]) => {
                sum(arr)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([arr]) => {
                _sum(arr)
            })
        }
    })
})
