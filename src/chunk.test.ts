import _chunk from 'lodash/chunk'
import {describe, expect, it} from 'vitest'

import {chunk} from './chunk'

describe('chunks', () => {
    it('handles basic arrays', () => {
        const result = chunk(['a', 'b', 'c', 'd'], 2)
        expect(result).toEqual(_chunk(['a', 'b', 'c', 'd'], 2))
    })

    it('handles mixed type arrays', () => {
        const result = chunk([1, 'b', null, true], 2)
        expect(result).toEqual(_chunk([1, 'b', null, true], 2))
    })

    it('handles nested arrays', () => {
        const result = chunk(
            [
                [1, 2],
                [3, 4],
                [5, 6],
            ],
            2,
        )
        expect(result).toEqual(
            _chunk(
                [
                    [1, 2],
                    [3, 4],
                    [5, 6],
                ],
                2,
            ),
        )
    })

    it('handles empty arrays', () => {
        const result = chunk([], 2)
        expect(result).toEqual(_chunk([], 2))
    })

    it('handles null input', () => {
        const result = chunk(null, 2)
        expect(result).toEqual(_chunk(null, 2))
    })

    it('handles undefined input', () => {
        const result = chunk(undefined, 2)
        expect(result).toEqual(_chunk(undefined, 2))
    })

    it('handles negative size', () => {
        const result = chunk([1, 2, 3], -1)
        expect(result).toEqual(_chunk([1, 2, 3], -1))
    })

    it('handles zero size', () => {
        const result = chunk([1, 2, 3], 0)
        expect(result).toEqual(_chunk([1, 2, 3], 0))
    })

    it('handles large size', () => {
        const result = chunk([1, 2, 3, 4], 10)
        expect(result).toEqual(_chunk([1, 2, 3, 4], 10))
    })

    it('handles fractional size', () => {
        const result = chunk([1, 2, 3, 4, 5], 2.5)
        expect(result).toEqual(_chunk([1, 2, 3, 4, 5], 2.5))
    })

    it('handles Int8Array correctly', () => {
        const arr = new Int8Array([1, 2, 3])
        const result = chunk(Array.from(arr), 2)
        expect(result).toEqual(_chunk(Array.from(arr), 2))
    })

    it('handles Uint8Array correctly', () => {
        const arr = new Uint8Array([1, 2, 3])
        const result = chunk(Array.from(arr), 2)
        expect(result).toEqual(_chunk(Array.from(arr), 2))
    })

    it('handles Float32Array correctly', () => {
        const arr = new Float32Array([1, 2, 3])
        const result = chunk(Array.from(arr), 2)
        expect(result).toEqual(_chunk(Array.from(arr), 2))
    })

    it('handles Sets correctly', () => {
        const set = new Set([1, 2, 3, 4])
        const result = chunk(Array.from(set), 2)
        expect(result).toEqual(_chunk(Array.from(set), 2))
    })

    it('handles Maps correctly', () => {
        const map = new Map([
            [1, 'a'],
            [2, 'b'],
            [3, 'c'],
        ])
        const result = chunk(Array.from(map), 2)
        expect(result).toEqual(_chunk(Array.from(map), 2))
    })
})
