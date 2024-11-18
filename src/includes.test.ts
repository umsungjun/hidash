import _includes from 'lodash/includes'
import {describe, expect, it} from 'vitest'

import {includes} from './includes'

import type {Dictionary, NumericDictionary} from './includes'

describe('includes', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const testCases: [Dictionary<any> | NumericDictionary<any> | null | undefined, any, number?][] = [
        // Basic object values
        [{a: 1, b: 2, c: 3}, 1],
        [{a: 'test', b: 'value'}, 'test'],

        // Null and undefined
        [null, 1],
        [undefined, 'test'],

        // Array-like objects
        [{0: 'a', 1: 'b'}, 'a'],
        [{0: 1, 1: 2, 2: 3}, 2],

        // With fromIndex
        [{0: 'a', 1: 'b', 2: 'a'}, 'a', 1],
        [{0: 1, 1: 2, 2: 1}, 1, -2],

        // Edge cases
        [{}, 'any'],
        [{a: undefined}, undefined],
        [{a: null}, null],

        // Different types
        [{a: 1, b: '2', c: true}, true],
        [{a: [], b: {}}, []],

        // Large objects
        [
            Object.fromEntries(
                Array(100)
                    .fill(0)
                    .map((_, i) => [i, i]),
            ),
            99,
        ],
    ]

    it.each(testCases)('should match lodash behavior for case %#', (collection, value, fromIndex) => {
        expect(includes(collection, value, fromIndex)).toBe(_includes(collection, value, fromIndex))
    })

    // Additional edge cases
    it('should handle empty objects like lodash', () => {
        const obj = {}
        expect(includes(obj, 'test')).toBe(_includes(obj, 'test'))
    })

    it('should handle prototype chain like lodash', () => {
        const proto = {inherited: true}
        const obj = Object.create(proto) as Dictionary<boolean>
        obj.own = false
        expect(includes(obj, true)).toBe(_includes(obj, true))
    })

    it('should handle numeric dictionary like lodash', () => {
        const numDict: NumericDictionary<string> = {0: 'a', 2: 'c'}
        expect(includes(numDict, undefined, 1)).toBe(_includes(numDict, undefined, 1))
    })
})
