import {describe, test, expect, vi} from 'vitest'

import {noop} from './internal/noop'
import memoize from './memoize'

describe('memoize function', () => {
    test('memoizes the result of a function', () => {
        let callCount = 0
        const add = (a: number, b: number): number => {
            callCount++
            return a + b
        }

        const memoizedAdd = memoize(add)

        // verify that the result of the first call is correct
        expect(memoizedAdd(1, 2)).toBe(3)

        // verify that the function is called once
        expect(callCount).toBe(1)

        // verify that the second call with the same factor returns cached results
        expect(memoizedAdd(1, 2)).toBe(3)

        // use cached results to ensure callCount is not increased
        expect(callCount).toBe(1)

        // verify that a new argument returns a new result on a call
        expect(memoizedAdd(2, 3)).toBe(5)

        // check if callCount has increased due to new calculation
        expect(callCount).toBe(2)
    })

    test('uses the first argument as the cache key by default', () => {
        const fn = vi.fn((a: number, b: number) => a + b)
        const memoizedFn = memoize(fn)

        memoizedFn(1, 2)
        memoizedFn(1, 3) // use cached results because the first argument is the same

        // the function must be called only once because the first argument is the same but uses cache
        expect(fn).toHaveBeenCalledTimes(1)
    })

    test('uses custom resolver if provided', () => {
        const fn = vi.fn((a: {x: number}, b: {y: number}) => a.x + b.y)
        const resolver = (a: {x: number}, b: {y: number}) => `${a.x},${b.y}`
        const memoizedFn = memoize(fn, resolver)

        // verify that the result of the first call is correct
        expect(memoizedFn({x: 1}, {y: 2})).toBe(3)

        // verify that the second call with the same argument returns cached results
        expect(memoizedFn({x: 1}, {y: 2})).toBe(3)

        // verify that the function was executed only once, although it was called twice with the same argument
        expect(fn).toHaveBeenCalledTimes(1)

        // verify that a new argument returns a new result on a call
        expect(memoizedFn({x: 2}, {y: 1})).toBe(3)

        // make sure the function is executed a second time because it was called with a new argument
        expect(fn).toHaveBeenCalledTimes(2)
    })

    test('resolver is called with the same this context as the memoized function', () => {
        interface TestObject {
            multiplier: number
            fn: (x: number) => number
            resolver: (x: number) => number
            memoizedFn?: (x: number) => number
        }

        const obj: TestObject = {
            multiplier: 2,
            fn: function (this: TestObject, x: number) {
                return x * this.multiplier
            },
            resolver: function (this: TestObject, x: number) {
                return x * this.multiplier
            },
        }

        const memoizedFn = memoize(obj.fn, obj.resolver)
        obj.memoizedFn = memoizedFn

        // verify that the result of the first call is correct (3 * 2 = 6)
        expect(obj.memoizedFn(3)).toBe(6)

        // verify that the second call with the same argument returns cached results
        expect(obj.memoizedFn(3)).toBe(6)

        // verify that a new argument returns a new result on a call (4 * 2 = 8)
        expect(obj.memoizedFn(4)).toBe(8)
    })

    test('exposes cache as a property of memoized function', () => {
        const fn = (a: number) => a * 2
        const memoizedFn = memoize(fn)

        memoizedFn(2)

        // verify that cached values are correct (2 * 2 = 4)
        const cachedValue = memoizedFn.cache.get(2)
        expect(cachedValue).toBe(4)
    })

    test('throws TypeError for non-function arguments', () => {
        // verify that TypeError is thrown when a non-function value is delivered
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        expect(() => memoize(42 as any)).toThrow(TypeError)

        // verify that resolver throws TypeError when it is not a function
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        expect(() => memoize(noop, 'not a function' as any)).toThrow(TypeError)
    })

    test('handles functions with no arguments', () => {
        let callCount = 0
        const fn = () => {
            callCount++
            return 'result'
        }

        const memoizedFn = memoize(fn)

        // verify that the result of the first call is correct
        expect(memoizedFn()).toBe('result')

        // verify that the second call returns cached results
        expect(memoizedFn()).toBe('result')

        // verify that the function is called only once
        expect(callCount).toBe(1)
    })

    test('works with functions that return undefined', () => {
        const fn = vi.fn(() => undefined)
        const memoizedFn = memoize(fn)

        // verify that the undefined is returned on the first call
        expect(memoizedFn()).toBeUndefined()

        // verify that the second call returns cached undefined
        expect(memoizedFn()).toBeUndefined()

        // verify that the function is called only once (undefined must also be cached)
        expect(fn).toHaveBeenCalledTimes(1)
    })
})
