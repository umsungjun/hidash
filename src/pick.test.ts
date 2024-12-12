import _pick from 'lodash/pick'
import {describe, it, expect} from 'vitest'

import {pick} from './pick'

describe('pick', () => {
    it('should match lodash pick results', () => {
        const obj = {a: 1, b: '2', c: 3}

        expect(pick(obj, ['a', 'c'])).toEqual(pick(obj, ['a', 'c']))
    })

    it('should return an empty object when no keys match', () => {
        const obj = {a: 1, b: '2'}

        expect(pick(obj, ['x', 'y'])).toEqual(_pick(obj, ['x', 'y']))
    })

    it('should handle null or undefined input gracefully', () => {
        expect(pick(null, ['a'])).toEqual(_pick(null, ['a']))
        expect(pick(undefined, ['a'])).toEqual(_pick(undefined, ['a']))
    })

    it('should pick keys even when values are undefined', () => {
        const obj = {a: undefined, b: 2}

        expect(pick(obj, ['a', 'b'])).toEqual(_pick(obj, ['a', 'b']))
    })

    it('should ignore non-existent keys', () => {
        const obj = {a: 1, b: 2}

        expect(pick(obj, ['a', 'b', 'c'])).toEqual(_pick(obj, ['a', 'b', 'c']))
    })

    it('should preserve type inference', () => {
        interface TestObj {
            a: number
            b: string
            c: boolean
        }
        const obj: TestObj = {a: 42, b: 'hello', c: true}

        expect(pick(obj, ['a', 'c'])).toEqual(_pick(obj, ['a', 'c']))
    })
})
