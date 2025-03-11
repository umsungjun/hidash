import {describe, it, expect} from 'vitest'

import {baseIteratee} from './baseIteratee'

describe('baseIteratee', () => {
    it('should handle array [key, value] pairs', () => {
        const iteratee = baseIteratee<{name: string; age: number}, boolean>(['name', 'Alice'])
        const obj = {name: 'Alice', age: 30}
        expect(iteratee(obj, 0, [])).toBe(true)

        const notMatching = {name: 'Bob', age: 25}
        expect(iteratee(notMatching, 0, [])).toBe(false)

        const complicated = baseIteratee<{name: {first: string; last?: string}}, boolean>(['name.first', 'a'])
        const obj2 = {
            name: {
                first: 'a',
                last: 'b',
            },
        }
        expect(complicated(obj2, 0, [])).toBe(true)
    })

    it('should handle plain object for partial match', () => {
        const iteratee = baseIteratee<{active: boolean; role: string; id?: number}, boolean>({
            active: true,
            role: 'admin',
        })
        const obj = {active: true, role: 'admin', id: 1}
        expect(iteratee(obj, 0, [])).toBe(true)

        const notMatching = {active: true, role: 'user'}
        expect(iteratee(notMatching, 0, [])).toBe(false)

        const complicated = baseIteratee<{name: {first: string; last?: string}}, boolean>({
            name: {
                first: 'a',
            },
        })
        const obj2 = {
            name: {
                first: 'a',
                last: 'b',
            },
        }
        expect(complicated(obj2, 0, [])).toBe(true)
    })

    it('should return the function if iteratee is already a function', () => {
        const customFunction = (value: number) => value > 10
        const iteratee = baseIteratee<number, boolean>(customFunction)
        expect(iteratee(15, 0, [])).toBe(true)
        expect(iteratee(5, 0, [])).toBe(false)
    })

    it('should handle NaN edge case with [key, value] pair', () => {
        const iteratee = baseIteratee<{score: number}, boolean>(['score', NaN])
        const obj = {score: NaN}
        expect(iteratee(obj, 0, [])).toBe(false)
    })

    it('should handle NaN edge case with plain object match', () => {
        const iteratee = baseIteratee<{score: number}, boolean>({score: NaN})
        const obj = {score: NaN}
        expect(iteratee(obj, 0, [])).toBe(false)
    })

    it('should handle empty iteratee edge case', () => {
        const nullIteratee = baseIteratee(null)

        const arr = ['a', 'b', 'c']
        expect(nullIteratee(arr, 0, [])).toEqual(arr)

        const undefinedIteratee = baseIteratee(undefined)
        expect(undefinedIteratee(arr, 0, [])).toEqual(arr)

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const voidIteratee = baseIteratee()
        expect(voidIteratee(arr, 0, [])).toEqual(arr)
    })
})
