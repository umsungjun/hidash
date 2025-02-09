import {describe, it, expect} from 'vitest'

import {noop} from './internal/noop'
import isFunction from './isFunction'

describe('isFunction', () => {
    it('should return true for normal functions', () => {
        expect(isFunction(function () {})).toBe(true)
        expect(isFunction(noop)).toBe(true)
    })

    it('should return true for async functions', () => {
        expect(isFunction(async function () {})).toBe(true)
        expect(isFunction(async () => {})).toBe(true)
    })

    it('should return true for generator functions', () => {
        function* generatorFunc() {}
        expect(isFunction(generatorFunc)).toBe(true)
    })

    it('should return true for Proxy-wrapped functions', () => {
        const proxyFunc = new Proxy(noop, {})
        expect(isFunction(proxyFunc)).toBe(true)
    })

    it('should return false for objects', () => {
        expect(isFunction({})).toBe(false)
        expect(isFunction([])).toBe(false)
        expect(isFunction(Object.create(null))).toBe(false)
    })

    it('should return false for primitives', () => {
        expect(isFunction(42)).toBe(false)
        expect(isFunction('string')).toBe(false)
        expect(isFunction(true)).toBe(false)
        expect(isFunction(Symbol('symbol'))).toBe(false)
        expect(isFunction(null)).toBe(false)
        expect(isFunction(undefined)).toBe(false)
    })

    it('should return false for class constructors', () => {
        class MyClass {}
        expect(isFunction(MyClass)).toBe(true)
    })

    it('should return false for non-function proxies', () => {
        const proxyObject = new Proxy({}, {})
        expect(isFunction(proxyObject)).toBe(false)
    })

    it('should return false for Reflect', () => {
        expect(isFunction(Reflect)).toBe(false)
    })
})
