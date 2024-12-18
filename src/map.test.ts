import _map from 'lodash/map'
import {describe, it, expect} from 'vitest'

import map from './map'

describe('map function tests', () => {
    it('should return the same result as lodash for an array of numbers', () => {
        const input = [1, 2, 3, 4]
        const iteratee = (x: number) => x * 2
        const result = map(input, iteratee)
        const expected = _map(input, iteratee)
        expect(result).toEqual(expected)
    })

    it('should return the same result as lodash for an array of strings', () => {
        const input = ['a', 'b', 'c']
        const iteratee = (x: string) => x.toUpperCase()
        const result = map(input, iteratee)
        const expected = _map(input, iteratee)
        expect(result).toEqual(expected)
    })

    it('should return the same result as lodash for an array with mixed types', () => {
        const input = [true, false, null, undefined]
        const iteratee = (x: unknown) => !!x
        const result = map(input, iteratee)
        const expected = _map(input, iteratee)
        expect(result).toEqual(expected)
    })

    it('should return the same result as lodash for an array of objects', () => {
        const input = [{a: 1}, {b: 2}]
        const iteratee = (x: object) => JSON.stringify(x)
        const result = map(input, iteratee)
        const expected = _map(input, iteratee)
        expect(result).toEqual(expected)
    })

    it('should return the same result as lodash for a large array of numbers', () => {
        const input = Array.from({length: 100}, (_, i) => i)
        const iteratee = (x: number) => x + 1
        const result = map(input, iteratee)
        const expected = _map(input, iteratee)
        expect(result).toEqual(expected)
    })

    it('should return the same result as lodash for an array from a string', () => {
        const input = Array.from('benchmark')
        const iteratee = (x: string) => `${x}_test`
        const result = map(input, iteratee)
        const expected = _map(input, iteratee)
        expect(result).toEqual(expected)
    })

    it('should return the same result as lodash for null input', () => {
        const input = null
        const iteratee = (x: unknown) => x
        const result = map(input, iteratee)
        const expected = _map(input, iteratee)
        expect(result).toEqual(expected)
    })

    it('should return the same result as lodash for undefined input', () => {
        const input = undefined
        const iteratee = (x: unknown) => x
        const result = map(input, iteratee)
        const expected = _map(input, iteratee)
        expect(result).toEqual(expected)
    })

    it('should return the same result as lodash for an empty array', () => {
        const input = []
        const iteratee = (x: unknown) => x
        const result = map(input, iteratee)
        const expected = _map(input, iteratee)
        expect(result).toEqual(expected)
    })
})
