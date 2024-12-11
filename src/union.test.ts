import _union from 'lodash/union'
import {describe, expect, it} from 'vitest'

import {union} from './union'

describe('union', () => {
    describe('should match lodash behavior', () => {
        it('unions arrays of primitives', () => {
            const arrays = [
                [
                    [1, 2, 3],
                    [3, 4, 5],
                    [5, 6],
                ],
                [
                    ['a', 'b'],
                    ['b', 'c'],
                ],
                [
                    [true, false],
                    [false, true, true],
                ],
                [
                    [null, undefined],
                    [undefined, null],
                ],
            ]

            arrays.forEach(([...args]) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                expect(union(...args)).toEqual(_union(...args))
            })
        })

        it('handles empty and undefined inputs', () => {
            const inputs = [
                [undefined, null],
                [[], undefined],
                [[], null],
                [undefined, []],
                [null, []],
            ]

            inputs.forEach(([...args]) => {
                expect(union(...args)).toEqual(_union(...args))
            })
        })

        it('works with complex nested arrays', () => {
            const testCases = [
                [[1, [2, 3]], [3, [4, 5]], [[5, 6]]],
                [
                    ['x', ['y']],
                    ['y', ['z']],
                ],
                [[[true, false]], [[false, true]]],
            ]

            testCases.forEach(([...args]) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                expect(union(...args)).toEqual(_union(...args))
            })
        })
    })
})
