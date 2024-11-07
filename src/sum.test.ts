import _sum from 'lodash/sum'
import {describe, it, expect} from 'vitest'

import sum from './sum'

describe('sum', () => {
    it('number array check', () => {
        expect(sum([])).toBe(0)
        expect(sum([])).toEqual(_sum([]))
        expect(sum([4, 2, 8, 6])).toBe(20)
        expect(sum([4, 2, 8, 6])).toEqual(_sum([4, 2, 8, 6]))
    })
})
