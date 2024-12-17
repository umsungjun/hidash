import _times from 'lodash/times'
import {describe, it, expect} from 'vitest'

import {times} from './times'

describe('times function', () => {
    it('matches lodash for basic cases', () => {
        const testCases = [0, 1, 2, 5, 10, 50]
        testCases.forEach((n) => {
            expect(times(n)).toStrictEqual(_times(n))
            expect(times(n, (i) => i * 2)).toStrictEqual(_times(n, (i) => i * 2))
            expect(times(n, (i) => `str-${i}`)).toStrictEqual(_times(n, (i) => `str-${i}`))
        })
    })

    it('returns empty array for invalid input', () => {
        const invalidCases = [-1, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1, 1.5]
        invalidCases.forEach((n) => {
            expect(times(n)).toStrictEqual([])
        })
    })

    it('handles large but valid values', () => {
        const largeN = 10000
        const arr = times(largeN, (i) => i)
        expect(arr.length).toBe(largeN)
        expect(arr[largeN - 1]).toBe(largeN - 1)
    })

    it('uses identity as default iteratee', () => {
        expect(times(3)).toStrictEqual([0, 1, 2])
        expect(_times(3)).toStrictEqual([0, 1, 2])
    })

    it('handles custom iteratee that returns objects', () => {
        const n = 5
        const arr = times(n, (i) => ({index: i, val: i * 10}))
        expect(arr).toHaveLength(5)
        expect(arr[0]).toEqual({index: 0, val: 0})
        expect(arr[4]).toEqual({index: 4, val: 40})
    })

    it('handles empty arrays correctly', () => {
        expect(times(0)).toStrictEqual([])
        expect(times(-100)).toStrictEqual([])
    })
})
