import _unzip from 'lodash/unzip'
import {describe, expect, it} from 'vitest'

import {unzip} from './unzip'

describe('unzip', () => {
    it('should unzip basic arrays with equal lengths', () => {
        const input = [
            ['a', 'b'],
            [1, 2],
            [true, false],
        ]
        const result = unzip<string | number | boolean>(input)
        const expected = _unzip<string | number | boolean>(input)
        expect(result).toEqual(expected)
    })

    it('should handle arrays of different lengths', () => {
        const input = [['a', 'b', 'c'], [1, 2], [true]]
        const result = unzip<string | number | boolean>(input)
        const expected = _unzip<string | number | boolean>(input)
        expect(result).toEqual(expected)
    })

    it('should return an empty array for empty inputs', () => {
        const result = unzip([])
        const expected = _unzip([])
        expect(result).toEqual(expected)
    })

    it('should handle a single array input', () => {
        const input = [['a', 'b', 'c']]
        const result = unzip(input)
        const expected = _unzip(input)
        expect(result).toEqual(expected)
    })

    it('should handle arrays with undefined and null values', () => {
        const input = [
            ['a', undefined, 'c'],
            [1, null, 3],
        ]
        const result = unzip<string | number | undefined | null>(input)
        const expected = _unzip<string | number | undefined | null>(input)
        expect(result).toEqual(expected)
    })

    it('should handle arrays with object values', () => {
        const input = [
            [{x: 1}, {y: 2}],
            [{z: 3}, {w: 4}],
        ]
        const result = unzip(input)
        const expected = _unzip(input)
        expect(result).toEqual(expected)
    })

    it('should handle arrays with nested arrays', () => {
        const input = [
            [1, [2, 3]],
            [4, [5, 6]],
        ]
        const result = unzip(input)
        const expected = _unzip(input)
        expect(result).toEqual(expected)
    })

    it('should handle arrays with different types', () => {
        const input = [
            ['a', 1, true],
            [{x: 1}, [2, 3], null],
        ]
        const result = unzip(input)
        const expected = _unzip(input)
        expect(result).toEqual(expected)
    })

    it('should handle large arrays efficiently', () => {
        const largeArray = Array(1000).fill(['a', 1])
        const result = unzip(largeArray)
        const expected = _unzip(largeArray)
        expect(result).toEqual(expected)
    })

    it('should handle arrays with symbols correctly', () => {
        const sym1 = Symbol('a')
        const sym2 = Symbol('b')
        const input = [
            [sym1, sym2],
            [1, 2],
        ]
        const result = unzip(input)
        const expected = _unzip(input)
        expect(result.map((arr) => arr.map((item) => (item instanceof Symbol ? item.description : item)))).toEqual(
            expected.map((arr) => arr.map((item) => (item instanceof Symbol ? item.description : item))),
        )
    })

    it('should handle arrays with functions correctly', () => {
        const fn1 = () => {}
        const fn2 = () => {}
        const input = [
            [fn1, fn2],
            [1, 2],
        ]
        const result = unzip(input)
        const expected = _unzip(input)
        expect(result).toEqual(expected)
    })

    it('should handle arrays with NaN and Infinity values correctly', () => {
        const input = [
            [NaN, Infinity],
            [1, 2],
        ]
        const result = unzip(input)
        const expected = _unzip(input)
        expect(result).toEqual(expected)
    })

    it('should handle arrays with Date objects correctly', () => {
        const date1 = new Date('2023-01-01')
        const date2 = new Date('2023-01-02')
        const input = [
            [date1, date2],
            [1, 2],
        ]
        const result = unzip(input)
        const expected = _unzip(input)
        expect(result).toEqual(expected)
    })

    it('should handle arrays with RegExp objects correctly', () => {
        const regex1 = /abc/
        const regex2 = /def/
        const input = [
            [regex1, regex2],
            [1, 2],
        ]
        const result = unzip(input)
        const expected = _unzip(input)
        expect(result).toEqual(expected)
    })

    it('should return an empty array when input is null or undefined', () => {
        expect(unzip(null)).toEqual([])
        expect(unzip(undefined)).toEqual([])
    })

    it('should handle arrays with mixed types and lengths', () => {
        const input = [
            [1, 'a', true],
            [2, 'b'],
            [3, 'c', false, null],
        ]
        const result = unzip(input)
        const expected = _unzip(input)
        expect(result).toEqual(expected)
    })

    it('should handle very large arrays', () => {
        const largeArray = Array(10000).fill([1, 'a'])
        const result = unzip(largeArray)
        const expected = _unzip(largeArray)
        expect(result).toEqual(expected)
    })

    it('should handle arrays with empty arrays', () => {
        const input = [[], [1, 2], [3, 4, 5]]
        const result = unzip(input)
        const expected = _unzip(input)
        expect(result).toEqual(expected)
    })

    it('should handle arrays with all undefined values', () => {
        const input = [
            [undefined, undefined],
            [undefined, undefined],
        ]
        const result = unzip(input)
        const expected = _unzip(input)
        expect(result).toEqual(expected)
    })
})
