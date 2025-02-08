import _isError from 'lodash/isError'
import {describe, it, expect} from 'vitest'

import {noop} from './internal/noop'
import isError from './isError'

describe('isError', () => {
    it('should match lodash for Error instances', () => {
        const testCases = [
            new Error(),
            new TypeError(),
            new RangeError(),
            new SyntaxError(),
            new ReferenceError(),
            new EvalError(),
            new URIError(),
        ]

        testCases.forEach((testCase) => {
            expect(isError(testCase)).toBe(_isError(testCase))
        })
    })

    it('should match lodash for custom error objects', () => {
        class CustomError extends Error {
            constructor() {
                super('custom error')
                this.name = 'CustomError'
            }
        }
        const customError = new CustomError()
        expect(isError(customError)).toBe(_isError(customError))
    })

    it('should match lodash for error-like objects', () => {
        const errorLike = {
            name: 'TestError',
            message: 'test message',
        }

        expect(isError(errorLike)).toBe(_isError(errorLike)) // should be false
    })

    it('should match lodash for Error constructors', () => {
        const constructors = [Error, TypeError, RangeError]
        constructors.forEach((constructor) => {
            expect(isError(constructor)).toBe(_isError(constructor))
        })
    })

    it('should match lodash for regular objects', () => {
        const objects = [{}, [], Object.create(null), new Map(), new Set(), new Date()]
        objects.forEach((obj) => {
            expect(isError(obj)).toBe(_isError(obj))
        })
    })

    it('should match lodash for primitives', () => {
        const primitives = [42, 'string', true, false, Symbol('symbol'), null, undefined]
        primitives.forEach((primitive) => {
            expect(isError(primitive)).toBe(_isError(primitive))
        })
    })

    it('should match lodash for proxy-wrapped values', () => {
        const proxyError = new Proxy(new Error('test'), {})
        const proxyObject = new Proxy({}, {})
        const proxyFunction = new Proxy(noop, {})

        expect(isError(proxyError)).toBe(_isError(proxyError))
        expect(isError(proxyObject)).toBe(_isError(proxyObject))
        expect(isError(proxyFunction)).toBe(_isError(proxyFunction))
    })

    it('should match lodash for complex built-in objects', () => {
        const builtIns = [Reflect, JSON, Math, Atomics, globalThis]
        builtIns.forEach((builtin) => {
            expect(isError(builtin)).toBe(_isError(builtin))
        })
    })
})
