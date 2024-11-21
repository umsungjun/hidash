import _cloneDeep from 'lodash/cloneDeep'
import {bench, describe} from 'vitest'

import {cloneDeep} from './cloneDeep'

const testCases: unknown[] = [
    // Primitive values
    1,
    'string',
    true,
    null,
    undefined,
    Symbol('symbol'),
    // Arrays
    [],
    [1, 2, 3],
    [
        [1, 2],
        [3, 4],
    ],
    [null, undefined, 'string', true, {a: 1}],
    // Objects
    {},
    {a: 1},
    {a: {b: 2}, c: [1, 2, 3]},
    {d: null, e: undefined, f: new Set([1, 2])},
    // Maps and Sets
    new Map([['key', 'value']]),
    new Map([
        ['key1', {a: 1}],
        ['key2', [1, 2]],
    ]),
    new Set([1, 2, 3]),
    new Set([{a: 1}, [1, 2]]),
    // Array-like objects
    {0: 'a', 1: 'b', length: 2},
    // Large collections
    Array(1000).fill({a: 1}),
    Object.fromEntries(
        Array(1000)
            .fill(0)
            .map((_, i) => [i, {a: i}]),
    ),
    // Mixed types
    [[1, true, 'test'], {a: [1, 2, 3], b: new Map([[1, 2]])}],
    [[undefined, null, false], {key: new Set([null])}],
    // Complex objects
    {nested: {a: {b: {c: {d: 1}}}}},
    // Deeply nested objects
    (() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const deepObject: Record<string, any> = {}
        let current = deepObject
        for (let i = 0; i < 100; i++) {
            current.nested = {value: i}
            current = current.nested
        }
        return deepObject
    })(),
    // Circular references
    (() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const obj: any = {a: 1}
        obj.self = obj
        return obj
    })(),
    // Object with different data types
    {
        numbers: [1, 2, 3],
        strings: ['a', 'b', 'c'],
        mixed: [1, 'a', true, null],
        nested: {
            arr: [{key: 'value'}, [1, 2, 3]],
            map: new Map<string, unknown>([
                ['key1', 'value1'],
                ['key2', {nestedKey: 'nestedValue'}],
            ]),
            set: new Set([1, 2, 3]),
        },
        func: () => {},
        symbol: Symbol('test'),
    },
    // Large deeply nested structure
    (() => {
        const nestedArray = []
        for (let i = 0; i < 100; i++) {
            nestedArray.push({index: i, data: Array(10).fill({key: 'value'})})
        }
        return nestedArray
    })(),
]

const ITERATIONS = 1000

describe('cloneDeep performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                cloneDeep(testCase)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                _cloneDeep(testCase)
            })
        }
    })
})
