import _uniqBy from 'lodash/uniqBy'
import {bench, describe} from 'vitest'

import {uniqBy} from './uniqBy'

interface TestCase {
    array: unknown[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    iteratee: (value: any) => unknown
}

const testCases: TestCase[] = [
    {
        array: [2.1, 1.2, 2.3, 1.4, 2.5],
        iteratee: Math.floor,
    },
    {
        array: [-2.1, -1.2, -2.3, -1.4],
        iteratee: Math.abs,
    },
    {
        array: [
            {id: 1, name: 'a'},
            {id: 2, name: 'a'},
            {id: 3, name: 'b'},
        ],
        iteratee: (obj: {name: string}) => obj.name,
    },
    {
        array: [{user: {id: 1, name: 'John'}}, {user: {id: 2, name: 'Jane'}}, {user: {id: 1, name: 'Johnny'}}],
        iteratee: (obj: {user: {id: number}}) => obj.user.id,
    },
    {
        array: [{data: [1, 2]}, {data: [2, 3]}, {data: [1, 2]}],
        iteratee: (obj: {data: number[]}) => JSON.stringify(obj.data),
    },
    {
        array: [null, undefined, null],
        iteratee: (x: unknown) => x,
    },
    {
        array: [NaN, NaN, NaN],
        iteratee: (x: unknown) => x,
    },
    {
        array: Array.from({length: 1000}, (_, i) => ({value: i % 100})),
        iteratee: (obj: {value: number}) => obj.value,
    },
]

const ITERATIONS = 1000

describe('uniqBy performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                uniqBy(testCase.array, testCase.iteratee)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                _uniqBy(testCase.array, testCase.iteratee)
            })
        }
    })
})
