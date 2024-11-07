import _sumBy from 'lodash/sumBy'
import {describe, it, expect} from 'vitest'

import sumBy from './sumBy'

describe('sumBy', () => {
    const elementOneDepth = [{n: 2}, {n: 4}, {n: 6}, {n: 8}]
    const elementTwoDepth = [{n: {m: 2}}, {n: {m: 4}}, {n: {m: 6}}, {n: {m: 8}}]

    it('sumBy by function ', () => {
        expect(
            sumBy(elementOneDepth, function ({n}) {
                return n
            }),
        ).toBe(20)

        expect(
            sumBy(elementOneDepth, function ({n}) {
                return n
            }),
        ).toBe(
            _sumBy(elementOneDepth, function ({n}) {
                return n
            }),
        )

        expect(
            sumBy(elementTwoDepth, function ({n: {m}}) {
                return m
            }),
        ).toBe(20)

        expect(
            sumBy(elementTwoDepth, function ({n: {m}}) {
                return m
            }),
        ).toBe(
            _sumBy(elementTwoDepth, function ({n: {m}}) {
                return m
            }),
        )
    })

    it('sumBy by string', () => {
        expect(sumBy(elementOneDepth, 'n')).toBe(20)
        expect(sumBy(elementOneDepth, 'n')).toBe(_sumBy(elementOneDepth, 'n'))
        expect(sumBy(elementTwoDepth, 'n.m')).toBe(20)
        expect(sumBy(elementTwoDepth, 'n.m')).toBe(_sumBy(elementTwoDepth, 'n.m'))
    })
})
