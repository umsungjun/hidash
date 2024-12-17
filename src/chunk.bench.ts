import {describe} from 'node:test'

import _chunk from 'lodash/chunk'
import {bench} from 'vitest'

import {chunk} from './chunk'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const testCases: [any, number][] = [
    [['a', 'b', 'c', 'd'], 2],
    [['a', 'b', 'c', 'd'], 3],
    [[1, 2, 3, 4, 5], 2],
    [[1, 2, 3, 4], 1],
    [[42], 3],
    [[1, 2, 3, 4, 5], 2.5],
    [[], 2],
    [null, 2],
    [undefined, 2],
    [[1, 2, 3, 4, 5], 0],
    [[1, 2, 3], -1],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3],
    [['x', 'y', 'z'], 1],
    [[true, false, null, undefined], 2],
    [
        [
            [1, 2],
            [3, 4],
            [5, 6],
        ],
        2,
    ],
    [[{a: 1}, {b: 2}, {c: 3}], 2],
    [['string'], 10],
    [Array.from({length: 100}, (_, i) => i), 10],
    [Array.from('hello'), 2],
    [[[null], [undefined], [true]], 1],
    [
        [
            [1, 'a'],
            [2, 'b'],
            [3, 'c'],
        ],
        2,
    ],
]

const ITERATIONS = 1000

describe('chunk performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([input, size]) => {
                chunk(input, size)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([input, size]) => {
                _chunk(input, size)
            })
        }
    })
})
