/* eslint-disable no-new-wrappers */
import _isEqual from 'lodash/isEqual'
import {describe, it, expect} from 'vitest'

import {isEqual} from './isEqual'

describe('isEqual', () => {
    it.concurrent.each([
        [1, 1],
        ['abc', 'abc'],
        [true, true],
        [{a: 1}, {a: 1}],
        [
            [1, 2, 3],
            [1, 2, 3],
        ],
        [[{a: 1}], [{a: 1}]],
        [[{person: {name: 'jane'}}], [{person: {name: 'jane'}}]],
        [new String('1'), new String(1)],
        [new Boolean(), new Boolean()],
        [!!1, !!2],
        [{}, {}],
        [NaN, NaN],
        [[], []],
        [null, null],
        [undefined, undefined],
    ])('should be equal %o and %o', (a, b) => {
        expect(isEqual(a, b)).toEqual(_isEqual(a, b))
    })

    it.concurrent.each([
        ['a', 'b'],
        [1, 2],
        [true, false],
        [
            [1, 2, 3],
            [1, 2],
        ],
        [{a: 1}, {b: 1}],
        [{a: 1}, {a: 2}],
        [[{person: {name: 'jane'}}], [{person: {name: 'jane', age: 28}}]],
        [!!1, !!0],
        [new String(1), new String(2)],
    ])('should not be equal %o and %o', (a, b) => {
        expect(isEqual(a, b)).toEqual(_isEqual(a, b))
    })
})
