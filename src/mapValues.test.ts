import _mapValues from 'lodash/mapValues'
import {describe, it, expect} from 'vitest'

import {mapValues} from './mapValues'

describe('mapValues function', () => {
    it('returns empty object for null and undefined', () => {
        expect(mapValues(null)).toEqual({})
        expect(mapValues(null)).toEqual(_mapValues(null))
        expect(mapValues(undefined)).toEqual({})
        expect(mapValues(undefined)).toEqual(_mapValues(undefined))
    })

    it('handles basic object transformations', () => {
        const obj = {a: 1, b: 2}
        expect(mapValues(obj, (n) => n * 2)).toEqual({a: 2, b: 4})
        expect(mapValues(obj, (n) => n * 2)).toEqual(_mapValues(obj, (n) => n * 2))
    })

    it('handles array transformations', () => {
        const arr = ['a', 'b', 'c']
        expect(mapValues(arr)).toEqual({'0': 'a', '1': 'b', '2': 'c'})
        expect(mapValues(arr)).toEqual(_mapValues(arr))

        // With iteratee function
        expect(mapValues(arr, (v) => v.toUpperCase())).toEqual({'0': 'A', '1': 'B', '2': 'C'})
        expect(mapValues(arr, (v) => v.toUpperCase())).toEqual(_mapValues(arr, (v) => v.toUpperCase()))
    })

    it('handles primitive constructor iteratees', () => {
        const obj = {a: 1, b: 2, c: 3}
        expect(mapValues(obj, String)).toEqual({a: '1', b: '2', c: '3'})
        expect(mapValues(obj, String)).toEqual(_mapValues(obj, String))

        expect(mapValues(obj, Boolean)).toEqual({a: true, b: true, c: true})
        expect(mapValues(obj, Boolean)).toEqual(_mapValues(obj, Boolean))
    })

    it('handles undefined and null values in objects', () => {
        const obj = {a: null, b: undefined, c: 1}
        expect(mapValues(obj, (v) => v)).toEqual({a: null, b: undefined, c: 1})
        expect(mapValues(obj, (v) => v)).toEqual(_mapValues(obj, (v) => v))
    })

    it('performs deep cloning when no iteratee is provided', () => {
        const obj = {
            a: {nested: 1},
            b: [1, 2, 3],
        }
        const result = mapValues(obj)
        expect(result).toEqual(obj)
        expect(result.a).not.toBe(obj.a) // Should be a new object
        expect(result.b).not.toBe(obj.b) // Should be a new array
    })

    it('handles array-like objects', () => {
        const arrayLike = {'0': 'a', '1': 'b', length: 2}
        expect(mapValues(arrayLike, (v) => (typeof v === 'string' ? v.toUpperCase() : v))).toEqual({
            '0': 'A',
            '1': 'B',
            length: 2,
        })
        expect(mapValues(arrayLike, (v) => (typeof v === 'string' ? v.toUpperCase() : v))).toEqual(
            _mapValues(arrayLike, (v) => (typeof v === 'string' ? v.toUpperCase() : v)),
        )
    })

    it('handles empty objects and arrays', () => {
        expect(mapValues({}, (v) => v)).toEqual({})
        expect(mapValues({}, (v) => v)).toEqual(_mapValues({}, (v) => v))
        expect(mapValues([], (v) => v)).toEqual({})
        expect(mapValues([], (v) => v)).toEqual(_mapValues([], (v) => v))
    })

    it('handles object with prototype properties', () => {
        function TestClass() {
            this.a = 1
            this.b = 2
        }
        TestClass.prototype.c = 3

        const obj = new TestClass()
        expect(mapValues(obj, (v) => v * 2)).toEqual({a: 2, b: 4})
        expect(mapValues(obj, (v) => v * 2)).toEqual(_mapValues(obj, (v) => v * 2))
    })

    it('handles large objects efficiently', () => {
        const largeObj: Record<string, number> = {}
        for (let i = 0; i < 10000; i++) {
            largeObj[`key${i}`] = i
        }
        const result = mapValues(largeObj, (v) => v * 2)
        const lodashResult = _mapValues(largeObj, (v) => v * 2)
        expect(Object.keys(result).length).toBe(10000)
        expect(result).toEqual(lodashResult)
        expect(result.key0).toBe(0)
        expect(result.key9999).toBe(19998)
    })

    it('handles objects with symbols', () => {
        const symbol = Symbol('test')
        const obj = {
            [symbol]: 'symbol',
            regular: 'value',
        }
        expect(mapValues(obj, (v) => `${v}!`)).toEqual({regular: 'value!'})
        expect(mapValues(obj, (v) => `${v}!`)).toEqual(_mapValues(obj, (v) => `${v}!`))
    })

    it('handles inheritance correctly', () => {
        const proto = {inherited: true}
        const obj = Object.create(proto)
        obj.own = false

        expect(mapValues(obj, (v) => !v)).toEqual({own: true})
        expect(mapValues(obj, (v) => !v)).toEqual(_mapValues(obj, (v) => !v))
    })

    it('...', () => {
        const obj = {
            user1: {name: 'John', age: 25},
            user2: {name: 'Jane', age: 30},
        }
        expect(mapValues(obj, (v) => v.age)).toEqual(_mapValues(obj, (v) => v.age))
    })
})
