import _difference from 'lodash/difference'
import {bench, describe} from 'vitest'

import {difference} from './difference'

const testCases = [
    {array: [1, 2, 3], values: [[2]]},
    {array: [2, 1], values: [[2, 3]]},
    {array: [1, 'a', true, null], values: [[true]]},
    {array: [undefined, null, 3, 'b'], values: [[3]]},
    {array: [10, 20, 30, 40], values: [[20], [10, 50]]},
    {array: [1, 2, 2, 3], values: [[2]]},
    {array: [], values: [[]]},
    {array: [1, 2, 3], values: [[]]},
    {
        array: Array.from({length: 1000}, (_, i) => i),
        values: [Array.from({length: 500}, (_, i) => i * 2)],
    },

    {
        array: Array.from({length: 1000}, (_, i) => (i % 2 === 0 ? i : `${i}`)),
        values: [Array.from({length: 100}, (_, i) => i), Array.from({length: 100}, (_, i) => `${i + 2000}`)],
    },
]

const ITERATIONS = 100

describe('difference performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({array, values}) => {
                difference(array, ...values)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({array, values}) => {
                _difference(array, ...values)
            })
        }
    })
})
