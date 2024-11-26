import _toString from 'lodash/toString'
import {describe, expect, it} from 'vitest'

import toString from './toString'

describe('toString', () => {
    describe('should match lodash behavior', () => {
        it('primitive values', () => {
            const values = [null, undefined, '', 'hello', 0, -0, 42, -42, true, false, NaN, Infinity, -Infinity]

            values.forEach((value) => {
                expect(toString(value)).toBe(_toString(value))
            })
        })

        it('arrays', () => {
            const arrays = [
                [],
                [1, 2, 3],
                ['a', 'b', 'c'],
                [null, undefined],
                [true, false],
                [1, [2, [3, 4]], 5],
                [1, 'hello', null, undefined, [2, 3]],
            ]

            arrays.forEach((arr) => {
                expect(toString(arr)).toBe(_toString(arr))
            })
        })

        it('objects', () => {
            const objects = [{}, {toString: () => 'custom'}]

            objects.forEach((obj) => {
                expect(toString(obj)).toBe(_toString(obj))
            })
        })

        it('symbols', () => {
            const symbols = [Symbol('test'), Symbol(''), Symbol.for('test')]

            symbols.forEach((symbol) => {
                expect(toString(symbol)).toBe(_toString(symbol))
            })
        })
    })
})
