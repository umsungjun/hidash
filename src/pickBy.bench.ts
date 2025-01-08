import _pickBy from 'lodash/pickBy'
import {bench, describe} from 'vitest'

import pickBy from './pickBy'

const testCases = [
    // Simple large objects (키와 값이 숫자)
    [
        Object.fromEntries(
            Array(1000)
                .fill(0)
                .map((_, i) => [`key${i}`, i]),
        ),
        (v) => v > 500, // 500보다 큰 값만 남기는 테스트
    ],
    // Sparse large objects (일부 값이 undefined)
    [
        Object.fromEntries(
            Array(1000)
                .fill(undefined)
                .map((_, i) => [`key${i}`, i % 2 === 0 ? i : undefined]),
        ),
        (v) => v !== undefined, // undefined가 아닌 값만 남기는 테스트
    ],
    // Boolean 값만 필터링
    [
        Object.fromEntries(
            Array(1000)
                .fill(0)
                .map((_, i) => [`key${i}`, i % 2 === 0]),
        ),
        (v) => typeof v === 'boolean' && v === true, // true인 값만 남기는 테스트
    ],
    // 중첩된 객체
    [
        {
            a: {b: {c: Array(1000).fill({nested: true})}},
            d: {e: {f: Array(1000).fill({nested: false})}},
        },
        (v) => v.nested === true, // nested가 true인 값만 남기는 테스트
    ],
    // 숫자값만 필터링
    [
        {a: 1, b: 2, c: 3, d: 4},
        (v) => typeof v === 'number' && v % 2 === 0, // 짝수인 값만 남기기
    ],
    // 빈 객체 처리
    [
        {},
        (v) => !!v, // truthy한 값만 남기기, 빈 객체에 대해서도 처리
    ],
    // 특정 값만 필터링
    [
        {a: null, b: 0, c: false, d: true},
        (v) => v === true, // true인 값만 남기기
    ],
] as const

const ITERATIONS = 1000

describe('pickBy performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([collection, predicate]) => {
                pickBy(collection, predicate)
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            testCases.forEach(([collection, predicate]) => {
                _pickBy(collection, predicate)
            })
        }
    })
})
