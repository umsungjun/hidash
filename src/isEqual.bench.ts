/* eslint-disable no-new-wrappers */
import _isEqual from 'lodash/isEqual'
import {bench, describe} from 'vitest'

import {isEqual} from './isEqual'

const testCases = [
    [[{a: {name: 'jane'}}], [{a: {name: 'jane'}}]],
    [NaN, NaN],
    [new String('1'), new String('1')],
    [{a: [1, 2, {b: 3}]}, {a: [1, 2, {b: 3}]}],
    [
        [1, 2, {x: 4, y: [5, 6]}],
        [1, 2, {x: 4, y: [5, 6]}],
    ],
    [{a: 1}, {a: 1}],
    [
        [1, 2, 3],
        [1, 2, 3],
    ],
    [{a: {b: {c: 3}}}, {a: {b: {c: 3}}}],

    [
        [{a: 1}, [{b: 2}]],
        [{a: 1}, [{b: 2}]],
    ],
    [{a: {b: {c: {d: {e: {f: {g: 7}}}}}}}, {a: {b: {c: {d: {e: {f: {g: 7}}}}}}}],
    [{a: [1, {b: [2, {c: [3, {d: [4, {e: 5}]}]}]}]}, {a: [1, {b: [2, {c: [3, {d: [4, {e: 5}]}]}]}]}],
    [
        Array.from({length: 1000}, (_, i) => ({value: i, nested: {value: i * 2}})),
        Array.from({length: 1000}, (_, i) => ({value: i, nested: {value: i * 2}})),
    ],
]

const ITERATIONS = 1000

describe('isEqual performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([value, other]) => {
                isEqual(value, other)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([value, other]) => {
                _isEqual(value, other)
            })
        }
    })
})
