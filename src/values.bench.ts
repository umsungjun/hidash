import _values from 'lodash/values'
import {bench, describe} from 'vitest'

import {values} from './values'

const testCases = [
    'hello world',
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    {a: 'juj', b: 'jhb'},
    {a: {name: 'juj'}, b: {addr: 'Seoul'}},
    1,
    true,
    new (class {
        constructor() {
            this.a = 'a'
            this.b = 'b'
        }
    })(),
    Symbol(1),
    new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    new Map([
        ['a', 'juj'],
        ['b', 'jhb'],
    ]),
    'a'.repeat(1000),
    Array.from({length: 1000}, (_, i) => i),
]

const ITERATIONS = 1000

describe('values performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            for (const testCase of testCases) {
                values(testCase)
            }
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            for (const testCase of testCases) {
                _values(testCase)
            }
        }
    })
})
