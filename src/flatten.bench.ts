import _flatten from 'lodash/flatten'
import {bench, describe} from 'vitest'

import {flatten} from './flatten'

type List<T> = ArrayLike<T>

const testCases: [unknown, unknown][] = [
    // Basic arrays
    [[1, 2, 3] as List<number>, (x: number) => x > 0],
    [[0, 1, 2] as List<number>, Boolean],
    [[-1, 0, 1] as List<number>, (x: number) => x >= -1],
    // Empty collections
    [[] as List<unknown>, Boolean],
    [{}, Boolean],
    // Null & undefined
    [null, Boolean],
    [undefined, Boolean],
    // Objects
    [{a: 1, b: 2}, (x: number) => x > 0],
    [{a: 0, b: 1}, Boolean],
    // Array-like objects
    [{0: 'a', 1: 'b', length: 2} as List<string>, Boolean],
    // Large collections
    [Array(1000).fill(1) as List<number>, (x: number) => x === 1],
    [
        Object.fromEntries(
            Array(1000)
                .fill(0)
                .map((_, i) => [i, 1]),
        ),
        (x: number) => x === 1,
    ],
    // Mixed types
    [[1, true, 'test'] as List<unknown>, Boolean],
    [[undefined, null, false] as List<unknown>, Boolean],
    // Complex predicates
    [[{}, [], ''] as List<unknown>, (x: unknown) => x !== null],
    [Array(100).fill(1), (_: unknown, i: number) => (i || 0) < 100],
] as const

const ITERATIONS = 1000

describe('flatten performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([collection]) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                flatten(collection)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([collection]) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                _flatten(collection)
            })
        }
    })
})
