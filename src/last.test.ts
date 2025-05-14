import _last from 'lodash/last'
import {describe, test, expect} from 'vitest'

import {last} from './last'

describe('last function', () => {
    test('returns undefined for null and undefined', () => {
        expect(last(null)).toBeUndefined()
        expect(last(null)).toEqual(_last(null))
        expect(last(undefined)).toBeUndefined()
        expect(last(undefined)).toEqual(_last(undefined))
    })

    test('returns last element for arrays', () => {
        const arr = ['a', 'b', 'c']
        expect(last(arr)).toBe('c')
        expect(last(arr)).toEqual(_last(arr))

        const numArr = [1, 2, 3]
        expect(last(numArr)).toBe(3)
        expect(last(numArr)).toEqual(_last(numArr))
    })

    test('handles empty arrays', () => {
        expect(last([])).toBeUndefined()
        expect(last([])).toEqual(_last([]))

        const emptyArr = new Array(3)
        expect(last(emptyArr)).toBeUndefined()
        expect(last(emptyArr)).toEqual(_last(emptyArr))
    })

    test('handles sparse arrays', () => {
        const sparseArray = Array(3)
        sparseArray[1] = 'b'
        expect(last(sparseArray)).toBeUndefined()
        expect(last(sparseArray)).toEqual(_last(sparseArray))

        // Last element defined
        const sparseWithLast = Array(3)
        sparseWithLast[2] = 'c'
        expect(last(sparseWithLast)).toBe('c')
        expect(last(sparseWithLast)).toEqual(_last(sparseWithLast))
    })

    test('handles different types in arrays', () => {
        expect(last([null])).toBeNull()
        expect(last([null])).toEqual(_last([null]))

        expect(last([undefined])).toBeUndefined()
        expect(last([undefined])).toEqual(_last([undefined]))

        expect(last([false])).toBe(false)
        expect(last([false])).toEqual(_last([false]))

        expect(last([0])).toBe(0)
        expect(last([0])).toEqual(_last([0]))

        expect(last([''])).toBe('')
        expect(last([''])).toEqual(_last(['']))
    })

    test('handles arrays with mixed types', () => {
        const mixedArr = [1, 'string', null, undefined, false]
        expect(last(mixedArr)).toBe(false)
        expect(last(mixedArr)).toEqual(_last(mixedArr))
    })

    test('handles large arrays efficiently', () => {
        const largeArray = new Array(10000).fill(0)
        largeArray[9999] = 'last'
        expect(last(largeArray)).toBe('last')
        expect(last(largeArray)).toEqual(_last(largeArray))
    })
    test('handles string objects correctly', () => {
        const strObj = Object('hello')
        expect(last(strObj)).toEqual(_last(strObj))
    })

    test('maintains array reference', () => {
        const arr = ['a', 'b', 'c']
        const result = last(arr)
        arr[2] = 'd'
        expect(result).toBe('c')
        expect(result).toEqual(_last(['a', 'b', 'c']))
    })

    test('handles single element arrays', () => {
        expect(last(['single'])).toBe('single')
        expect(last(['single'])).toEqual(_last(['single']))
    })

    test('handles arrays with holes at the end', () => {
        const arr = ['a', 'b', 'c']
        delete arr[2]
        expect(last(arr)).toBeUndefined()
        expect(last(arr)).toEqual(_last(arr))
    })
})
