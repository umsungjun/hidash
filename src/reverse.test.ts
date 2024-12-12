import _reverse from 'lodash/reverse'
import {describe, expect, it} from 'vitest'

import reverse from './reverse'

describe('reverse', () => {
    describe('Basic functionality', () => {
        const testCases = [[[1, 2, 3, 4, 5]], [['a', 'b', 'c']], [[true, false, true]], [[null, undefined, 0]], [[]]]

        testCases.forEach(([array], index) => {
            it(`should match lodash output: basic case ${index + 1}`, () => {
                const input = [...array]
                expect(reverse(input)).toEqual(_reverse([...array]))
            })
        })
    })

    describe('In-place mutation', () => {
        it('should mutate the original array', () => {
            const array = [1, 2, 3]

            const result = reverse(array)

            expect(result).toBe(array)
            expect(result).toEqual([3, 2, 1])

            const array2 = [1, 2, 3]

            const _result = _reverse(array2)

            expect(_result).toBe(array2)
            expect(_result).toEqual([3, 2, 1])
        })
    })

    describe('Edge cases', () => {
        it('should handle empty arrays', () => {
            const array = []
            expect(reverse(array)).toEqual([])
            expect(reverse(array)).toEqual(_reverse(array))
        })

        it('should handle single-element arrays', () => {
            const array = [42]
            expect(reverse(array)).toEqual([42])
            expect(reverse(array)).toEqual(_reverse(array))
        })

        it('should handle arrays with mixed types', () => {
            const array = [1, 'a', null, undefined, true]
            expect(reverse(array)).toEqual([true, undefined, null, 'a', 1])
            expect(reverse(array)).toEqual(_reverse(array))
        })
    })
})
