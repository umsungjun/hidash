import _before from 'lodash/before'
import {describe, it, expect, vi} from 'vitest'

import before from './before'

describe('before', () => {
    it('should execute function specified number of times (compare with lodash)', () => {
        const spy1 = vi.fn().mockReturnValue('result')
        const spy2 = vi.fn().mockReturnValue('result')
        const limited = before(3, spy1)
        const lodashLimited = _before(3, spy2)

        expect(limited()).toBe(lodashLimited())
        expect(limited()).toBe(lodashLimited())
        expect(limited()).toBe(lodashLimited())
        expect(spy1.mock.calls).toEqual(spy2.mock.calls)
    })

    it('should maintain last result after limit (compare with lodash)', () => {
        let counter1 = 0
        let counter2 = 0
        const incrementer = before(3, () => ++counter1)
        const lodashIncrementer = _before(3, () => ++counter2)

        expect(incrementer()).toBe(lodashIncrementer())
        expect(incrementer()).toBe(lodashIncrementer())
        expect(incrementer()).toBe(lodashIncrementer())
        expect(counter1).toBe(counter2)
    })

    it('should preserve this context (compare with lodash)', () => {
        const context = {value: 'test'}
        const getFn = before(2, function (this: typeof context) {
            return this.value
        })
        const lodashGetFn = _before(2, function (this: typeof context) {
            return this.value
        })

        expect(getFn.call(context)).toBe(lodashGetFn.call(context))
    })

    it('should throw for non-function arguments (compare with lodash)', () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        expect(() => before(2, 'not a function' as any)).toThrow()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        expect(() => _before(2, 'not a function' as any)).toThrow()
    })

    it('should handle decimal numbers by flooring them (compare with lodash)', () => {
        const spy1 = vi.fn()
        const spy2 = vi.fn()
        const limited = before(2.9, spy1)
        const lodashLimited = _before(2.9, spy2)

        limited()
        lodashLimited()
        limited()
        lodashLimited()
        limited()
        lodashLimited()

        expect(spy1.mock.calls).toEqual(spy2.mock.calls)
    })
})
