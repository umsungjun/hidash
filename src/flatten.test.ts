import _flatten from 'lodash/flatten'
import {describe, test, expect} from 'vitest'

import {flatten} from './flatten'

describe('flatten function', () => {
    test('returns empty array for null and undefined', () => {
        expect(flatten(null)).toEqual(_flatten(null))
        expect(flatten(undefined)).toEqual(_flatten(undefined))
    })

    test('flattens arrays a single level deep', () => {
        expect(flatten([1, [2, [3, [4]], 5]])).toEqual(_flatten([1, [2, [3, [4]], 5]]))
        expect(flatten([['a'], ['b', ['c']]])).toEqual(_flatten([['a'], ['b', ['c']]]))
    })

    test('handles empty arrays', () => {
        expect(flatten([])).toEqual(_flatten([]))
        expect(flatten([[]])).toEqual(_flatten([[]]))
    })

    test('handles arrays with different types', () => {
        expect(flatten([null])).toEqual(_flatten([null]))
        expect(flatten([undefined])).toEqual(_flatten([undefined]))
        expect(flatten([false])).toEqual(_flatten([false]))
        expect(flatten([0])).toEqual(_flatten([0]))
        expect(flatten([''])).toEqual(_flatten(['']))
    })

    test('handles arrays with mixed types', () => {
        const mixedArr = [1, 'string', null, undefined, false]
        expect(flatten(mixedArr)).toEqual(_flatten(mixedArr))
    })

    test('handles sparse arrays', () => {
        const sparseArray = Array(3)
        sparseArray[1] = 'b'
        expect(flatten(sparseArray)).toEqual(_flatten(sparseArray))
    })

    test('handles large arrays efficiently', () => {
        const largeArray = new Array(10000).fill(0)
        largeArray[0] = 'first'
        expect(flatten(largeArray)).toEqual(_flatten(largeArray))
    })

    test('maintains original array reference', () => {
        const arr = ['a', 'b', 'c']
        const result = flatten(arr)
        arr[0] = 'd'
        expect(result).toEqual(_flatten(['a', 'b', 'c']))
    })

    test('handles string-like objects correctly', () => {
        const strObj = Object('hello')
        expect(flatten([strObj])).toEqual(_flatten([strObj]))
    })
})
