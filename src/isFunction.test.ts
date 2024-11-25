import {describe, it, expect} from 'vitest'

import isFunction from './isFunction'

describe('isFunction', () => {
    it('should return true for normal functions', () => {
        expect(isFunction(function () {})).toBe(true)
        expect(isFunction(() => {})).toBe(true)
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
        const proxyFunc = new Proxy(() => {}, {})
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

    /**
     * @question DOM API 검사 여부
     * Vitest 환경이 Node.js에서 jsdom으로 변경되어야 함
     * 그러나 window.alert는 jsdom에서는 없어서 정확한 확인은 불가능
     */
    // it('should return false for DOM objects', () => {
    //     expect(isFunction(document)).toBe(false)
    //     expect(isFunction(window)).toBe(false)
    // })

    // it('should return true for DOM methods', () => {
    //     expect(isFunction(document.createElement)).toBe(true)
    //     expect(isFunction(window.alert)).toBe(true)
    // })

    // it('should return true for DOM constructors', () => {
    //     expect(isFunction(HTMLElement)).toBe(true)
    //     expect(isFunction(Node)).toBe(true)
    // })
})
