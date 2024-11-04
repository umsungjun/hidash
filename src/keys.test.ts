import _keys from 'lodash/keys'
import {describe, test, expect} from 'vitest'

import {keys} from './keys'

describe('keys function', () => {
    test('returns empty array for null and undefined', () => {
        expect(keys(null)).toEqual([])
        expect(keys(undefined)).toEqual([])
    })

    test('returns array indices for array', () => {
        expect(keys([])).toEqual([])
        expect(keys(['a', 'b', 'c'])).toEqual(['0', '1', '2'])
        expect(keys(new Array(3))).toEqual(['0', '1', '2'])
    })

    test('returns own enumerable keys for objects', () => {
        expect(keys({})).toEqual([])
        expect(keys({a: 1, b: 2})).toEqual(['a', 'b'])
        expect(keys(Object.create(null))).toEqual([])
    })

    test('handles array-like objects correctly', () => {
        const arrayLike = {0: 'a', 1: 'b', 2: 'c', length: 3}
        expect(keys(arrayLike)).toEqual(['0', '1', '2'])

        const htmlCollection = {
            0: 'div',
            1: 'span',
            length: 2,
            item: (_: number) => null,
        }
        expect(keys(htmlCollection)).toEqual(['0', '1', 'item'])
    })

    test('returns empty array for primitive values', () => {
        expect(keys(42)).toEqual([])
        expect(keys(true)).toEqual([])
        expect(keys(Symbol('test'))).toEqual([])
    })

    test('handles string objects correctly', () => {
        const strObj = Object('hello')
        expect(keys(strObj)).toEqual(['0', '1', '2', '3', '4'])
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
    })

    test('handles sparse arrays correctly', () => {
        const sparseArray = Array(3)
        sparseArray[1] = 'b'
        expect(keys(sparseArray)).toEqual(['0', '1', '2'])
    })

    test('handles array with additional properties', () => {
        const arr = ['a', 'b']

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(arr as any).prop = 'value'
        expect(keys(arr)).toEqual(['0', '1', 'prop'])
    })

    test('handles large objects efficiently', () => {
        const largeObj: Record<string, number> = {}
        for (let i = 0; i < 10000; i++) {
            largeObj[`key${i}`] = i
        }
        expect(keys(largeObj).length).toBe(10000)
        expect(keys(largeObj)[0]).toBe('key0')
        expect(keys(largeObj)[9999]).toBe('key9999')
    })

    test('handles large arrays efficiently', () => {
        const largeArray = new Array(10000).fill(0)
        const result = keys(largeArray)
        expect(result.length).toBe(10000)
        expect(result[0]).toBe('0')
        expect(result[9999]).toBe('9999')
    })

    test('handles inherited enumerable properties correctly', () => {
        const proto = {inherited: true}
        const obj = Object.create(proto)
        obj.own = true
        expect(keys(obj)).toEqual(['own'])
    })

    test('handles Object.prototype modifications safely', () => {
        const originalToString = Object.prototype.toString
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ;(Object.prototype as any).malicious = 'bad'
            const obj = {a: 1, b: 2}
            expect(keys(obj)).toEqual(['a', 'b'])
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
    })
})
