import _range from 'lodash/range'
import {bench, describe} from 'vitest'

import range from './range'

const ITERATIONS = 100
const step = 3

const testCases: [number, number | undefined, number | undefined][] = Array.from({length: 1000}, (_, i) => {
    return [0, i, step]
})

describe('range performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([a, b, c]) => {
                range(a, b, c)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([a, b, c]) => {
                _range(a, b, c)
            })
        }
    })
})
