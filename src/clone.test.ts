// clone.test.ts
import _clone from 'lodash/clone'
import {describe, expect, it} from 'vitest'

import {clone} from './clone'

describe('clone', () => {
    describe('should match lodash behavior', () => {
        it('primitive values', () => {
            const values = [null, undefined, '', 'hello', 0, -0, 42, -42, true, false, NaN, Infinity, -Infinity]

            values.forEach((value) => {
                expect(clone(value)).toEqual(_clone(value))
            })
        })

        it('Date objects', () => {
            const date = new Date()
            const cloned = clone(date)

            expect(cloned).toEqual(date)
            expect(cloned).not.toBe(date)
        })

        it('RegExp objects', () => {
            const regexp = /hello/gi
            const cloned = clone(regexp)

            expect(cloned).toEqual(regexp)
            expect(cloned).not.toBe(regexp)
        })

        it('Arrays', () => {
            const arrays = [
                [],
                [1, 2, 3],
                ['a', 'b', 'c'],
                [null, undefined],
                [true, false],
                [
                    [1, 2],
                    [3, 4],
                ],
            ]

            arrays.forEach((arr) => {
                const cloned = clone(arr)
                expect(cloned).toEqual(_clone(arr))
                expect(cloned).not.toBe(arr)
                if (arr.length > 0) {
                    expect(cloned[0]).toBe(arr[0])
                }
            })
        })

        it('TypedArrays', () => {
            const arrays = [new Int8Array([1, 2, 3]), new Uint8Array([1, 2, 3]), new Float32Array([1, 2, 3])]

            arrays.forEach((arr) => {
                const cloned = clone(arr)
                expect(cloned).toEqual(arr)
                expect(cloned).not.toBe(arr)
                expect(cloned.buffer).not.toBe(arr.buffer)
            })
        })

        it('Sets and Maps', () => {
            const set = new Set([1, 2, 3])
            const clonedSet = clone(set)
            expect(Array.from(clonedSet)).toEqual(Array.from(set))
            expect(clonedSet).not.toBe(set)

            const map = new Map([
                [1, 2],
                [3, 4],
            ])
            const clonedMap = clone(map)
            expect(Array.from(clonedMap)).toEqual(Array.from(map))
            expect(clonedMap).not.toBe(map)
        })

        it('plain objects', () => {
            interface TestObject {
                a?: number
                b?: number
                nested?: {b: number}
            }

            const objects: TestObject[] = [{}, {a: 1, b: 2}, {nested: {b: 1}}]

            objects.forEach((obj) => {
                const cloned = clone(obj)
                expect(cloned).toEqual(_clone(obj))
                expect(cloned).not.toBe(obj)
                if (obj.nested) {
                    expect(cloned.nested).toBe(obj.nested)
                }
            })
        })
    })
})
