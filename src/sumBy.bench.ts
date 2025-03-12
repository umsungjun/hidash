import _sumBy from 'lodash/sumBy'
import {bench, describe} from 'vitest'

import {sumBy} from './sumBy'

interface TestObject {
    value: number
    price: number
    weight: number
    nested?: {
        value: number
    }
}

const testCases = [
    // Empty array
    [[] as TestObject[], (item: {value: number}) => item.value],
    // Simple array with objects
    [
        [
            {value: 1, price: 10, weight: 100},
            {value: 2, price: 20, weight: 200},
            {value: 3, price: 30, weight: 300},
        ],
        (item: {value: number; price: number; weight: number}) => item.value,
    ],
    // Array with iteratee function
    [
        [
            {value: 1, price: 10, weight: 100},
            {value: 2, price: 20, weight: 200},
            {value: 3, price: 30, weight: 300},
        ],
        (obj: TestObject) => obj.price * obj.weight,
    ],
    // Nested properties
    [
        [
            {nested: {value: 1}, price: 10, weight: 100},
            {nested: {value: 2}, price: 20, weight: 200},
            {nested: {value: 3}, price: 30, weight: 300},
        ],
        (item: {nested: {value: number}; price: number; weight: number}) => item.nested.value,
    ],
    // Large array
    [
        Array(1000)
            .fill(0)
            .map((_, i) => ({
                value: i,
                price: i * 10,
                weight: i * 100,
            })),
        (item: {value: number; price: number; weight: number}) => item.value,
    ],
    // Array with negative values
    [
        [
            {value: -1, price: 10, weight: 100},
            {value: -2, price: 20, weight: 200},
            {value: -3, price: 30, weight: 300},
        ],
        (item: {value: number; price: number; weight: number}) => item.value,
    ],
    // Array with decimal values
    [
        [
            {value: 0.1, price: 10.5, weight: 100.1},
            {value: 0.2, price: 20.5, weight: 200.2},
            {value: 0.3, price: 30.5, weight: 300.3},
        ],
        (item: {value: number; price: number; weight: number}) => item.value,
    ],
    // Complex calculation with iteratee function
    [
        [
            {value: 1, price: 10, weight: 100},
            {value: 2, price: 20, weight: 200},
            {value: 3, price: 30, weight: 300},
        ],
        (obj: TestObject) => Math.pow(obj.value, 2) + obj.price / obj.weight,
    ],
    // Single element array
    [[{value: 42, price: 420, weight: 4200}], 'value'],
    // Array with same values
    [
        [
            {value: 1, price: 10, weight: 100},
            {value: 1, price: 10, weight: 100},
            {value: 1, price: 10, weight: 100},
        ],
        (item: {value: number; price: number; weight: number}) => item.value,
    ],
    // Array with zero values
    [
        [
            {value: 0, price: 0, weight: 0},
            {value: 0, price: 0, weight: 0},
            {value: 0, price: 0, weight: 0},
        ],
        (item: {value: number; price: number; weight: number}) => item.value,
    ],
    // Large numbers
    [
        [
            {value: Number.MAX_SAFE_INTEGER, price: 10, weight: 100},
            {value: Number.MAX_SAFE_INTEGER - 1, price: 20, weight: 200},
        ],
        (item: {value: number; price: number; weight: number}) => item.value,
    ],
    // Small numbers
    [
        [
            {value: Number.MIN_SAFE_INTEGER, price: 10, weight: 100},
            {value: Number.MIN_SAFE_INTEGER + 1, price: 20, weight: 200},
        ],
        (item: {value: number; price: number; weight: number}) => item.value,
    ],
] as const

const ITERATIONS = 1000

describe('sumBy performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([arr, iteratee]) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                sumBy(arr, iteratee)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([arr, iteratee]) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                _sumBy(arr, iteratee)
            })
        }
    })
})
