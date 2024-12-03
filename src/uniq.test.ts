import _uniq from 'lodash/uniq'
import {describe, expect, it} from 'vitest'

import {uniq} from './uniq'

describe('uniq', () => {
    describe('should match lodash behavior', () => {
        it('numbers', () => {
            const testCases: number[][] = [
                [1, 2, 1, 4, 1, 3],
                [0, -0, 0, NaN, NaN],
                [Infinity, -Infinity, Infinity],
            ]

            testCases.forEach((testCase) => {
                expect(uniq(testCase)).toEqual(_uniq(testCase))
            })
        })

        it('booleans', () => {
            const testCases: boolean[][] = [[true, false, true, true, false]]

            testCases.forEach((testCase) => {
                expect(uniq(testCase)).toEqual(_uniq(testCase))
            })
        })

        it('strings', () => {
            const testCases: string[][] = [
                ['a', 'b', 'a', 'c', 'b'],
                ['', 'hello', ''],
            ]

            testCases.forEach((testCase) => {
                expect(uniq(testCase)).toEqual(_uniq(testCase))
            })
        })

        it('mixed values', () => {
            const testCase: (number | null | undefined)[] = [null, undefined, null, 1, undefined]
            expect(uniq(testCase)).toEqual(_uniq(testCase))
        })

        it('arrays', () => {
            const testCases: (number | number[])[][] = [
                [],
                [[1], [2], [1]],
                [
                    [1, 2],
                    [2, 1],
                    [1, 2],
                ],
                [
                    [1, 2, 3],
                    [4, 5, 6],
                    [1, 2, 3],
                ],
            ]

            testCases.forEach((testCase) => {
                expect(uniq(testCase)).toEqual(_uniq(testCase))
            })
        })

        it('objects', () => {
            interface TestObject {
                id?: number
                toString?: () => string
                value?: null | undefined
            }

            const obj1 = {id: 1}
            const obj2 = {id: 2}
            const obj3 = {id: 1}

            const testCases: TestObject[][] = [
                [obj1, obj2, obj3],
                [{toString: () => 'a'}, {toString: () => 'b'}, {toString: () => 'a'}],
                [{value: null}, {value: undefined}, {value: null}],
            ]

            testCases.forEach((testCase) => {
                expect(uniq(testCase)).toEqual(_uniq(testCase))
            })
        })

        it('edge cases', () => {
            const testCases = [undefined, null, [], Array(3), new Array(3), {length: 3}]

            testCases.forEach((testCase) => {
                expect(uniq(testCase)).toEqual(_uniq(testCase))
            })
        })

        it('large arrays', () => {
            const largeArray = Array.from({length: 1000}, (_, i) => i % 100)
            expect(uniq(largeArray)).toEqual(_uniq(largeArray))
        })
    })
})
