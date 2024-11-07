import _clamp from 'lodash/clamp'
import {describe, expect, it} from 'vitest'

import {clamp} from './clamp'

describe('clamp', () => {
    // Basic functionality
    it('should clamp numbers between lower and upper bounds', () => {
        expect(clamp(5, 0, 10)).toBe(5)
        expect(clamp(-10, -5, 5)).toBe(-5)
        expect(clamp(10, -5, 5)).toBe(5)
        expect(clamp(3, 0, 5)).toBe(3)
        expect(clamp(0, -1, 1)).toBe(0)
    })

    // Two argument cases (upper bound only)
    it('should handle two argument cases', () => {
        expect(clamp(2, 5)).toBe(2)
        expect(clamp(10, 5)).toBe(5)
        expect(clamp(-2, 0)).toBe(-2)
    })

    // Special number cases
    it('should handle special number cases', () => {
        // Infinity
        expect(clamp(Infinity, -100, 100)).toBe(100)
        expect(clamp(-Infinity, -100, 100)).toBe(-100)
        expect(clamp(0, -Infinity, Infinity)).toBe(0)

        // Zero cases
        expect(clamp(0, -0, 0)).toBe(0)
        expect(clamp(-0, -1, 1)).toBe(-0)
        expect(clamp(0, -1, 1)).toBe(0)

        // NaN cases
        expect(clamp(NaN, -1, 1)).toBe(NaN)
        expect(clamp(0, NaN, 1)).toBe(0)
        expect(clamp(0, -1, NaN)).toBe(0)
    })

    // lodash compatibility tests
    describe('lodash compatibility', () => {
        const testCases = [
            // Basic cases
            [5, 0, 10],
            [-10, -5, 5],
            [10, -5, 5],
            [3, 0, 5],
            [0, -1, 1],

            // Edge cases
            [Number.MAX_VALUE, 0, 100],
            [Number.MIN_VALUE, -100, 0],
            [0, Number.MIN_VALUE, Number.MAX_VALUE],

            // Infinity cases
            [Infinity, -100, 100],
            [-Infinity, -100, 100],
            [0, -Infinity, Infinity],

            // Zero cases
            [0, -0, 0],
            [-0, -1, 1],
            [0, -1, 1],

            // NaN cases
            [NaN, 0, 1],
            [0, NaN, 1],
            [0, 0, NaN],
        ] as const

        testCases.forEach(([num, lower, upper], index) => {
            it(`should match lodash output: case ${index + 1}`, () => {
                expect(clamp(num, lower as number, upper as number)).toBe(_clamp(num, lower, upper))
            })
        })

        // Two argument cases
        const twoArgCases = [
            [2, 5],
            [10, 5],
            [-2, 0],
            [NaN, 1],
            [Infinity, 100],
            [-Infinity, -100],
        ] as const

        twoArgCases.forEach(([num, upper], index) => {
            it(`should match lodash output (two args): case ${index + 1}`, () => {
                expect(clamp(num, upper)).toBe(_clamp(num, upper))
            })
        })
    })
})
