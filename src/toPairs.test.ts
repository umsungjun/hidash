import _toPairs from 'lodash/toPairs'
import {describe, test, expect} from 'vitest'

import {noop} from './internal/noop'
import {toPairs} from './toPairs'

describe('toPairs', () => {
    test('should return key-value pairs for a plain object', () => {
        const input = {a: 1, b: 2, c: 3}
        const expected = [
            ['a', 1],
            ['b', 2],
            ['c', 3],
        ]
        expect(toPairs(input)).toEqual(expected)
        expect(toPairs(input)).toEqual(_toPairs(input))
    })

    test('should return index-value pairs for an array', () => {
        const input = [10, 20, 30]
        const expected = [
            ['0', 10],
            ['1', 20],
            ['2', 30],
        ]
        expect(toPairs(input)).toEqual(expected)
        expect(toPairs(input)).toEqual(_toPairs(input))
    })

    test('should return index-character pairs for a string', () => {
        const input = 'hello'
        const expected = [
            ['0', 'h'],
            ['1', 'e'],
            ['2', 'l'],
            ['3', 'l'],
            ['4', 'o'],
        ]
        expect(toPairs(input)).toEqual(expected)
        expect(toPairs(input)).toEqual(_toPairs(input))
    })

    test('should return key-value pairs for a Map', () => {
        const input = new Map([
            ['key1', 'value1'],
            ['key2', 'value2'],
        ])
        const expected = [
            ['key1', 'value1'],
            ['key2', 'value2'],
        ]
        expect(toPairs(input)).toEqual(expected)
        expect(toPairs(input)).toEqual(_toPairs(input))
    })

    test('should return value-value pairs for a Set', () => {
        const input = new Set([1, 2, 3])
        const expected = [
            [1, 1],
            [2, 2],
            [3, 3],
        ]
        expect(toPairs(input)).toEqual(expected)
        expect(toPairs(input)).toEqual(_toPairs(input))
    })

    test('should return an empty array for null or undefined', () => {
        expect(toPairs(null)).toEqual([])
        expect(toPairs(null)).toEqual(_toPairs(null))
        expect(toPairs(undefined)).toEqual([])
        expect(toPairs(undefined)).toEqual(_toPairs(undefined))
    })

    test('should return an empty array for unsupported types', () => {
        expect(toPairs(123)).toEqual([])
        expect(toPairs(true)).toEqual([])
        expect(toPairs(Symbol(1))).toEqual([])
        expect(toPairs(new Error())).toEqual([])
        expect(toPairs(noop)).toEqual([])

        expect(toPairs(123)).toEqual(_toPairs(123))
        expect(toPairs(true)).toEqual(_toPairs(true))
        expect(toPairs(Symbol(1))).toEqual(_toPairs(Symbol(1)))
        expect(toPairs(new Error())).toEqual(_toPairs(new Error()))
        expect(toPairs(noop)).toEqual(_toPairs(noop))
    })

    test('should handle empty inputs gracefully', () => {
        expect(toPairs({})).toEqual([])
        expect(toPairs([])).toEqual([])
        expect(toPairs(new Map())).toEqual([])
        expect(toPairs(new Set())).toEqual([])
        expect(toPairs('')).toEqual([])

        expect(toPairs({})).toEqual(_toPairs({}))
        expect(toPairs([])).toEqual(_toPairs([]))
        expect(toPairs(new Map())).toEqual(_toPairs(new Map()))
        expect(toPairs(new Set())).toEqual(_toPairs(new Set()))
        expect(toPairs('')).toEqual(_toPairs(''))
    })
})
