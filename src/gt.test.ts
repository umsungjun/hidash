import _gt from 'lodash/gt'
import {expect, describe, it} from 'vitest'

import {gt} from './gt'

describe('basic greater-than comparisons', () => {
    it('handles integers', () => {
        const testCases = [
            {value: 3, other: 2},
            {value: 1, other: 1},
            {value: 0, other: -1},
            {value: -1, other: -2},
        ]
        testCases.forEach(({value, other}) => {
            expect(gt(value, other)).toBe(_gt(value, other))
        })
    })

    it('handles decimals', () => {
        const testCases = [
            {value: 3.14, other: 2.14},
            {value: 0.1, other: 0.1},
            {value: -0.5, other: -1.5},
            {value: 0, other: -0.1},
        ]
        testCases.forEach(({value, other}) => {
            expect(gt(value, other)).toBe(_gt(value, other))
        })
    })

    it('handles special numeric values', () => {
        const testCases = [
            {value: Infinity, other: 999},
            {value: -Infinity, other: -999},
            {value: NaN, other: 1},
            {value: 1, other: NaN},
        ]
        testCases.forEach(({value, other}) => {
            expect(gt(value, other)).toBe(_gt(value, other))
        })
    })
})

describe('string comparisons', () => {
    it('handles numeric strings', () => {
        const testCases = [
            {value: '5', other: '3'},
            {value: '2', other: '2'},
            {value: '-1', other: '-2'},
            {value: '3.14', other: '3.13'},
        ]
        testCases.forEach(({value, other}) => {
            expect(gt(value, other)).toBe(_gt(value, other))
        })
    })

    it('handles mixed numeric and non-numeric strings', () => {
        const testCases = [
            {value: 'abc', other: '123'},
            {value: '5', other: 'abc'},
            {value: '3.14', other: '1.23abc'},
        ]

        testCases.forEach(({value, other}) => {
            expect(gt(value, other)).toBe(_gt(value, other))
        })
    })
})

describe('non-numeric values', () => {
    it('handles null and undefined', () => {
        const testCases = [
            {value: null, other: undefined},
            {value: null, other: 0},
            {value: undefined, other: 1},
        ]
        testCases.forEach(({value, other}) => {
            expect(gt(value, other)).toBe(_gt(value, other))
        })
    })

    it('handles objects and arrays', () => {
        const testCases = [
            {value: {}, other: {}},
            {value: [], other: [1]},
            {value: {a: 1}, other: {b: 2}},
        ]
        testCases.forEach(({value, other}) => {
            expect(gt(value, other)).toBe(_gt(value, other))
        })
    })

    it('handles booleans', () => {
        const testCases = [
            {value: true, other: false},
            {value: false, other: false},
            {value: true, other: true},
        ]
        testCases.forEach(({value, other}) => {
            expect(gt(value, other)).toBe(_gt(value, other))
        })
    })
})
