import _merge from 'lodash/merge'
import {bench, describe} from 'vitest'

import {merge} from './merge'

// 테스트 케이스를 단순화하고 각 테스트마다 새로운 객체를 생성
function getTestCases() {
    return [
        // 기본 객체 병합
        [
            {a: 1, b: 2},
            {c: 3, d: 4},
        ],

        // 중첩 객체
        [{a: {b: {c: 1}}}, {a: {b: {d: 2}}}],

        // 배열 병합
        [{arr: [1, 2, {x: 1}]}, {arr: [3, 4, {y: 2}]}],

        // 다중 소스 (단순화)
        [{a: 1}, {b: 2}, {c: 3}],

        // 특수 객체
        [{date: new Date(2023, 0, 1)}, {date: new Date(2024, 0, 1)}],

        // 중간 크기 객체
        [
            Object.fromEntries(
                Array(10)
                    .fill(0)
                    .map((_, i) => [`key${i}`, i]),
            ),
            Object.fromEntries(
                Array(10)
                    .fill(0)
                    .map((_, i) => [`key${i}`, i + 10]),
            ),
        ],

        // 얕은 중첩 구조
        [
            {a: {b: 1}, c: {d: 2}},
            {a: {e: 3}, c: {f: 4}},
        ],

        // 작은 배열
        [{arr: [1, 2, 3]}, {arr: [4, 5, 6]}],

        // undefined 값 처리
        [
            {a: 1, b: 2},
            {a: undefined, c: 3},
        ],

        // 기본 타입 혼합
        [
            {num: 1, str: 'test'},
            {num: 2, bool: true},
        ],
    ]
}

const ITERATIONS = 100

describe('merge performance', () => {
    bench('hidash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            getTestCases().forEach((testCase) => {
                const [first, ...rest] = testCase
                merge(structuredClone(first), ...rest.map((item) => structuredClone(item)))
            })
        }
    })

    bench('lodash', () => {
        for (let i = 0; i < ITERATIONS; i++) {
            getTestCases().forEach((testCase) => {
                const [first, ...rest] = testCase
                _merge(structuredClone(first), ...rest.map((item) => structuredClone(item)))
            })
        }
    })
})
