import _mapValues from 'lodash/mapValues'
import {bench, describe} from 'vitest'

import {mapValues} from './mapValues'

const testCases = [
    // default object case
    [{a: 1, b: 2, c: 3}, (n: number) => n * 2],
    [{x: 'hello', y: 'world'}, (s: string) => s.toUpperCase()],
    [{foo: true, bar: false}, Boolean],

    // nested object case
    [
        {
            user1: {name: 'John', age: 25},
            user2: {name: 'Jane', age: 30},
        },
        (v: {name: string; age: number}) => v.age,
    ],
    [
        {
            a: {b: {c: 1}},
            x: {b: {c: 2}},
        },
        (v: {b: {c: number}}) => v.b.c,
    ],

    // array case
    [['a', 'b', 'c'], String],
    [[1, 2, 3], (n: number) => n * n],

    // case with null or undefined value
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [{a: null, b: undefined, c: 1}, (v: any) => v],

    // large object case
    [
        Object.fromEntries(
            Array(100)
                .fill(0)
                .map((_, i) => [`key${i}`, i]),
        ),
        (n: number) => n + 1,
    ],

    // array-like object case
    [{0: 'a', 1: 'b', length: 2}, String],

    // empty array or object case
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [{}, (v: any) => v],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [[], (v: any) => v],

    // null or undefined case
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [null, (v: any) => v],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [undefined, (v: any) => v],

    // primitive type constructor case
    [{a: '1', b: '2'}, Number],
    [{x: 1, y: 0}, Boolean],

    // various type cases
    [
        {
            string: 'hello',
            number: 123,
            boolean: true,
            null: null,
            undefined,
            array: [1, 2, 3],
            object: {a: 1},
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (v: any) => v,
    ],

    // a large number of small objects
    ...Array(50)
        .fill(0)
        .map((_, i) => [
            {value: i, double: i * 2, square: i * i},
            (v: {value: number; double: number; square: number}) => v.value,
        ]),
] as const

const ITERATIONS = 100

describe('mapValues performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([obj, iteratee]) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                mapValues(obj as any, iteratee as any)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([obj, iteratee]) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                _mapValues(obj as any, iteratee as any)
            })
        }
    })
})
