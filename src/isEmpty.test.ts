import _isEmpty from 'lodash/isEmpty'
import {describe, test, expect} from 'vitest'

import isEmpty from './isEmpty'

describe('isEmpty function', () => {
    test('should return true for null', () => {
        expect(isEmpty(null)).toBe(true)
        expect(isEmpty(null)).toBe(_isEmpty(null))
    })

    test('should return true for undefined', () => {
        expect(isEmpty(undefined)).toBe(true)
        expect(isEmpty(undefined)).toBe(_isEmpty(undefined))
    })

    test('should return true for an empty string', () => {
        expect(isEmpty('')).toBe(true)
        expect(isEmpty('')).toBe(_isEmpty(''))
    })

    test('should return false for a non-empty string', () => {
        expect(isEmpty('hello')).toBe(false)
        expect(isEmpty('hello')).toBe(_isEmpty('hello'))
    })

    test('should return true for an empty array', () => {
        expect(isEmpty([])).toBe(true)
        expect(isEmpty([])).toBe(_isEmpty([]))
    })

    test('should return false for a non-empty array', () => {
        expect(isEmpty([1, 2, 3])).toBe(false)
        expect(isEmpty([1, 2, 3])).toBe(_isEmpty([1, 2, 3]))
    })

    test('should return true for an empty object', () => {
        expect(isEmpty({})).toBe(true)
        expect(isEmpty({})).toBe(_isEmpty({}))
    })

    test('should return false for a non-empty object', () => {
        const obj = {key: 'value'}
        expect(isEmpty(obj)).toBe(false)
        expect(isEmpty(obj)).toBe(_isEmpty(obj))
    })

    test('should return true for zero', () => {
        expect(isEmpty(0)).toBe(true)
        expect(isEmpty(0)).toBe(_isEmpty(0))
    })

    test('should return true for false', () => {
        expect(isEmpty(false)).toBe(true)
        expect(isEmpty(false)).toBe(_isEmpty(false))
    })

    test('should return true for true', () => {
        expect(isEmpty(true)).toBe(true)
        expect(isEmpty(true)).toBe(_isEmpty(true))
    })

    test('should return true for a function', () => {
        const fn = () => {}
        expect(isEmpty(fn)).toBe(true)
        expect(isEmpty(fn)).toBe(_isEmpty(fn))
    })

    test('should return true for a Date object', () => {
        const date = new Date()
        expect(isEmpty(date)).toBe(true)
        expect(isEmpty(date)).toBe(_isEmpty(date))
    })

    test('should return true for an empty Map', () => {
        const map = new Map()
        expect(isEmpty(map)).toBe(true)
        expect(isEmpty(map)).toBe(_isEmpty(map))
    })

    test('should return false for a non-empty Map', () => {
        const map = new Map()
        map.set('key', 'value')
        expect(isEmpty(map)).toBe(false)
        expect(isEmpty(map)).toBe(_isEmpty(map))
    })

    test('should return true for an empty Set', () => {
        const set = new Set()
        expect(isEmpty(set)).toBe(true)
        expect(isEmpty(set)).toBe(_isEmpty(set))
    })

    test('should return false for a non-empty Set', () => {
        const set = new Set()
        set.add('value')
        expect(isEmpty(set)).toBe(false)
        expect(isEmpty(set)).toBe(_isEmpty(set))
    })

    test('should return true for NaN', () => {
        expect(isEmpty(NaN)).toBe(true)
        expect(isEmpty(NaN)).toBe(_isEmpty(NaN))
    })

    test('should return true for Infinity', () => {
        expect(isEmpty(Infinity)).toBe(true)
        expect(isEmpty(Infinity)).toBe(_isEmpty(Infinity))
    })
})
