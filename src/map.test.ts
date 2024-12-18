import _map from 'lodash/map'
import {describe, it, expect} from 'vitest'

import map from './map'

// 테스트 데이터
const array = [1, 2, 3, 4]
const arrayLike = {0: 'a', 1: 'b', 2: 'c', length: 3}
const emptyArray = []
const nullInput = null

// 테스트 함수
const iteratee = (value: number) => value * 2
const iterateeString = (value: string) => value.toUpperCase()

describe('map function tests', () => {
    it('should map over an array', () => {
        const result = map(array, iteratee)
        const expected = _map(array, iteratee)
        expect(result).toEqual(expected)
    })

    it('should map over an array-like object', () => {
        const result = map(arrayLike, iterateeString)
        const expected = _map(arrayLike, iterateeString)
        expect(result).toEqual(expected)
    })

    it('should handle an empty array', () => {
        const result = map(emptyArray, iteratee)
        const expected = _map(emptyArray, iteratee)
        expect(result).toEqual(expected)
    })

    it('should return an empty array for null input', () => {
        const result = map(nullInput, iteratee)
        const expected = _map(nullInput, iteratee)
        expect(result).toEqual(expected)
    })

    it('should work with complex iteratees', () => {
        const complexIteratee = (value: number, index: number) => value + index
        const result = map(array, complexIteratee)
        const expected = _map(array, complexIteratee)
        expect(result).toEqual(expected)
    })
})
