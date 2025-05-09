import _isArray from 'lodash/isArray'
import {describe, expect, it} from 'vitest'

import {isArray} from './isArray'

describe('isArray', () => {
    it('should return true for empty array', () => {
        expect(isArray([])).toBe(true)
        expect(isArray([])).toBe(_isArray([]))
    })

    it('should return true for non-empty array', () => {
        expect(isArray([1, 2, 3])).toBe(true)
        expect(isArray([1, 2, 3])).toBe(_isArray([1, 2, 3]))
    })

    it('should return false for non-array objects', () => {
        expect(isArray({})).toBe(false)
        expect(isArray({})).toBe(_isArray({}))
    })

    it('should return false for strings', () => {
        expect(isArray('string')).toBe(false)
        expect(isArray('string')).toBe(_isArray('string'))
    })

    it('should return false for numbers', () => {
        expect(isArray(21)).toBe(false)
        expect(isArray(21)).toBe(_isArray(21))
    })

    it('should return false for booleans', () => {
        expect(isArray(true)).toBe(false)
        expect(isArray(true)).toBe(_isArray(true))
    })

    it('should return false for null', () => {
        expect(isArray(null)).toBe(false)
        expect(isArray(null)).toBe(_isArray(null))
    })

    it('should return false for undefined', () => {
        expect(isArray(undefined)).toBe(false)
        expect(isArray(undefined)).toBe(_isArray(undefined))
    })

    it('should return false for symbols', () => {
        expect(isArray(Symbol('symbol'))).toBe(false)
        expect(isArray(Symbol('symbol'))).toBe(_isArray(Symbol('symbol')))
    })

    it('should return false for functions', () => {
        expect(isArray(function () {})).toBe(false)
        expect(isArray(function () {})).toBe(_isArray(function () {}))
    })

    it('should return false for Dates', () => {
        expect(isArray(new Date())).toBe(false)
        expect(isArray(new Date())).toBe(_isArray(new Date()))
    })

    it('should return false for Error', () => {
        expect(isArray(new Error())).toBe(false)
        expect(isArray(new Error())).toBe(_isArray(new Error()))
    })

    it('should return false for RegExp', () => {
        expect(isArray(/regex/)).toBe(false)
        expect(isArray(/regex/)).toBe(_isArray(/regex/))
    })

    it('should return false for Set', () => {
        expect(isArray(new Set())).toBe(false)
        expect(isArray(new Set())).toBe(_isArray(new Set()))
    })

    it('should return false for Map', () => {
        expect(isArray(new Map())).toBe(false)
        expect(isArray(new Map())).toBe(_isArray(new Map()))
    })
})
