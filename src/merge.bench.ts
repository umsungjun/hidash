import _merge from 'lodash/merge'
import {bench, describe} from 'vitest'

import {merge} from './merge'

// simplifies test cases and creates new objects for each test
function getTestCases() {
    return [
        // merge default objects
        [
            {a: 1, b: 2},
            {c: 3, d: 4},
        ],

        // nested objects
        [{a: {b: {c: 1}}}, {a: {b: {d: 2}}}],

        // merge arrays
        [{arr: [1, 2, {x: 1}]}, {arr: [3, 4, {y: 2}]}],

        // multi-source (simplification)
        [{a: 1}, {b: 2}, {c: 3}],

        // special objects
        [{date: new Date(2023, 0, 1)}, {date: new Date(2024, 0, 1)}],

        // medium-sized objects
        [
            Object.fromEntries(
                Array(10)
                    .fill(0)
                    .map((_, i) => [`key${i}`, i]),
            ),
            Object.fromEntries(
                Array(10)
                    .fill(0)
                    .map((_, i) => [`key${i}`, i + 10]),
            ),
        ],

        // shallow superposition structure
        [
            {a: {b: 1}, c: {d: 2}},
            {a: {e: 3}, c: {f: 4}},
        ],

        // a small arrangement
        [{arr: [1, 2, 3]}, {arr: [4, 5, 6]}],

        // undefined handling
        [
            {a: 1, b: 2},
            {a: undefined, c: 3},
        ],

        // basic type mix
        [
            {num: 1, str: 'test'},
            {num: 2, bool: true},
        ],
    ]
}

const ITERATIONS = 100

describe('merge performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            getTestCases().forEach((testCase) => {
                const [first, ...rest] = testCase
                merge(structuredClone(first), ...rest.map((item) => structuredClone(item)))
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            getTestCases().forEach((testCase) => {
                const [first, ...rest] = testCase
                _merge(structuredClone(first), ...rest.map((item) => structuredClone(item)))
            })
        }
    })
})
