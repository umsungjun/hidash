import _mapValues from 'lodash/mapValues'
import {bench, describe} from 'vitest'

import {mapValues} from './mapValues'

const testCases = [
    // 기본 객체 케이스
    [{a: 1, b: 2, c: 3}, (n: number) => n * 2],
    [{x: 'hello', y: 'world'}, (s: string) => s.toUpperCase()],
    [{foo: true, bar: false}, Boolean],

    // 중첩 객체 케이스
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

    // 배열 케이스
    [['a', 'b', 'c'], String],
    [[1, 2, 3], (n: number) => n * n],

    // null/undefined 값 포함 케이스
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [{a: null, b: undefined, c: 1}, (v: any) => v],

    // 큰 객체 케이스
    [
        Object.fromEntries(
            Array(100)
                .fill(0)
                .map((_, i) => [`key${i}`, i]),
        ),
        (n: number) => n + 1,
    ],

    // array-like 객체 케이스
    [{0: 'a', 1: 'b', length: 2}, String],

    // 빈 객체/배열 케이스
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [{}, (v: any) => v],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [[], (v: any) => v],

    // null/undefined 케이스
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [null, (v: any) => v],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [undefined, (v: any) => v],

    // 원시 타입 생성자 케이스
    [{a: '1', b: '2'}, Number],
    [{x: 1, y: 0}, Boolean],

    // 다양한 값 타입 케이스
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

    // 대량의 작은 객체들
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
