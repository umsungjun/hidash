import _toString from 'lodash/toString'
import {bench, describe} from 'vitest'

import toString from './toString'

const testCases = [
    // 기본 타입
    {value: 123}, // 숫자
    {value: -0}, // 특수 숫자
    {value: ''}, // 빈 문자열
    {value: 'hello'}, // 문자열
    {value: true}, // 불리언
    {value: Symbol('test')}, // 심볼

    // null, undefined
    {value: null},
    {value: undefined},

    // 배열
    {value: []}, // 빈 배열
    {value: [1, 2, 3]}, // 숫자 배열
    {value: ['a', 'b', 'c']}, // 문자열 배열
    {value: [1, null, 'mixed', undefined]}, // 혼합 배열

    // 객체
    {value: {}}, // 빈 객체
    {value: {toString: () => 'custom'}}, // 커스텀 toString

    // 특수 값
    {value: NaN},
    {value: Infinity},
    {value: -Infinity},

    // 중첩 구조
    {
        value: [
            [1, 2],
            [3, 4],
        ],
    }, // 중첩 배열
    {value: {a: {b: {c: 1}}}}, // 중첩 객체
    {value: [1, {a: 2}, [3, {b: 4}]]}, // 혼합 중첩
] as const

const ITERATIONS = 10000

describe('toString performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({value}) => {
                toString(value)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(({value}) => {
                _toString(value)
            })
        }
    })
})
