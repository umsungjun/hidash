/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import _values from 'lodash/values'
import {describe, test, expect} from 'vitest'

import {values} from './values'

describe('values function', () => {
    test('should return the same result as lodash.values for strings', () => {
        expect(values('hello world')).toEqual(_values('hello world'))
    })

    test('should return the same result as lodash.values for arrays', () => {
        expect(values([1, 2, 3])).toEqual(_values([1, 2, 3]))
    })

    test('should return the same result as lodash.values for flat objects', () => {
        expect(values({a: 'juj', b: 'jhb'})).toEqual(_values({a: 'juj', b: 'jhb'}))
    })

    test('should return the same result as lodash.values for nested objects', () => {
        expect(values({a: {name: 'juj'}, b: {addr: 'Seoul'}})).toEqual(_values({a: {name: 'juj'}, b: {addr: 'Seoul'}}))
    })

    test('should return the same result as lodash.values for numbers', () => {
        expect(values(1)).toEqual(_values(1))
    })

    test('should return the same result as lodash.values for booleans', () => {
        expect(values(true)).toEqual(_values(true))
    })

    test('should return the same result as lodash.values for functions', () => {
        function Foo(this: {a: string; b: string}) {
            this.a = 'a'
            this.b = 'b'
        }
        expect(values(new (Foo as any)())).toEqual(_values(new (Foo as any)()))
    })

    test('should return the same result as lodash.values for classes', () => {
        class Class {
            a: string
            b: string

            constructor(a: string, b: string) {
                this.a = a
                this.b = b
            }

            get _a() {
                return this.a
            }

            readonly other = 'other'

            method() {
                console.log('method')
            }

            // eslint-disable-next-line accessor-pairs
            set setA(v: string) {
                this.a = v
            }
        }
        expect(values(new Class('a', 'b'))).toEqual(_values(new Class('a', 'b')))
    })

    test('should return the same result as lodash.values for symbols', () => {
        expect(values(Symbol(1))).toEqual(_values(Symbol(1)))
    })

    test('should return the same result as lodash.values for sets', () => {
        expect(values(new Set([1, 2, 3]))).toEqual(_values(new Set([1, 2, 3])))
    })

    test('should return the same result as lodash.values for maps', () => {
        const map = new Map<string, string>()
        map.set('a', 'juj')
        expect(values(map)).toEqual(_values(map))
    })

    test('should return the same result as lodash.values for empty values', () => {
        expect(values(null)).toEqual(_values(null))
        expect(values(undefined)).toEqual(_values(undefined))
    })
})
