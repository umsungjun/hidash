import _repeat from 'lodash/repeat'
import {bench, describe} from 'vitest'

import {repeat} from './repeat'

const testCases: [string, number][] = [
    ['abc', 100000],
    ['abc', 1000000],
    ['a'.repeat(100000), 5],
    ['abcd'.repeat(1000), 10000],
    ['test', 0],
    ['', 1000000],
    ['negative', -5],
    ['default', NaN],
]

const ITERATIONS = 1000

describe('repeat performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([str, n]) => {
                repeat(str, n)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([str, n]) => {
                _repeat(str, n)
            })
        }
    })
})
