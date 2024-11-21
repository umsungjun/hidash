import _toNumber from 'lodash/toNumber'
import {bench, describe} from 'vitest'

import toNumber from './toNumber'

// 테스트 케이스: 다양한 데이터 유형을 포함
const testCases = [
    null,
    undefined,
    '',
    '123',
    '  456  ',
    '0x1f',
    '0b101',
    '0o17',
    'hello',
    [],
    [42],
    [1, 2],
    {valueOf: () => 42},
    true,
    false,
    0,
    1,
    NaN,
    Infinity,
    new Date(),
    new Map(),
    new Set(),
]

const ITERATIONS = 10000

describe('toNumber performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                toNumber(testCase)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach((testCase) => {
                _toNumber(testCase)
            })
        }
    })
})
