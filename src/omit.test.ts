import _omit from 'lodash/omit'
import {describe, it, expect} from 'vitest'

import omit from './omit'

describe('omit', () => {
    it('should match lodash omit behavior with basic objects', () => {
        const obj = {a: 1, b: '2', c: 3}

        expect(omit(obj, 'a', 'c')).toEqual(_omit(obj, 'a', 'c'))
        expect(omit(obj, 'b')).toEqual(_omit(obj, 'b'))
        expect(omit(obj)).toEqual(_omit(obj))
    })

    it('should handle nested objects', () => {
        const obj = {
            a: {b: 2, c: 3},
            d: 4,
            e: {f: 5},
        }

        expect(omit(obj, 'a', 'e')).toEqual(_omit(obj, 'a', 'e'))
        expect(omit(obj, 'd')).toEqual(_omit(obj, 'd'))
    })

    it('should handle null/undefined input', () => {
        expect(omit(null, 'a')).toEqual(_omit(null, 'a'))
        expect(omit(undefined, 'a')).toEqual(_omit(undefined, 'a'))
    })

    it('should handle array paths', () => {
        const obj = {a: 1, b: 2, c: 3, d: 4}

        expect(omit(obj, ['a', 'b'])).toEqual(_omit(obj, ['a', 'b']))
        expect(omit(obj, ['b', 'd'])).toEqual(_omit(obj, ['b', 'd']))
    })

    it('should handle symbol keys', () => {
        const sym = Symbol('test')
        const obj = {[sym]: 1, b: 2}

        expect(omit(obj, sym)).toEqual(_omit(obj, sym))
    })
})
