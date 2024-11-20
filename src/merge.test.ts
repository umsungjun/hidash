import _merge from 'lodash/merge'
import {describe, expect, it} from 'vitest'

import {merge} from './merge'

describe('merge', () => {
    const testCases = [
        // Basic object merging
        [{a: 1}, {b: 2}],
        [{a: 1}, {a: 2}],
        [{a: {x: 1}}, {a: {y: 2}}],

        // Array merging
        [{arr: [1, 2]}, {arr: [3, 4]}],
        [{arr: [{x: 1}]}, {arr: [{y: 2}]}],

        // Multiple sources
        [{a: 1}, {b: 2}, {c: 3}],
        [{a: {x: 1}}, {a: {y: 2}}, {a: {z: 3}}],

        // Null and undefined handling
        [{a: null}, {a: 2}],
        [{a: 1}, {a: undefined}],
        [{a: undefined}, {a: null}],

        // Empty objects
        [{}, {}],
        [{}, {a: 1}],
        [{a: 1}, {}],

        // Nested structures
        [{a: {b: {c: 1}}}, {a: {b: {d: 2}}}],
        [{a: {arr: [1, {x: 1}]}}, {a: {arr: [2, {y: 2}]}}],

        // Array index handling
        [{arr: [1, 2, 3]}, {arr: [4, undefined, 5]}],

        // Complex types
        [{date: new Date(2023, 0, 1)}, {date: new Date(2024, 0, 1)}],
        [{regex: /test/}, {regex: /another/}],

        // Deep array of objects
        [{users: [{id: 1, name: 'John'}]}, {users: [{age: 25}]}],

        // Multiple nested arrays
        [
            {
                matrix: [
                    [1, 2],
                    [3, 4],
                ],
            },
            {
                matrix: [
                    [5, 6],
                    [7, 8],
                ],
            },
        ],

        // Mixed types
        [
            {a: 1, b: 'string', c: true},
            {a: '1', b: 2, c: false},
        ],
    ] as const

    it.each(testCases)('should match lodash behavior for case %#', (object, ...sources) => {
        const expected = _merge({...object}, ...sources.map((s) => ({...s})))
        const result = merge({...object}, ...sources.map((s) => ({...s})))
        expect(result).toEqual(expected)
    })

    // Additional specific test cases
    it('should handle prototype chain like lodash', () => {
        const proto = {inherited: true}
        const obj = Object.create(proto)
        obj.own = false
        const source = {own: true}

        const expected = _merge({...obj}, source)
        const result = merge({...obj}, source)
        expect(result).toEqual(expected)
    })

    it('should handle deep clone of objects', () => {
        interface DeepObj {
            a: {
                b: {
                    c?: number
                    d?: number
                }
            }
        }

        const obj: DeepObj = {a: {b: {c: 1}}}
        const source: DeepObj = {a: {b: {d: 2}}}

        const result = merge({}, obj, source)
        const lodashResult = _merge({}, obj, source)
        obj.a.b.c = 999 // Modify original

        expect(result.a.b.c).toBe(1) // Should not be affected
        expect(lodashResult.a.b.c).toBe(1)
    })

    it('should handle array-like objects', () => {
        const arrayLike = {length: 2, 0: 'a', 1: 'b'}
        const source = {0: 'x', 1: 'y', length: 3}

        const expected = _merge({...arrayLike}, source)
        const result = merge({...arrayLike}, source)
        expect(result).toEqual(expected)
    })

    it('should handle circular references without stack overflow', () => {
        interface CircularObj {
            a: number
            self?: CircularObj
        }

        const obj: CircularObj = {a: 1}
        obj.self = obj
        const source: CircularObj = {a: 2}

        expect(() => merge({...obj}, source)).not.toThrow()
        expect(() => _merge({...obj}, source)).not.toThrow()
    })

    it('should merge arrays by index', () => {
        interface ArrayObj {
            arr: (number | {x?: number; y?: number})[]
        }

        const obj: ArrayObj = {arr: [1, {x: 1}, 3]}
        const source: ArrayObj = {arr: [4, {y: 2}, 6]}

        const result = merge(obj, source)
        const lodashResult = _merge(obj, source)
        expect(result.arr[1]).toEqual({x: 1, y: 2})
        expect(lodashResult.arr[1]).toEqual({x: 1, y: 2})
    })

    it('should handle undefined source values', () => {
        interface TestObj {
            a?: number
            b?: number
        }

        const obj: TestObj = {a: 1, b: 2}
        const source: TestObj = {a: undefined, b: 3}

        const expected = _merge({...obj}, source)
        const result = merge({...obj}, source)
        expect(result).toEqual(expected)
    })

    it('should handle large nested structures', () => {
        interface RecursiveObj {
            nested?: RecursiveObj
            value?: number
        }

        const createNestedObject = (depth: number): RecursiveObj => {
            if (depth === 0) {
                return {value: depth}
            }
            return {nested: createNestedObject(depth - 1)}
        }

        const obj = createNestedObject(50)
        const source = createNestedObject(50)

        expect(() => merge(obj, source)).not.toThrow()
        expect(() => _merge(obj, source)).not.toThrow()
    })
})
