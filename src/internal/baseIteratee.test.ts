/* eslint-disable @typescript-eslint/no-explicit-any */
import {describe, it, expect} from 'vitest'

import {baseIteratee} from './baseIteratee'

describe('baseIteratee', () => {
    it('should handle string property path', () => {
        const iteratee = baseIteratee('a.b.c')
        const obj = {a: {b: {c: 42}}}
        expect(iteratee(obj, 0, [])).toBe(42)
    })

    it('should handle number as property key', () => {
        const iteratee = baseIteratee<number, any>(2)
        const arr = [10, 20, 30]
        expect(iteratee(arr, 2, arr)).toBe(30)
    })

    it('should handle symbol as property key', () => {
        const symKey = Symbol('key')
        const iteratee = baseIteratee(symKey)
        const obj = {[symKey]: 'value'}
        expect(iteratee(obj, 0, [])).toBe('value')
    })

    it('should handle array [key, value] pairs', () => {
        const iteratee = baseIteratee(['name', 'Alice'])
        const obj = {name: 'Alice', age: 30}
        expect(iteratee(obj, 0, [])).toBe(true)

        const notMatching = {name: 'Bob', age: 25}
        expect(iteratee(notMatching, 0, [])).toBe(false)

        const complicated = baseIteratee(['name.first', 'a'])
        const obj2 = {
            name: {
                first: 'a',
                last: 'b',
            },
        }
        expect(complicated(obj2, 0, [])).toBe(true)
    })

    it('should handle plain object for partial match', () => {
        const iteratee = baseIteratee({active: true, role: 'admin'})
        const obj = {active: true, role: 'admin', id: 1}
        expect(iteratee(obj, 0, [])).toBe(true)

        const notMatching = {active: true, role: 'user'}
        expect(iteratee(notMatching, 0, [])).toBe(false)

        const complicated = baseIteratee({
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
        const customFunction = (value: any) => value > 10
        const iteratee = baseIteratee(customFunction)
        expect(iteratee(15, 0, [])).toBe(true)
        expect(iteratee(5, 0, [])).toBe(false)
    })

    it('should reduce paths correctly with mixed keys (string & number)', () => {
        const iteratee = baseIteratee('a.1.b')
        const obj = {a: [{}, {b: 42}]}
        expect(iteratee(obj, 0, [])).toBe(42)
    })

    it('should handle missing keys gracefully', () => {
        const iteratee = baseIteratee('a.b.c')
        const obj = {a: {b: {}}}
        expect(iteratee(obj, 0, [])).toBeUndefined()
    })
})
