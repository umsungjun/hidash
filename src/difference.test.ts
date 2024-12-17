import _difference from 'lodash/difference'
import {describe, it, expect} from 'vitest'

import {difference} from './difference'

describe('difference function comparison with lodash', () => {
    it('handles empty or null/undefined arrays', () => {
        const testCases = [
            {array: [], values: []},
            {array: null, values: []},
            {array: undefined, values: [[1, 2]]},
        ]
        testCases.forEach(({array, values}) => {
            expect(difference(array, ...values)).toStrictEqual(_difference(array, ...values))
        })
    })

    it('handles basic arrays', () => {
        const testCases = [
            {array: [2, 1], values: [[2, 3]]},
            {array: [1, 2, 3], values: [[1]]},
            {array: [1, 2, 3], values: [[4]]},
            {array: [1, 2, 2, 3], values: [[2]]},
        ]
        testCases.forEach(({array, values}) => {
            expect(difference(array, ...values)).toStrictEqual(_difference(array, ...values))
        })
    })

    it('handles multiple exclude arrays', () => {
        const testCases = [
            {array: [1, 2, 3, 4], values: [[2], [3, 5]]},
            {array: [5, 6, 7, 8], values: [[5, 9], [7]]},
            {array: [10, 20, 30], values: [[], [10, 40]]},
        ]
        testCases.forEach(({array, values}) => {
            expect(difference(array, ...values)).toStrictEqual(_difference(array, ...values))
        })
    })

    it('handles arrays with various data types', () => {
        const testCases = [
            {array: [1, 'a', true, null], values: [[true, 'a']]},
            {array: [undefined, 2, 'b'], values: [[null, 2]]},
            {array: [NaN, 'x', 3], values: [[NaN]]},
        ]
        testCases.forEach(({array, values}) => {
            const expected = _difference(array, ...values)
            const actual = difference(array, ...values)
            expect(actual.length).toBe(expected.length)
            actual.forEach((val, index) => {
                const expVal = expected[index]
                if (typeof val === 'number' && isNaN(val) && typeof expVal === 'number' && isNaN(expVal)) {
                    expect(true).toBe(true)
                } else {
                    expect(val).toStrictEqual(expVal)
                }
            })
        })
    })

    it('handles no differences', () => {
        const testCases = [
            {array: [1, 2, 3], values: [[]]},
            {array: [1, 2, 3], values: [[4, 5]]},
        ]
        testCases.forEach(({array, values}) => {
            expect(difference(array, ...values)).toStrictEqual(_difference(array, ...values))
        })
    })

    it('handles large arrays performance test (not a strict equality check)', () => {
        const largeArray = Array.from({length: 1000}, (_, i) => i)
        const excludeValues = Array.from({length: 500}, (_, i) => i * 2)
        expect(difference(largeArray, excludeValues)).toStrictEqual(_difference(largeArray, excludeValues))
    })
})
