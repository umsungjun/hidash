import _groupBy from 'lodash/groupBy'
import {bench, describe} from 'vitest'

import {groupBy} from './groupBy'

const basicTestCases = [
    {
        data: [
            {id: 1, category: 'A', value: 10},
            {id: 2, category: 'B', value: 20},
            {id: 3, category: 'A', value: 30},
            {id: 4, category: 'C', value: 40},
            {id: 5, category: 'B', value: 50},
        ],
        iteratee: 'category',
    },
    {
        data: Array.from({length: 100}, (_, i) => i),
        iteratee: (num: number) => (num % 2 === 0 ? 'even' : 'odd'),
    },
    {
        data: [null, undefined, {id: 1, value: 'a'}, {id: 2, value: 'b'}, null, {id: 3, value: 'a'}],
        iteratee: 'value',
    },
] as const

const complexTestCases = [
    {
        data: [
            {user: {age: 25}, score: 90},
            {user: {age: 30}, score: 85},
            {user: {age: 25}, score: 95},
            {user: {age: 35}, score: 88},
            {user: {age: 30}, score: 92},
        ],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        iteratee: (item: any) => item.user.age,
    },
    {
        data: [1, '2', true, false, null, undefined, {id: 1}, [1, 2, 3]],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        iteratee: (x: any) => typeof x,
    },
    {
        data: Array.from({length: 1000}, (_, i) => ({
            id: i,
            category: String.fromCharCode(65 + (i % 26)), // A-Z 반복
            value: i * 10,
        })),
        iteratee: 'category',
    },
] as const

const largeArray = Array.from({length: 10000}, (_, i) => ({
    id: i,
    category: String.fromCharCode(65 + (i % 26)),
    value: i * 10,
    tags: [i % 5, i % 3],
    nested: {level: i % 4},
}))

describe('groupBy performance comparison', () => {
    bench('hidash', () => {
        // Basic test cases
        basicTestCases.forEach(({data, iteratee}) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            groupBy(data, iteratee)
        })

        // Complex test cases
        complexTestCases.forEach(({data, iteratee}) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            groupBy(data, iteratee)
        })

        // Large array tests
        groupBy(largeArray, 'category')
        groupBy(largeArray, (item) => item.tags[0])
        groupBy(largeArray, (item) => item.nested.level)
    })

    bench('lodash', () => {
        // Basic test cases
        basicTestCases.forEach(({data, iteratee}) => {
            _groupBy(data, iteratee)
        })

        // Complex test cases
        complexTestCases.forEach(({data, iteratee}) => {
            _groupBy(data, iteratee)
        })

        // Large array tests
        _groupBy(largeArray, 'category')
        _groupBy(largeArray, (item) => item.tags[0])
        _groupBy(largeArray, (item) => item.nested.level)
    })
})
