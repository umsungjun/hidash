import _isPlainObject from 'lodash/isPlainObject'
import {describe, test, expect} from 'vitest'

import {noop} from './internal/noop'
import {isPlainObject} from './isPlainObject'

describe('isPlainObject function', () => {
    test('returns true for plain objects', () => {
        expect(isPlainObject({})).toBe(true)
        expect(isPlainObject({})).toBe(_isPlainObject({}))

        const obj = {x: 0, y: 0}
        expect(isPlainObject(obj)).toBe(true)
        expect(isPlainObject(obj)).toBe(_isPlainObject(obj))

        expect(isPlainObject(Object.create(null))).toBe(true)
        expect(isPlainObject(Object.create(null))).toBe(_isPlainObject(Object.create(null)))
    })

    test('returns false for non-plain objects', () => {
        // Array
        expect(isPlainObject([])).toBe(false)
        expect(isPlainObject([])).toBe(_isPlainObject([]))
        expect(isPlainObject([1, 2, 3])).toBe(false)
        expect(isPlainObject([1, 2, 3])).toBe(_isPlainObject([1, 2, 3]))

        // Built-in objects
        expect(isPlainObject(new Date())).toBe(false)
        expect(isPlainObject(new Date())).toBe(_isPlainObject(new Date()))
        expect(isPlainObject(new Error())).toBe(false)
        expect(isPlainObject(new Error())).toBe(_isPlainObject(new Error()))
        expect(isPlainObject(/xyz/)).toBe(false)
        expect(isPlainObject(/xyz/)).toBe(_isPlainObject(/xyz/))
    })

    test('returns false for primitive values', () => {
        expect(isPlainObject(null)).toBe(false)
        expect(isPlainObject(null)).toBe(_isPlainObject(null))

        expect(isPlainObject(undefined)).toBe(false)
        expect(isPlainObject(undefined)).toBe(_isPlainObject(undefined))

        expect(isPlainObject(42)).toBe(false)
        expect(isPlainObject(42)).toBe(_isPlainObject(42))

        expect(isPlainObject('string')).toBe(false)
        expect(isPlainObject('string')).toBe(_isPlainObject('string'))

        expect(isPlainObject(true)).toBe(false)
        expect(isPlainObject(true)).toBe(_isPlainObject(true))
    })

    test('returns false for functions', () => {
        expect(isPlainObject(Function)).toBe(false)
        expect(isPlainObject(Function)).toBe(_isPlainObject(Function))

        expect(isPlainObject(noop)).toBe(false)
        expect(isPlainObject(noop)).toBe(_isPlainObject(noop))

        expect(isPlainObject(class {})).toBe(false)
        expect(isPlainObject(class {})).toBe(_isPlainObject(class {}))
    })

    test('handles objects with custom prototype', () => {
        function Custom() {
            this.x = 1
        }
        expect(isPlainObject(new Custom())).toBe(false)
        expect(isPlainObject(new Custom())).toBe(_isPlainObject(new Custom()))

        class CustomClass {
            x = 1
        }
        expect(isPlainObject(new CustomClass())).toBe(false)
        expect(isPlainObject(new CustomClass())).toBe(_isPlainObject(new CustomClass()))
    })

    test('handles objects created with Object.create', () => {
        const proto = {a: 1}
        expect(isPlainObject(Object.create(proto))).toBe(false)
        expect(isPlainObject(Object.create(proto))).toBe(_isPlainObject(Object.create(proto)))

        expect(isPlainObject(Object.create(null))).toBe(true)
        expect(isPlainObject(Object.create(null))).toBe(_isPlainObject(Object.create(null)))

        expect(isPlainObject(Object.create({}))).toBe(false)
        expect(isPlainObject(Object.create({}))).toBe(_isPlainObject(Object.create({})))
    })

    test('handles objects with Object.defineProperty', () => {
        const obj = {}
        Object.defineProperty(obj, 'prop', {
            value: 1,
            enumerable: true,
        })
        expect(isPlainObject(obj)).toBe(true)
        expect(isPlainObject(obj)).toBe(_isPlainObject(obj))
    })

    test('handles object with modified prototype chain', () => {
        const obj = {}
        Object.setPrototypeOf(obj, null)
        expect(isPlainObject(obj)).toBe(true)
        expect(isPlainObject(obj)).toBe(_isPlainObject(obj))

        const objWithCustomProto = {}
        Object.setPrototypeOf(objWithCustomProto, {custom: true})
        expect(isPlainObject(objWithCustomProto)).toBe(false)
        expect(isPlainObject(objWithCustomProto)).toBe(_isPlainObject(objWithCustomProto))
    })
})
