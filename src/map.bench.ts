/* eslint-disable @typescript-eslint/no-explicit-any */
import _map from 'lodash/map'
import {bench, describe} from 'vitest'

import map from './map'

const testCases: [ArrayLike<any> | null | undefined, any][] = [
    [[1, 2, 3, 4], (x: any) => x * 2],
    [['a', 'b', 'c'], (x: any) => x.toUpperCase()],
    [[true, false, null, undefined], (x: any) => !!x],
    [[{a: 1}, {b: 2}], (x: any) => JSON.stringify(x)],
    [Array.from({length: 100}, (_, i) => i), (x: any) => x + 1],
    [Array.from('benchmark'), (x: any) => `${x}_test`],
    [null, (x: any) => x],
    [undefined, (x: any) => x],
    [[], (x: any) => x],
]

const ITERATIONS = 1000

describe('map performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([input, iteratee]) => {
                map(input, iteratee)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([input, iteratee]) => {
                _map(input, iteratee)
            })
        }
    })
})
