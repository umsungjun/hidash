import {describe, it, expect, vi} from 'vitest'

import before from './before'

describe('before', () => {
    it('should execute function specified number of times', () => {
        const spy = vi.fn().mockReturnValue('result')
        const limited = before(3, spy)

        expect(limited()).toBe('result')
        expect(limited()).toBe('result')
        expect(limited()).toBe('result')
        expect(spy).toHaveBeenCalledTimes(2)
    })

    it('should maintain last result after limit', () => {
        let counter = 0
        const incrementer = before(3, () => ++counter)

        expect(incrementer()).toBe(1)
        expect(incrementer()).toBe(2)
        expect(incrementer()).toBe(2)
        expect(counter).toBe(2)
    })

    it('should preserve this context', () => {
        const context = {value: 'test'}
        const getFn = before(2, function (this: typeof context) {
            return this.value
        })

        expect(getFn.call(context)).toBe('test')
    })

    it('should throw for non-function arguments', () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        expect(() => before(2, 'not a function' as any)).toThrow('Expected a function')
    })

    it('should handle decimal numbers by flooring them', () => {
        const spy = vi.fn()
        const limited = before(1.9, spy)

        limited()
        expect(spy).toHaveBeenCalledTimes(1)

        limited()
        expect(spy).toHaveBeenCalledTimes(1)
    })
})
