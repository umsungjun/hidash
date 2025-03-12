import _pickBy from 'lodash/pickBy'
import {describe, expect, it} from 'vitest'

import pickBy from './pickBy'

describe('pickBy', () => {
    it('should handle basic object cases', () => {
        const obj = {a: 1, b: 0, c: true}
        const predicate = (value: unknown) => Boolean(value)
        expect(pickBy(obj, predicate)).toEqual(_pickBy(obj, predicate))
    })

    it('should handle null/undefined', () => {
        expect(pickBy(null)).toEqual(_pickBy(null))
        expect(pickBy(undefined)).toEqual(_pickBy(undefined))
    })

    it('should handle objects with various value types', () => {
        const obj = {a: 1, b: '', c: false, d: [], e: {}}
        const predicate = (value: unknown) => Boolean(value)
        expect(pickBy(obj, predicate)).toEqual(_pickBy(obj, predicate))
    })

    it('should handle nested objects', () => {
        const obj = {a: {b: 2, c: false}, d: 0, e: true}
        const predicate = (value: unknown) => typeof value === 'object'
        expect(pickBy(obj, predicate)).toEqual(_pickBy(obj, predicate))
    })

    it('should handle arrays as object values', () => {
        const obj = {a: [1, 2, 3], b: [], c: true}
        const predicate = (value: unknown) => Array.isArray(value) && value.length > 0
        expect(pickBy(obj, predicate)).toEqual(_pickBy(obj, predicate))
    })

    it('should handle array-like objects', () => {
        const obj = {0: 'a', 1: 'b', 2: null, length: 3}
        const predicate = (value: unknown) => Boolean(value)
        expect(pickBy(obj, predicate)).toEqual(_pickBy(obj, predicate))
    })

    it('should handle objects with partial matching using shorthand', () => {
        const objArray = [
            {name: 'Alice', active: true},
            {name: 'Bob', active: false},
        ]
        expect(pickBy(objArray, {active: true})).toEqual(_pickBy(objArray, {active: true}))
    })

    it('should handle empty objects and arrays', () => {
        expect(pickBy({})).toEqual(_pickBy({}))
        expect(pickBy([], (v) => !!v)).toEqual(_pickBy([], (v) => !!v))
    })

    it('should handle objects with numeric keys', () => {
        const obj = {1: 'one', 2: 'two', 3: null}
        const predicate = (value: unknown) => typeof value === 'string'
        expect(pickBy(obj, predicate)).toEqual(_pickBy(obj, predicate))
    })

    it('should use default predicate when none is provided', () => {
        const obj = {a: 1, b: 0, c: true, d: false}
        expect(pickBy(obj)).toEqual(_pickBy(obj))
    })

    it('should pick elements from a string', () => {
        const result = pickBy('hello world', (v) => v === 'l')
        const lodashResult = _pickBy('hello world', (v) => v === 'l')
        expect(result).toEqual(lodashResult)
    })

    it('should pick elements from an array', () => {
        const result = pickBy([1, 2, 3, 4, 5], (v) => v % 2 === 0)
        const lodashResult = _pickBy([1, 2, 3, 4, 5], (v) => v % 2 === 0)
        expect(result).toEqual(lodashResult)
    })

    it('should pick elements from an array with mixed types', () => {
        const result = pickBy([1, 'a', 3, 'b', 5], (v) => typeof v === 'string')
        const lodashResult = _pickBy([1, 'a', 3, 'b', 5], (v) => typeof v === 'string')
        expect(result).toEqual(lodashResult)
    })

    it('should pick elements from a nested object', () => {
        const result = pickBy(
            {user: {name: 'Alice', age: 25}, admin: {role: 'admin', permissions: 'all'}},
            (v) => typeof v.name === 'string' && v.name.length > 3,
        )
        const lodashResult = _pickBy(
            {user: {name: 'Alice', age: 25}, admin: {role: 'admin', permissions: 'all'}},
            (v) => typeof v.name === 'string' && v.name.length > 3,
        )
        expect(result).toEqual(lodashResult)
    })

    it('should pick elements from an array of numbers', () => {
        const result = pickBy([1, 2, 3, 4, 5], (v) => v > 2)
        const lodashResult = _pickBy([1, 2, 3, 4, 5], (v) => v > 2)
        expect(result).toEqual(lodashResult)
    })

    it('should pick elements from an array of booleans', () => {
        const result = pickBy([true, false, true, false], (v) => v === true)
        const lodashResult = _pickBy([true, false, true, false], (v) => v === true)
        expect(result).toEqual(lodashResult)
    })

    it('should handle edge cases with mixed data types', () => {
        const obj = {a: null, b: undefined, c: NaN, d: 0, e: false, f: '', g: true, h: 1}
        const predicate = (value: unknown) => value !== null && value !== undefined
        expect(pickBy(obj, predicate)).toEqual(_pickBy(obj, predicate))
    })

    it('should return empty object for null', () => {
        expect(pickBy(null)).toEqual({})
    })

    it('should return empty object for undefined', () => {
        expect(pickBy(undefined)).toEqual({})
    })

    it('should handle objects with null or undefined values correctly', () => {
        const obj = {a: null, b: undefined, c: 1}
        const predicate = (value: unknown) => Boolean(value)
        expect(pickBy(obj, predicate)).toEqual({c: 1})
    })
})
