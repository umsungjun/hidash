import _join from 'lodash/join'
import {describe, expect, it} from 'vitest'

import {join} from './join'

describe('join', () => {
    describe('should match lodash behavior', () => {
        it('joins array elements with default separator', () => {
            const arrays = [
                [1, 2, 3],
                ['a', 'b', 'c'],
                [true, false, true],
                [null, undefined, NaN],
                [Infinity, -Infinity, 0],
                ['hello', '', 'world'],
            ]

            arrays.forEach((array) => {
                expect(join(array)).toBe(_join(array))
            })
        })

        it('joins with custom separator', () => {
            const testCases = [
                [[1, 2, 3], '-'],
                [['a', 'b', 'c'], '|'],
                [[true, false, true], '&'],
                [[null, undefined, NaN], ':'],
                [[], ','],
            ] as const

            testCases.forEach(([array, separator]) => {
                expect(join(array, separator)).toBe(_join(array, separator))
            })
        })

        it('handles empty arrays and various types', () => {
            const arrays = [[], [undefined], [null], [NaN], [0], ['']]

            arrays.forEach((array) => {
                expect(join(array)).toBe(_join(array))
            })
        })
    })
})
