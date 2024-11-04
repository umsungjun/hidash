import _size from 'lodash/size'
import {describe, test, expect} from 'vitest'

import size from './size'

describe('size function', () => {
    test('returns 0 for null and undefined', () => {
        expect(size(null)).toBe(0)
        expect(size(null)).toBe(_size(null))
        expect(size(undefined)).toBe(0)
        expect(size(undefined)).toBe(_size(undefined))
    })

    test('returns correct length for strings', () => {
        expect(size('')).toBe(0)
        expect(size('')).toBe(_size(''))
        expect(size('hello')).toBe(5)
        expect(size('hello')).toBe(_size('hello'))
        expect(size('한글')).toBe(2)
        expect(size('한글')).toBe(_size('한글'))
    })

    test('returns correct length for arrays', () => {
        expect(size([])).toBe(0)
        expect(size([])).toBe(_size([]))
        expect(size([1, 2, 3])).toBe(3)
        expect(size([1, 2, 3])).toBe(_size([1, 2, 3]))
        expect(size(new Array(5))).toBe(5)
        expect(size(new Array(5))).toBe(_size(new Array(5)))
    })

    test('returns correct size for objects', () => {
        expect(size({})).toBe(0)
        expect(size({})).toBe(_size({}))
        expect(size({a: 1, b: 2})).toBe(2)
        expect(size({a: 1, b: 2})).toBe(_size({a: 1, b: 2}))
        expect(size(Object.create(null))).toBe(0)
        expect(size(Object.create(null))).toBe(_size(Object.create(null)))
    })

    test('returns correct size for Map', () => {
        const emptyMap = new Map()
        expect(size(emptyMap)).toBe(0)
        expect(size(emptyMap)).toBe(_size(emptyMap))

        const map = new Map([
            ['a', 1],
            ['b', 2],
        ])
        expect(size(map)).toBe(2)
        expect(size(map)).toBe(_size(map))
    })

    test('returns correct size for Set', () => {
        const emptySet = new Set()
        expect(size(emptySet)).toBe(0)
        expect(size(emptySet)).toBe(_size(emptySet))

        const set = new Set([1, 2, 3])
        expect(size(set)).toBe(3)
        expect(size(set)).toBe(_size(set))
    })

    test('returns 0 for non-collection primitives', () => {
        expect(size(0)).toBe(0)
        expect(size(0)).toBe(_size(0))
        expect(size(42)).toBe(0)
        expect(size(42)).toBe(_size(42))
        expect(size(true)).toBe(0)
        expect(size(true)).toBe(_size(true))
        expect(size(false)).toBe(0)
        expect(size(false)).toBe(_size(false))
        const symbol = Symbol('TEST')
        expect(size(symbol)).toBe(0)
        expect(size(symbol)).toBe(_size(symbol))
    })

    test('returns correct length for array-like objects', () => {
        const arrayLike = {length: 3, 0: 'a', 1: 'b', 2: 'c'}
        expect(size(arrayLike)).toBe(3)
        expect(size(arrayLike)).toBe(_size(arrayLike))
    })

    test('returns 0 for functions', () => {
        const arrowFn = () => {}
        expect(size(arrowFn)).toBe(0)
        expect(size(arrowFn)).toBe(_size(arrowFn))

        const normalFn = function () {}
        expect(size(normalFn)).toBe(0)
        expect(size(normalFn)).toBe(_size(normalFn))
    })

    test('handles objects with inherited properties', () => {
        const proto = {inherited: true}
        const obj = Object.create(proto)
        obj.own = true
        expect(size(obj)).toBe(1)
        expect(size(obj)).toBe(_size(obj))
    })

    test('returns correct size for large collections', () => {
        const largeArray = Array(1000000).fill(0)
        expect(size(largeArray)).toBe(1000000)
        expect(size(largeArray)).toBe(_size(largeArray))

        const largeString = 'a'.repeat(1000000)
        expect(size(largeString)).toBe(1000000)
        expect(size(largeString)).toBe(_size(largeString))

        const largeObject: Record<string, number> = {}
        for (let i = 0; i < 10000; i++) {
            largeObject[`key${i}`] = i
        }
        expect(size(largeObject)).toBe(10000)
        expect(size(largeObject)).toBe(_size(largeObject))
    })

    test('returns 0 for WeakMap', () => {
        const weakMap = new WeakMap()
        const key1 = {}
        const key2 = {}
        weakMap.set(key1, 'value1')
        weakMap.set(key2, 'value2')
        expect(size(weakMap)).toBe(0)
        expect(size(weakMap)).toBe(_size(weakMap))
    })

    test('returns 0 for WeakSet', () => {
        const weakSet = new WeakSet()
        const obj1 = {}
        const obj2 = {}
        weakSet.add(obj1)
        weakSet.add(obj2)
        expect(size(weakSet)).toBe(0)
        expect(size(weakSet)).toBe(_size(weakSet))
    })

    test('returns 0 for WeakMap and WeakSet even with elements', () => {
        const weakMap = new WeakMap([[{}, 'value']])
        const weakSet = new WeakSet([{}])
        expect(size(weakMap)).toBe(0)
        expect(size(weakMap)).toBe(_size(weakMap))
        expect(size(weakSet)).toBe(0)
        expect(size(weakSet)).toBe(_size(weakSet))
    })
})
