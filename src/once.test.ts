import {describe, it, expect, vi} from 'vitest'

import once from './once'

describe('once', () => {
    it('should execute function only once', () => {
        const spy = vi.fn().mockReturnValue('result')
        const limited = once(spy)

        expect(limited()).toBe('result')
        expect(limited()).toBe('result')
        expect(limited()).toBe('result')
        expect(spy).toHaveBeenCalledTimes(1)
    })

    it('should preserve first result', () => {
        let counter = 0
        const incrementer = once(() => ++counter)

        expect(incrementer()).toBe(1)
        expect(incrementer()).toBe(1)
        expect(incrementer()).toBe(1)
        expect(counter).toBe(1)
    })

    it('should preserve this context', () => {
        const context = {value: 'test'}
        const getFn = once(function (this: typeof context) {
            return this.value
        })

        expect(getFn.call(context)).toBe('test')
        expect(getFn.call({value: 'changed'})).toBe('test')
    })

    it('should preserve arguments from first call', () => {
        const spy = vi.fn()
        const limited = once(spy)

        limited(1, 'test')
        limited(2, 'other')
        limited(3, 'another')

        expect(spy).toHaveBeenCalledTimes(1)
        expect(spy).toHaveBeenCalledWith(1, 'test')
    })

    it('should handle async functions', async () => {
        const asyncFn = vi.fn().mockResolvedValue('result')
        const limited = once(asyncFn)

        const result1 = await limited()
        const result2 = await limited()

        expect(result1).toBe('result')
        expect(result2).toBe('result')
        expect(asyncFn).toHaveBeenCalledTimes(1)
    })
})
