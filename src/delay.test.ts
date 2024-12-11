import _delay from 'lodash/delay'
import {describe, it, expect, vi, beforeEach, afterAll} from 'vitest'

import delay from './delay'

describe('delay', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    it('should invoke the function after the specified delay', async () => {
        const mockFunc = vi.fn()
        const waitTime = 1000

        delay(mockFunc, waitTime, 'test')

        vi.advanceTimersByTime(waitTime)

        expect(mockFunc).toHaveBeenCalledWith('test')
        expect(mockFunc).toHaveBeenCalledTimes(1)
    })

    it('should behave the same as lodash.delay', async () => {
        const hidashMock = vi.fn()
        const lodashMock = vi.fn()
        const waitTime = 1000

        delay(hidashMock, waitTime, 'test')
        _delay(lodashMock, waitTime, 'test')

        vi.advanceTimersByTime(waitTime)

        expect(hidashMock).toHaveBeenCalledWith('test')
        expect(lodashMock).toHaveBeenCalledWith('test')
        expect(hidashMock).toHaveBeenCalledTimes(1)
        expect(lodashMock).toHaveBeenCalledTimes(1)
    })

    afterAll(() => {
        vi.useRealTimers()
    })
})
