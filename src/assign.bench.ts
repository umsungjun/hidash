import _assign from 'lodash/assign'
import {bench, describe} from 'vitest'

import {assign} from './assign'

const largeArray = Array.from({length: 100}, (_, i) => ({[`key${i}`]: i}))
const emptyObjects = Array.from({length: 100}, () => ({}))
const filledObjects = Array.from({length: 100}, (_, i) => ({[`key${i}`]: i}))

const mixedObjects = [...emptyObjects, ...filledObjects].sort(() => Math.random() - 0.5)

const testCases = [
    largeArray,
    Object.entries(Object.fromEntries(largeArray.map((item, index) => [`key${index}`, index]))), // convert to Object.entries
    emptyObjects,
    [...largeArray, ...emptyObjects],
    mixedObjects,
]

const ITERATIONS = 1000

describe('assign performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            for (const testCase of testCases) {
                assign({}, ...testCase)
            }
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            for (const testCase of testCases) {
                _assign({}, ...testCase)
            }
        }
    })
})
