import {describe, test, expect} from 'vitest'

import size from './size'

describe('size function', () => {
    test('returns 0 for null and undefined', () => {
        expect(size(null)).toBe(0)
        expect(size(undefined)).toBe(0)
    })

    test('returns correct length for strings', () => {
        expect(size('')).toBe(0)
        expect(size('hello')).toBe(5)
        expect(size('한글')).toBe(2)
    })

    test('returns correct length for arrays', () => {
        expect(size([])).toBe(0)
        expect(size([1, 2, 3])).toBe(3)
        expect(size(new Array(5))).toBe(5)
    })

    test('returns correct size for objects', () => {
        expect(size({})).toBe(0)
        expect(size({a: 1, b: 2})).toBe(2)
        expect(size(Object.create(null))).toBe(0)
    })

    test('returns correct size for Map', () => {
        expect(size(new Map())).toBe(0)
        const map = new Map([
            ['a', 1],
            ['b', 2],
        ])
        expect(size(map)).toBe(2)
    })

    test('returns correct size for Set', () => {
        expect(size(new Set())).toBe(0)
        const set = new Set([1, 2, 3])
        expect(size(set)).toBe(3)
    })

    test('returns 0 for non-collection primitives', () => {
        expect(size(0)).toBe(0)
        expect(size(42)).toBe(0)
        expect(size(true)).toBe(0)
        expect(size(false)).toBe(0)
        expect(size(Symbol('TEST'))).toBe(0)
    })

    test('returns correct length for array-like objects', () => {
        const arrayLike = {length: 3, 0: 'a', 1: 'b', 2: 'c'}
        expect(size(arrayLike)).toBe(3)
    })

    test('returns 0 for functions', () => {
        expect(size(() => {})).toBe(0)
        expect(size(function () {})).toBe(0)
    })

    test('handles objects with inherited properties', () => {
        const proto = {inherited: true}
        const obj = Object.create(proto)
        obj.own = true
        expect(size(obj)).toBe(1)
    })

    test('returns correct size for large collections', () => {
        const largeArray = Array(1000000).fill(0)
        expect(size(largeArray)).toBe(1000000)

        const largeString = 'a'.repeat(1000000)
        expect(size(largeString)).toBe(1000000)

        const largeObject: Record<string, number> = {}
        for (let i = 0; i < 10000; i++) {
            largeObject[`key${i}`] = i
        }
        expect(size(largeObject)).toBe(10000)
    })

    // WeakMap, WeakSet은 사이즈를 알 방법이 없으므로 항상 0을 반환한다.
    test('returns 0 for WeakMap', () => {
        const weakMap = new WeakMap()
        const key1 = {}
        const key2 = {}
        weakMap.set(key1, 'value1')
        weakMap.set(key2, 'value2')
        expect(size(weakMap)).toBe(0)
    })

    test('returns 0 for WeakSet', () => {
        const weakSet = new WeakSet()
        const obj1 = {}
        const obj2 = {}
        weakSet.add(obj1)
        weakSet.add(obj2)
        expect(size(weakSet)).toBe(0)
    })

    test('returns 0 for WeakMap and WeakSet even with elements', () => {
        const weakMap = new WeakMap([[{}, 'value']])
        const weakSet = new WeakSet([{}])
        expect(size(weakMap)).toBe(0)
        expect(size(weakSet)).toBe(0)
    })
})
