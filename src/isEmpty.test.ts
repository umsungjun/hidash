import {describe, test, expect} from 'vitest'

import isEmpty from './isEmpty'

describe('isEmpty function', () => {
    test('should return true for null', () => {
        expect(isEmpty(null)).toBe(true)
    })

    test('should return true for undefined', () => {
        expect(isEmpty(undefined)).toBe(true)
    })

    test('should return true for an empty string', () => {
        expect(isEmpty('')).toBe(true)
    })

    test('should return false for a non-empty string', () => {
        expect(isEmpty('hello')).toBe(false)
    })

    test('should return true for an empty array', () => {
        expect(isEmpty([])).toBe(true)
    })

    test('should return false for a non-empty array', () => {
        expect(isEmpty([1, 2, 3])).toBe(false)
    })

    test('should return true for an empty object', () => {
        expect(isEmpty({})).toBe(true)
    })

    test('should return false for a non-empty object', () => {
        expect(isEmpty({key: 'value'})).toBe(false)
    })

    test('should return false for zero', () => {
        expect(isEmpty(0)).toBe(false)
    })

    test('should return false for false', () => {
        expect(isEmpty(false)).toBe(false)
    })

    test('should return false for true', () => {
        expect(isEmpty(true)).toBe(false)
    })

    test('should return false for a function', () => {
        expect(isEmpty(() => {})).toBe(false)
    })

    test('should return false for a Date object', () => {
        expect(isEmpty(new Date())).toBe(false)
    })

    test('should return true for an empty Map', () => {
        expect(isEmpty(new Map())).toBe(true)
    })

    test('should return false for a non-empty Map', () => {
        const map = new Map()
        map.set('key', 'value')
        expect(isEmpty(map)).toBe(false)
    })

    test('should return true for an empty Set', () => {
        expect(isEmpty(new Set())).toBe(true)
    })

    test('should return false for a non-empty Set', () => {
        const set = new Set()
        set.add('value')
        expect(isEmpty(set)).toBe(false)
    })

    test('should return false for NaN', () => {
        expect(isEmpty(NaN)).toBe(false)
    })

    test('should return false for Infinity', () => {
        expect(isEmpty(Infinity)).toBe(false)
    })
})
