import _findIndex from 'lodash/findIndex'
import {describe, it, expect} from 'vitest'

import {findIndex} from './findIndex'

describe('findIndex', () => {
    it('should find the first matching element based on the predicate', () => {
        const array = [1, 2, 3, 4, 5]

        expect(findIndex(array, (x) => x === 3)).toBe(2)
        expect(findIndex(array, (x) => x > 3)).toBe(3)
        expect(findIndex(array, (x) => x === 10)).toBe(-1)
        expect(findIndex(array, (x) => x === 3)).toBe(_findIndex(array, (x) => x === 3))
        expect(findIndex(array, (x) => x > 3)).toBe(_findIndex(array, (x) => x > 3))
        expect(findIndex(array, (x) => x === 10)).toBe(_findIndex(array, (x) => x === 10))
    })

    it('should handle shorthand predicates', () => {
        const nestedArray = [{a: 1}, {a: 2}, {a: 3}]

        expect(findIndex(nestedArray, {a: 2})).toBe(1)
        expect(findIndex(nestedArray, {a: 10})).toBe(-1)
        expect(findIndex(nestedArray, {a: 2})).toBe(_findIndex(nestedArray, {a: 2}))
        expect(findIndex(nestedArray, {a: 10})).toBe(_findIndex(nestedArray, {a: 10}))
    })

    it('should handle array shorthand predicates', () => {
        const nestedArray = [{a: 1}, {a: 2}, {a: 3}]

        expect(findIndex(nestedArray, ['a', 2])).toBe(1)
        expect(findIndex(nestedArray, ['a', 10])).toBe(-1)
        expect(findIndex(nestedArray, ['a', 2])).toBe(_findIndex(nestedArray, ['a', 2]))
        expect(findIndex(nestedArray, ['a', 10])).toBe(_findIndex(nestedArray, ['a', 10]))
    })

    it('should support a fromIndex parameter (positive values)', () => {
        const array = [1, 2, 3, 4, 5]

        expect(findIndex(array, (x) => x === 2, 2)).toBe(-1)
        expect(findIndex(array, (x) => x === 3, 2)).toBe(2)
        expect(findIndex(array, (x) => x > 3, 2)).toBe(3)
        expect(findIndex(array, (x) => x === 2, 2)).toBe(_findIndex(array, (x) => x === 2, 2))
        expect(findIndex(array, (x) => x === 3, 2)).toBe(_findIndex(array, (x) => x === 3, 2))
        expect(findIndex(array, (x) => x > 3, 2)).toBe(_findIndex(array, (x) => x > 3, 2))
    })

    it('should support a fromIndex parameter (negative values)', () => {
        const array = [1, 2, 3, 4, 5]

        expect(findIndex(array, (x) => x === 2, -4)).toBe(1)
        expect(findIndex(array, (x) => x > 3, -2)).toBe(3)
        expect(findIndex(array, undefined, -1000)).toBe(0)
        expect(findIndex(array, (x) => x === 2, -4)).toBe(_findIndex(array, (x) => x === 2, -4))
        expect(findIndex(array, (x) => x > 3, -2)).toBe(_findIndex(array, (x) => x > 3, -2))
        expect(findIndex(array, undefined, -1000)).toBe(_findIndex(array, undefined, -1000))
    })

    it('should support fromIndex out of range', () => {
        const array = [1, 2, 3, 4, 5]

        expect(findIndex(array, (x) => x === 3, 10)).toBe(-1)
        expect(findIndex(array, (x) => x === 3, -10)).toBe(2)
        expect(findIndex(array, (x) => x === 3, 10)).toBe(_findIndex(array, (x) => x === 3, 10))
        expect(findIndex(array, (x) => x === 3, -10)).toBe(_findIndex(array, (x) => x === 3, -10))
    })

    it('should return -1 for an empty array', () => {
        expect(findIndex([], (x) => x === 1)).toBe(-1)
        expect(findIndex([], (x) => x === 1)).toBe(_findIndex([], (x) => x === 1))
    })

    it('should handle complex objects with nested properties', () => {
        const nestedArray = [
            {name: {first: 'Alice', last: 'Smith'}},
            {name: {first: 'Bob', last: 'Jones'}},
            {name: {first: 'Alice', last: 'Brown'}},
        ]

        expect(findIndex(nestedArray, {name: {first: 'Alice'}})).toBe(0)
        expect(findIndex(nestedArray, {name: {first: 'Alice', last: 'Brown'}})).toBe(2)
        expect(findIndex(nestedArray, {name: {first: 'Alice'}})).toBe(_findIndex(nestedArray, {name: {first: 'Alice'}}))
        expect(findIndex(nestedArray, {name: {first: 'Alice', last: 'Brown'}})).toBe(
            _findIndex(nestedArray, {name: {first: 'Alice', last: 'Brown'}}),
        )
    })

    it('should handle truthy values if no predicate is provided', () => {
        const array = [0, 1, false, 2, '', 3]

        expect(findIndex(array)).toBe(1)
        expect(findIndex(array)).toBe(_findIndex(array))
    })

    it('should handle sparse arrays', () => {
        // eslint-disable-next-line no-sparse-arrays
        const sparseArray = [0, , 1, , , 3]
        expect(findIndex(sparseArray)).toBe(2)
        expect(findIndex(sparseArray)).toBe(_findIndex(sparseArray))
    })
})
