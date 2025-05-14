import _isMap from 'lodash/isMap'
import {describe, expect, it} from 'vitest'

import {isMap} from './isMap'

describe('isMap function', () => {
    it('should return true for Map instances', () => {
        const map = new Map()
        expect(isMap(map)).toBe(true)
        expect(isMap(map)).toBe(_isMap(map))
    })

    it('should return false for values that are not Map instances', () => {
        expect(isMap({})).toBe(false)
        expect(isMap([])).toBe(false)
        expect(isMap(new Set())).toBe(false)
        expect(isMap(null)).toBe(false)
        expect(isMap(undefined)).toBe(false)
        expect(isMap(21)).toBe(false)
        expect(isMap('string')).toBe(false)
        expect(isMap(false)).toBe(false)
        expect(isMap(Symbol('symbol'))).toBe(false)
    })
})
