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

        // 첫 번째 호출의 결과가 정확한지 확인
        expect(memoizedAdd(1, 2)).toBe(3)

        // 함수가 한 번 호출되었는지 확인
        expect(callCount).toBe(1)

        // 같은 인자로 두 번째 호출 시 캐시된 결과를 반환하는지 확인
        expect(memoizedAdd(1, 2)).toBe(3)

        // 캐시된 결과를 사용하므로 callCount가 증가하지 않았는지 확인
        expect(callCount).toBe(1)

        // 새로운 인자로 호출 시 새로운 결과를 반환하는지 확인
        expect(memoizedAdd(2, 3)).toBe(5)

        // 새로운 계산으로 인해 callCount가 증가했는지 확인
        expect(callCount).toBe(2)
    })

    test('uses the first argument as the cache key by default', () => {
        const fn = vi.fn((a: number, b: number) => a + b)
        const memoizedFn = memoize(fn)

        memoizedFn(1, 2)
        memoizedFn(1, 3) // 첫 번째 인수가 같으므로 캐시된 결과를 사용해야 함

        // 첫 번째 인자만 같아도 캐시를 사용하므로 함수는 한 번만 호출되어야 함
        expect(fn).toHaveBeenCalledTimes(1)
    })

    test('uses custom resolver if provided', () => {
        const fn = vi.fn((a: {x: number}, b: {y: number}) => a.x + b.y)
        const resolver = (a: {x: number}, b: {y: number}) => `${a.x},${b.y}`
        const memoizedFn = memoize(fn, resolver)

        // 첫 번째 호출의 결과가 정확한지 확인
        expect(memoizedFn({x: 1}, {y: 2})).toBe(3)

        // 같은 인자로 두 번째 호출 시 캐시된 결과를 반환하는지 확인
        expect(memoizedFn({x: 1}, {y: 2})).toBe(3)

        // 같은 인자로 두 번 호출했지만 함수는 한 번만 실행되었는지 확인
        expect(fn).toHaveBeenCalledTimes(1)

        // 새로운 인자로 호출 시 새로운 결과를 반환하는지 확인
        expect(memoizedFn({x: 2}, {y: 1})).toBe(3)

        // 새로운 인자로 호출했으므로 함수가 두 번째로 실행되었는지 확인
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

        // 첫 번째 호출의 결과가 정확한지 확인 (3 * 2 = 6)
        expect(obj.memoizedFn(3)).toBe(6)

        // 같은 인자로 두 번째 호출 시 캐시된 결과를 반환하는지 확인
        expect(obj.memoizedFn(3)).toBe(6)

        // 새로운 인자로 호출 시 새로운 결과를 반환하는지 확인 (4 * 2 = 8)
        expect(obj.memoizedFn(4)).toBe(8)
    })

    test('exposes cache as a property of memoized function', () => {
        const fn = (a: number) => a * 2
        const memoizedFn = memoize(fn)

        memoizedFn(2)

        // 캐시된 값이 정확한지 확인 (2 * 2 = 4)
        const cachedValue = memoizedFn.cache.get(2)
        expect(cachedValue).toBe(4)
    })

    test('throws TypeError for non-function arguments', () => {
        // 함수가 아닌 값을 전달했을 때 TypeError를 던지는지 확인
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        expect(() => memoize(42 as any)).toThrow(TypeError)

        // resolver가 함수가 아닐 때 TypeError를 던지는지 확인
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

        // 첫 번째 호출의 결과가 정확한지 확인
        expect(memoizedFn()).toBe('result')

        // 두 번째 호출 시 캐시된 결과를 반환하는지 확인
        expect(memoizedFn()).toBe('result')

        // 함수가 한 번만 호출되었는지 확인
        expect(callCount).toBe(1)
    })

    test('works with functions that return undefined', () => {
        const fn = vi.fn(() => undefined)
        const memoizedFn = memoize(fn)

        // 첫 번째 호출 시 undefined를 반환하는지 확인
        expect(memoizedFn()).toBeUndefined()

        // 두 번째 호출 시 캐시된 undefined를 반환하는지 확인
        expect(memoizedFn()).toBeUndefined()

        // 함수가 한 번만 호출되었는지 확인 (undefined도 캐시되어야 함)
        expect(fn).toHaveBeenCalledTimes(1)
    })
})
