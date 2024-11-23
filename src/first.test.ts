import _first from 'lodash/first'
import {describe, test, expect} from 'vitest'

import {first} from './first'

describe('first function', () => {
    test('returns undefined for null and undefined', () => {
        expect(first(null)).toBeUndefined()
        expect(first(null)).toEqual(_first(null))
        expect(first(undefined)).toBeUndefined()
        expect(first(undefined)).toEqual(_first(undefined))
    })

    test('returns first element for arrays', () => {
        expect(first([])).toBeUndefined()
        expect(first([])).toEqual(_first([]))

        const arr = ['a', 'b', 'c']
        expect(first(arr)).toBe('a')
        expect(first(arr)).toEqual(_first(arr))

        const numArr = [1, 2, 3]
        expect(first(numArr)).toBe(1)
        expect(first(numArr)).toEqual(_first(numArr))
    })

    test('handles empty arrays', () => {
        expect(first([])).toBeUndefined()
        expect(first([])).toEqual(_first([]))

        const emptyArr = new Array(3)
        expect(first(emptyArr)).toBeUndefined()
        expect(first(emptyArr)).toEqual(_first(emptyArr))
    })

    test('handles sparse arrays', () => {
        const sparseArray = Array(3)
        sparseArray[1] = 'b'
        expect(first(sparseArray)).toBeUndefined()
        expect(first(sparseArray)).toEqual(_first(sparseArray))
    })

    test('handles different types in arrays', () => {
        expect(first([null])).toBeNull()
        expect(first([null])).toEqual(_first([null]))

        expect(first([undefined])).toBeUndefined()
        expect(first([undefined])).toEqual(_first([undefined]))

        expect(first([false])).toBe(false)
        expect(first([false])).toEqual(_first([false]))

        expect(first([0])).toBe(0)
        expect(first([0])).toEqual(_first([0]))

        expect(first([''])).toBe('')
        expect(first([''])).toEqual(_first(['']))
    })

    test('handles arrays with mixed types', () => {
        const mixedArr = [1, 'string', null, undefined, false]
        expect(first(mixedArr)).toBe(1)
        expect(first(mixedArr)).toEqual(_first(mixedArr))
    })

    test('handles large arrays efficiently', () => {
        const largeArray = new Array(10000).fill(0)
        largeArray[0] = 'first'
        expect(first(largeArray)).toBe('first')
        expect(first(largeArray)).toEqual(_first(largeArray))
    })

    test('handles string objects correctly', () => {
        const strObj = Object('hello')
        expect(first(strObj)).toEqual(_first(strObj))
    })

    test('maintains array reference', () => {
        const arr = ['a', 'b', 'c']
        const result = first(arr)
        arr[0] = 'd'
        expect(result).toBe('a')
        expect(result).toEqual(_first(['a', 'b', 'c']))
    })
})
