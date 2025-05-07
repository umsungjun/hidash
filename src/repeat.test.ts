import _repeat from 'lodash/repeat'
import {describe, it, expect} from 'vitest'

import {repeat} from './repeat'

describe('repeat', () => {
    it.concurrent.each([
        ['*', 3],
        ['abc', 2],
        ['abc', 0],
        ['abc', NaN],
        ['abc', Infinity],
        ['abc', -1],
        ['abc', 1.11],
        ['', 3],
        ['abc', Number.MAX_SAFE_INTEGER + 1], // Exceeds max safe integer
    ])('should repeat the string %o given by n = %d', (str, n) => {
        const expected = _repeat(str, n)
        expect(repeat(str, n)).toBe(expected)
    })
})
