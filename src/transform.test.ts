import _transform from 'lodash/transform'
import {describe, expect, it} from 'vitest'

import transform from './transform'

describe('transform', () => {
    describe('should match lodash behavior', () => {
        it('transforms objects similarly to lodash', () => {
            const obj = {a: 1, b: 2, c: 1}
            const iteratee = (acc: Record<number, string[]>, value: number, key: string) => {
                if (!acc[value]) {
                    acc[value] = []
                }
                acc[value].push(key)
            }

            const customResult = transform(obj, iteratee, {} as Record<number, string[]>)
            const lodashResult = _transform(obj, iteratee, {} as Record<number, string[]>)

            expect(customResult).toEqual(lodashResult)
        })

        it('transforms arrays similarly to lodash', () => {
            const arr = [1, 2, 3, 4, 5]
            const iteratee = (acc: number[], value: number) => {
                if (value % 2 === 0) {
                    acc.push(value * 10)
                }
            }

            const customResult = transform(arr, iteratee, [] as number[])
            const lodashResult = _transform(arr, iteratee, [] as number[])

            expect(customResult).toEqual(lodashResult)
        })

        it('stops transforming when iteratee returns false', () => {
            const arr = [10, 20, 30, 40, 50]
            const iteratee = (acc: number[], value: number) => {
                if (value === 30) {
                    return false
                }
                acc.push(value)
            }

            const customResult = transform(arr, iteratee, [] as number[])
            const lodashResult = _transform(arr, iteratee, [] as number[])

            expect(customResult).toEqual(lodashResult)
        })

        it('handles empty objects and arrays', () => {
            const emptyObj = {}
            const emptyArr: number[] = []
            const iterateeObj = (acc: Record<string, string>, value: unknown, key: string) => {
                acc[key] = String(value)
            }
            const iterateeArr = (acc: number[], value: number) => {
                acc.push(value * 2)
            }

            expect(transform(emptyObj, iterateeObj, {})).toEqual(_transform(emptyObj, iterateeObj, {}))
            expect(transform(emptyArr, iterateeArr, [] as number[])).toEqual(
                _transform(emptyArr, iterateeArr, [] as number[]),
            )
        })

        it('works with more complex transforms', () => {
            const complexObj = {a: {x: 1}, b: {x: 2}, c: {x: 1}}
            const iteratee = (acc: Record<number, string[]>, value: {x: number}, key: string) => {
                const val = value.x
                if (!acc[val]) {
                    acc[val] = []
                }
                acc[val].push(key)
            }

            const customResult = transform(complexObj, iteratee, {} as Record<number, string[]>)
            const lodashResult = _transform(complexObj, iteratee, {} as Record<number, string[]>)

            expect(customResult).toEqual(lodashResult)
        })
    })
})
