import _transform from 'lodash/transform'
import {bench, describe} from 'vitest'

import transform from './transform'

const testCases = [
    {
        input: {a: 1, b: 2, c: 1},
        iteratee: (acc: Record<number, string[]>, value: number, key: string) => {
            if (!acc[value]) {
                acc[value] = []
            }
            acc[value].push(key)
        },
        accumulator: {} as Record<number, string[]>,
    },
    {
        input: [10, 20, 30, 40, 50],
        iteratee: (acc: number[], value: number) => {
            if (value % 2 === 0) {
                acc.push(value * 2)
            }
        },
        accumulator: [] as number[],
    },
    {
        input: {x: {y: 1}, z: {y: 2}},
        iteratee: (acc: Record<number, string[]>, value: {y: number}, key: string) => {
            if (!acc[value.y]) {
                acc[value.y] = []
            }
            acc[value.y].push(key)
        },
        accumulator: {} as Record<number, string[]>,
    },
    {
        input: undefined as unknown as number[],
        iteratee: (acc: number[], value: number) => {
            acc.push(value)
        },
        accumulator: [] as number[],
    },
    {
        input: null as unknown as Record<string, number>,
        iteratee: (acc: number[], value: number) => {
            acc.push(value)
        },
        accumulator: [] as number[],
    },
    {
        input: [] as number[],
        iteratee: (acc: number[], value: number) => {
            acc.push(value + 1)
        },
        accumulator: [] as number[],
    },
    {
        input: {},
        iteratee: (acc: Record<string, string>, value: unknown, key: string) => {
            acc[key] = String(value)
        },
        accumulator: {} as Record<string, string>,
    },
] as const

const ITERATIONS = 10000

describe('transform performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({input, iteratee, accumulator}) => {
                transform(input, iteratee, accumulator)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({input, iteratee, accumulator}) => {
                _transform(input, iteratee, accumulator)
            })
        }
    })
})
