import _isNumber from 'lodash/isNumber'
import {expect, describe, it} from 'vitest'

import {isNumber} from './isNumber'

describe('basic number validation', () => {
    it('handles integers', () => {
        const testCases = [0, 1, -1, 999999]
        testCases.forEach((num) => {
            expect(isNumber(num)).toBe(_isNumber(num))
        })
    })

    it('handles decimals', () => {
        const testCases = [0.1, -0.1, 3.14, -3.14]
        testCases.forEach((num) => {
            expect(isNumber(num)).toBe(_isNumber(num))
        })
    })

    it('handles special numeric values', () => {
        const testCases = [Infinity, -Infinity, NaN]
        testCases.forEach((num) => {
            expect(isNumber(num)).toBe(_isNumber(num))
        })
    })
})

describe('string numbers', () => {
    it('handles numeric strings', () => {
        const testCases = ['123', '-123', '0', '3.14', '-3.14']
        testCases.forEach((str) => {
            expect(isNumber(str)).toBe(_isNumber(str))
        })
    })

    it('handles invalid strings', () => {
        const testCases = ['', 'abc', '12px', '1.2.3']
        testCases.forEach((str) => {
            expect(isNumber(str)).toBe(_isNumber(str))
        })
    })
})

describe('other types', () => {
    it('handles null and undefined', () => {
        const testCases = [null, undefined]
        testCases.forEach((value) => {
            expect(isNumber(value)).toBe(_isNumber(value))
        })
    })

    it('handles objects and arrays', () => {
        const testCases = [{}, [], [1]]
        testCases.forEach((value) => {
            expect(isNumber(value)).toBe(_isNumber(value))
        })
    })

    it('handles booleans', () => {
        const testCases = [true, false]
        testCases.forEach((value) => {
            expect(isNumber(value)).toBe(_isNumber(value))
        })
    })
})
