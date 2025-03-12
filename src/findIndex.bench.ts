import _findIndex from 'lodash/findIndex'
import {describe, bench} from 'vitest'

import {findIndex} from './findIndex'

const testCases = [
    [[0, 1, 0, 1, 0], (v: number) => v === 1],
    [new Array(10000).fill(0).map((_, i) => (i % 1000 === 0 ? 1 : 0)), (v: number) => v === 1],
    [
        [
            {name: {first: 'a', last: 'b'}},
            {name: {first: 'c', last: 'd'}},
            {name: {first: 'e', last: 'f'}},
            {name: {first: 'a', last: 'b'}},
        ],
        {name: {first: 'a'}},
    ],
    [
        [
            {id: 1, value: 'a'},
            {id: 2, value: 'b'},
            {id: 3, value: 'c'},
            {id: 4, value: 'd'},
        ],
        (item: {id: number; value: string}) => item.value,
    ],
    [
        [
            {id: 1, value: 'a'},
            {id: 2, value: 'b'},
            {id: 3, value: 'c'},
            {id: 4, value: 'd'},
        ],
        ['value', 'b'],
    ],
    // eslint-disable-next-line no-sparse-arrays
    [[0, , 1, , , 3], (v: number) => v === 1],
    ['hello world'.split(''), (v: string) => v === 'o'],
]

const ITERATIONS = 1000

describe('findIndex performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([[array, predicate]]) => {
                findIndex(array, predicate)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([[array, predicate]]) => {
                _findIndex(array, predicate)
            })
        }
    })
})
