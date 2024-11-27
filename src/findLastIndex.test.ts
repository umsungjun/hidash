import _findLastIndex from 'lodash/findLastIndex'
import {describe, it, expect} from 'vitest'

import {findLastIndex} from './findLastIndex'

describe('findLastIndex', () => {
    it('should find the last truthy value if predicate is undefined', () => {
        const arr = [0, 0, 1, 0, 0]
        expect(findLastIndex(arr)).toBe(2)
        expect(findLastIndex(arr)).toBe(_findLastIndex(arr))

        const arr2 = [1, 2, 3, 3, 4, 5]
        expect(findLastIndex(arr2)).toBe(5)
        expect(findLastIndex(arr2)).toBe(_findLastIndex(arr2))
    })

    it('should handle fromIndex correctly with undefined predicate', () => {
        const arr = [0, 2, 3, 3, 4, 5]
        expect(findLastIndex(arr, undefined, -1000)).toBe(-1)
        expect(findLastIndex(arr, undefined, -1000)).toBe(_findLastIndex(arr, undefined, -1000))

        const arr2 = [1, 2, 3, 3, 4, 5]
        expect(findLastIndex(arr2, undefined, 3)).toBe(3)
        expect(findLastIndex(arr2, undefined, 3)).toBe(_findLastIndex(arr2, undefined, 3))
    })

    it('should handle custom predicate function', () => {
        const arr = [1, 2, 3, 3, 4, 5]

        expect(findLastIndex(arr, (v) => v < 4)).toBe(3)
        expect(findLastIndex(arr, (v) => v < 4)).toBe(_findLastIndex(arr, (v) => v < 4))

        const str = 'hello world'
        expect(findLastIndex(str.split(''), (v) => v === 'o')).toBe(7)
        expect(findLastIndex(str.split(''), (v) => v === 'o')).toBe(_findLastIndex(str.split(''), (v) => v === 'o'))

        expect(findLastIndex(str.split(''), (v) => v === 'o', 5)).toBe(4)
        expect(findLastIndex(str.split(''), (v) => v === 'o', 5)).toBe(
            _findLastIndex(str.split(''), (v) => v === 'o', 5),
        )
    })

    it('should handle string predicate (key lookup)', () => {
        const array = [{a: 1}, {a: 2}, {a: 3}]
        expect(findLastIndex(array, 'a')).toBe(2)
        expect(findLastIndex(array, 'a')).toBe(_findLastIndex(array, 'a'))

        expect(findLastIndex(array, 'b')).toBe(-1)
        expect(findLastIndex(array, 'b')).toBe(_findLastIndex(array, 'b'))
    })

    it('should handle arrays of objects with number as predicate (key lookup)', () => {
        const array = [{1: 'value'}, {}, {1: 'other'}]
        expect(findLastIndex(array, 1)).toBe(2)
        expect(findLastIndex(array, 1)).toBe(_findLastIndex(array, 1))
    })

    it('should handle array predicate ([key, value])', () => {
        const array = [{a: 1}, {a: 2}, {a: 3}]
        expect(findLastIndex(array, ['a', 2])).toBe(1)
        expect(findLastIndex(array, ['a', 2])).toBe(_findLastIndex(array, ['a', 2]))
    })

    it('should handle partial match for nested objects', () => {
        const array = [
            {
                name: {
                    first: 'a',
                    last: 'b',
                },
            },
            {
                name: {
                    first: 'aob',
                    last: 'btb',
                },
            },
        ]
        const predicate = {
            name: {
                first: 'aob',
            },
        }
        expect(findLastIndex(array, predicate)).toBe(1)
        expect(findLastIndex(array, predicate)).toBe(_findLastIndex(array, predicate))
    })

    it('should handle edge cases for strings as arrays', () => {
        const str = 'hello world'
        expect(findLastIndex(str.split(''), (v) => v === 'o')).toBe(7)
        expect(findLastIndex(str.split(''), (v) => v === 'o')).toBe(_findLastIndex(str.split(''), (v) => v === 'o'))

        expect(findLastIndex(str.split(''), (v) => v === 'x')).toBe(-1)
        expect(findLastIndex(str.split(''), (v) => v === 'x')).toBe(_findLastIndex(str.split(''), (v) => v === 'x'))
    })

    it('should return -1 if no match is found', () => {
        expect(findLastIndex([1, 2, 3, 3, 4, 5], (v) => v > 10)).toBe(-1)
        expect(findLastIndex([1, 2, 3, 3, 4, 5], (v) => v > 10)).toBe(_findLastIndex([1, 2, 3, 3, 4, 5], (v) => v > 10))
    })

    it('should handle arrays with mixed data types', () => {
        const array = [1, '2', {a: 1}, [3], null, undefined, false, true]
        expect(findLastIndex(array, (v) => typeof v === 'string')).toBe(1)
        expect(findLastIndex(array, (v) => typeof v === 'string')).toBe(
            _findLastIndex(array, (v) => typeof v === 'string'),
        )

        expect(findLastIndex(array, (v) => Array.isArray(v))).toBe(3)
        expect(findLastIndex(array, (v) => Array.isArray(v))).toBe(_findLastIndex(array, (v) => Array.isArray(v)))

        expect(findLastIndex(array, undefined)).toBe(7)
        expect(findLastIndex(array, undefined)).toBe(_findLastIndex(array, undefined))
    })

    it('should handle deeply nested objects with partial matches', () => {
        const array = [
            {user: {name: {first: 'Alice', last: 'Smith'}, age: 30}},
            {user: {name: {first: 'Bob', last: 'Brown'}, age: 25}},
            {user: {name: {first: 'Alice', last: 'Johnson'}, age: 22}},
        ]
        const predicate = {user: {name: {first: 'Alice'}}}
        expect(findLastIndex(array, predicate)).toBe(2)
        expect(findLastIndex(array, predicate)).toBe(_findLastIndex(array, predicate))
    })

    it('should work with empty arrays', () => {
        expect(findLastIndex([])).toBe(-1)
        expect(findLastIndex([])).toBe(_findLastIndex([]))

        expect(findLastIndex([], (v) => v === 1)).toBe(-1)
        expect(findLastIndex([], (v) => v === 1)).toBe(_findLastIndex([], (v) => v === 1))

        expect(findLastIndex([], 'a')).toBe(-1)
        expect(findLastIndex([], 'a')).toBe(_findLastIndex([], 'a'))
    })

    it('should handle arrays with undefined or null values', () => {
        const array = [undefined, null, 0, false, '', 'truthy']
        expect(findLastIndex(array)).toBe(5)
        expect(findLastIndex(array)).toBe(_findLastIndex(array))

        expect(findLastIndex(array, undefined)).toBe(5)
        expect(findLastIndex(array, undefined)).toBe(_findLastIndex(array, undefined))

        expect(findLastIndex(array, null)).toBe(5)
        expect(findLastIndex(array, null)).toBe(_findLastIndex(array, null))
    })

    it('should handle sparse arrays', () => {
        // eslint-disable-next-line no-sparse-arrays
        const sparseArray = [0, , 1, , , 3]
        expect(findLastIndex(sparseArray)).toBe(5)
        expect(findLastIndex(sparseArray)).toBe(_findLastIndex(sparseArray))
    })

    it('should handle large arrays efficiently', () => {
        const array = new Array(1000000).fill(0).map((_, i) => (i === 999999 ? 1 : 0))
        expect(findLastIndex(array, (value) => value === 1)).toBe(999999)
        expect(findLastIndex(array, (value) => value === 1)).toBe(_findLastIndex(array, (value) => value === 1))
    })
})
