import _keys from 'lodash/keys'
import {describe, test, expect} from 'vitest'

import {keys} from './keys'

describe('keys function', () => {
    test('returns empty array for null and undefined', () => {
        expect(keys(null)).toEqual([])
        expect(keys(null)).toEqual(_keys(null))
        expect(keys(undefined)).toEqual([])
        expect(keys(undefined)).toEqual(_keys(undefined))
    })

    test('returns array indices for array', () => {
        expect(keys([])).toEqual([])
        expect(keys([])).toEqual(_keys([]))
        const arr = ['a', 'b', 'c']
        expect(keys(arr)).toEqual(['0', '1', '2'])
        expect(keys(arr)).toEqual(_keys(arr))
        const emptyArr = new Array(3)
        expect(keys(emptyArr)).toEqual(['0', '1', '2'])
        expect(keys(emptyArr)).toEqual(_keys(emptyArr))
    })

    test('returns own enumerable keys for objects', () => {
        expect(keys({})).toEqual([])
        expect(keys({})).toEqual(_keys({}))
        const obj = {a: 1, b: 2}
        expect(keys(obj)).toEqual(['a', 'b'])
        expect(keys(obj)).toEqual(_keys(obj))
        const nullProto = Object.create(null)
        expect(keys(nullProto)).toEqual([])
        expect(keys(nullProto)).toEqual(_keys(nullProto))
    })

    test('handles array-like objects correctly', () => {
        const arrayLike = {0: 'a', 1: 'b', 2: 'c', length: 3}
        expect(keys(arrayLike)).toEqual(['0', '1', '2', 'length'])
        expect(keys(arrayLike)).toEqual(_keys(arrayLike))

        const htmlCollection = {
            0: 'div',
            1: 'span',
            length: 2,
            item: (_: number) => null,
        }
        expect(keys(htmlCollection)).toEqual(['0', '1', 'length', 'item'])
        expect(keys(htmlCollection)).toEqual(_keys(htmlCollection))
    })

    test('returns empty array for primitive values', () => {
        expect(keys(42)).toEqual([])
        expect(keys(42)).toEqual(_keys(42))
        expect(keys(true)).toEqual([])
        expect(keys(true)).toEqual(_keys(true))
        const sym = Symbol('test')
        expect(keys(sym)).toEqual([])
        expect(keys(sym)).toEqual(_keys(sym))
    })

    test('handles string objects correctly', () => {
        const strObj = Object('hello')
        expect(keys(strObj)).toEqual(['0', '1', '2', '3', '4'])
        expect(keys(strObj)).toEqual(_keys(strObj))
    })

    test('handles prototype properties correctly', () => {
        function TestClass() {
            this.a = 1
            this.b = 2
        }
        TestClass.prototype.c = 3

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const obj = new (TestClass as any)()
        expect(keys(obj)).toEqual(['a', 'b'])
        expect(keys(obj)).toEqual(_keys(obj))
    })

    test('handles non-enumerable properties correctly', () => {
        const obj = Object.create(
            {},
            {
                a: {value: 1, enumerable: true},
                b: {value: 2, enumerable: false},
            },
        )
        expect(keys(obj)).toEqual(['a'])
        expect(keys(obj)).toEqual(_keys(obj))
    })

    test('handles sparse arrays correctly', () => {
        const sparseArray = Array(3)
        sparseArray[1] = 'b'
        expect(keys(sparseArray)).toEqual(['0', '1', '2'])
        expect(keys(sparseArray)).toEqual(_keys(sparseArray))
    })

    test('handles array with additional properties', () => {
        const arr = ['a', 'b']
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(arr as any).prop = 'value'
        expect(keys(arr)).toEqual(['0', '1', 'prop'])
        expect(keys(arr)).toEqual(_keys(arr))
    })

    test('handles large objects efficiently', () => {
        const largeObj: Record<string, number> = {}
        for (let i = 0; i < 10000; i++) {
            largeObj[`key${i}`] = i
        }
        const result = keys(largeObj)
        const lodashResult = _keys(largeObj)
        expect(result.length).toBe(10000)
        expect(result.length).toBe(lodashResult.length)
        expect(result[0]).toBe('key0')
        expect(result[0]).toBe(lodashResult[0])
        expect(result[9999]).toBe('key9999')
        expect(result[9999]).toBe(lodashResult[9999])
    })

    test('handles large arrays efficiently', () => {
        const largeArray = new Array(10000).fill(0)
        const result = keys(largeArray)
        const lodashResult = _keys(largeArray)
        expect(result.length).toBe(10000)
        expect(result.length).toBe(lodashResult.length)
        expect(result[0]).toBe('0')
        expect(result[0]).toBe(lodashResult[0])
        expect(result[9999]).toBe('9999')
        expect(result[9999]).toBe(lodashResult[9999])
    })

    test('handles inherited enumerable properties correctly', () => {
        const proto = {inherited: true}
        const obj = Object.create(proto)
        obj.own = true
        expect(keys(obj)).toEqual(['own'])
        expect(keys(obj)).toEqual(_keys(obj))
    })

    test('handles Object.prototype modifications safely', () => {
        const originalToString = Object.prototype.toString
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ;(Object.prototype as any).malicious = 'bad'
            const obj = {a: 1, b: 2}
            expect(keys(obj)).toEqual(['a', 'b'])
            expect(keys(obj)).toEqual(_keys(obj))
        } finally {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            delete (Object.prototype as any).malicious
            // eslint-disable-next-line no-extend-native
            Object.prototype.toString = originalToString
        }
    })

    test('handles objects with symbols correctly', () => {
        const symbol = Symbol('test')
        const obj = {
            [symbol]: 'symbol',
            regular: 'value',
        }
        expect(keys(obj)).toEqual(['regular'])
        expect(keys(obj)).toEqual(_keys(obj))
    })
})
