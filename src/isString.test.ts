import _isString from 'lodash/isString'
import {expect, describe, it} from 'vitest'

import {isString} from './isString'

describe('basic string validation', () => {
    it('handles plain strings', () => {
        const testCases = ['hello', 'world', '123', '']
        testCases.forEach((str) => {
            expect(isString(str)).toBe(_isString(str))
        })
    })

    it('handles strings with special characters', () => {
        const testCases = ['@#$', 'hello\nworld', '   ', '🔥']
        testCases.forEach((str) => {
            expect(isString(str)).toBe(_isString(str))
        })
    })
})

describe('non-string values', () => {
    it('handles numbers', () => {
        const testCases = [123, -123, 0, 3.14, NaN, Infinity]
        testCases.forEach((num) => {
            expect(isString(num)).toBe(_isString(num))
        })
    })

    it('handles objects and arrays', () => {
        const testCases = [{}, [], [1], {key: 'value'}]
        testCases.forEach((value) => {
            expect(isString(value)).toBe(_isString(value))
        })
    })

    it('handles booleans', () => {
        const testCases = [true, false]
        testCases.forEach((bool) => {
            expect(isString(bool)).toBe(_isString(bool))
        })
    })

    it('handles null and undefined', () => {
        const testCases = [null, undefined]
        testCases.forEach((value) => {
            expect(isString(value)).toBe(_isString(value))
        })
    })
})

describe('special cases', () => {
    it('handles string objects', () => {
        // eslint-disable-next-line no-new-wrappers
        const testCases = [new String('hello'), new String('')]
        testCases.forEach((strObj) => {
            expect(isString(strObj)).toBe(_isString(strObj))
        })
    })

    it('handles symbols', () => {
        // eslint-disable-next-line symbol-description
        const testCases = [Symbol('hello'), Symbol()]
        testCases.forEach((sym) => {
            expect(isString(sym)).toBe(_isString(sym))
        })
    })
})
