import _pick from 'lodash/pick'
import {bench, describe} from 'vitest'

import {pick} from './pick'

const testCases = [
    [{a: 1, b: '2', c: 3}, ['a', 'c']],
    [{a: 1, b: '2'}, ['x', 'y']],
    [{a: undefined, b: 2}, ['a', 'b']],
    [{a: 1, b: 2}, ['a', 'b', 'c']],
    [null, ['a']],
    [undefined, ['a']],
] as const

const ITERATIONS = 10000

describe('pick performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([obj, keys]) => {
                pick(obj, keys)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([obj, keys]) => {
                _pick(obj, keys)
            })
        }
    })
})
