import _cloneDeep from 'lodash/cloneDeep'
import {describe, it, expect} from 'vitest'

import {cloneDeep} from './cloneDeep'

describe('cloneDeep function comparison with lodash', () => {
    it('handles primitive values', () => {
        const testCases = [1, 'string', true, null, undefined, Symbol('symbol')]
        testCases.forEach((value) => {
            expect(cloneDeep(value)).toStrictEqual(_cloneDeep(value))
        })
    })

    it('handles arrays', () => {
        const testCases = [
            [],
            [1, 2, 3],
            [
                [1, 2],
                [3, 4],
            ],
            [null, undefined, 'string', true, {a: 1}],
        ]
        testCases.forEach((value) => {
            expect(cloneDeep(value)).toStrictEqual(_cloneDeep(value))
            expect(cloneDeep(value) === value).toBe(false) // Ensure deep clone
        })
    })

    it('handles objects', () => {
        const testCases = [{}, {a: 1}, {a: {b: 2}, c: [1, 2, 3]}, {d: null, e: undefined, f: new Set([1, 2])}]
        testCases.forEach((value) => {
            expect(cloneDeep(value)).toStrictEqual(_cloneDeep(value))
            expect(cloneDeep(value) === value).toBe(false) // Ensure deep clone
        })
    })

    it('handles Maps and Sets', () => {
        const testCases = [
            new Map([['key', 'value']]),
            new Map([
                ['key1', {a: 1}],
                ['key2', [1, 2]],
            ]),
            new Set([1, 2, 3]),
            new Set([{a: 1}, [1, 2]]),
        ]
        testCases.forEach((value) => {
            expect(cloneDeep(value)).toStrictEqual(_cloneDeep(value))
            expect(cloneDeep(value) === value).toBe(false) // Ensure deep clone
        })
    })

    it('handles nested structures', () => {
        const testCases = [
            {a: [1, 2, {b: new Map([['key', 'value']])}]},
            new Set([new Map([['key', [1, 2]]]), {c: {d: 4}}]),
        ]
        testCases.forEach((value) => {
            expect(cloneDeep(value)).toStrictEqual(_cloneDeep(value))
            expect(cloneDeep(value) === value).toBe(false) // Ensure deep clone
        })
    })

    it('handles unsupported types', () => {
        const testCases = [() => {}, new WeakMap(), new WeakSet()]
        testCases.forEach((value) => {
            expect(cloneDeep(value)).toStrictEqual(_cloneDeep(value))
        })
    })
})
