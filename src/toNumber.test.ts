import _toNumber from 'lodash/toNumber'
import {describe, it, expect} from 'vitest'

import toNumber from './toNumber'

describe('toNumber function (comparison with lodash)', () => {
    it('matches lodash for numeric values', () => {
        expect(toNumber(42)).toBe(_toNumber(42))
        expect(toNumber(-42.5)).toBe(_toNumber(-42.5))
        expect(toNumber(Infinity)).toBe(_toNumber(Infinity))
        expect(toNumber(-Infinity)).toBe(_toNumber(-Infinity))
        expect(toNumber(0)).toBe(_toNumber(0))
    })

    it('matches lodash for numeric strings', () => {
        expect(toNumber('42')).toBe(_toNumber('42'))
        expect(toNumber('-42.5')).toBe(_toNumber('-42.5'))
        expect(toNumber('0')).toBe(_toNumber('0'))
        expect(toNumber('Infinity')).toBe(_toNumber('Infinity'))
        expect(toNumber('-Infinity')).toBe(_toNumber('-Infinity'))
    })

    it('matches lodash for strings with spaces', () => {
        expect(toNumber('  42  ')).toBe(_toNumber('  42  '))
        expect(toNumber('   -42.5   ')).toBe(_toNumber('   -42.5   '))
        expect(toNumber('   0   ')).toBe(_toNumber('   0   '))
    })

    it('matches lodash for invalid strings', () => {
        expect(toNumber('not a number')).toBe(_toNumber('not a number'))
        expect(toNumber('123abc')).toBe(_toNumber('123abc'))
        expect(toNumber('abc123')).toBe(_toNumber('abc123'))
    })

    it('matches lodash for binary, octal, and hex strings', () => {
        expect(toNumber('0b101')).toBe(_toNumber('0b101'))
        expect(toNumber('0o7')).toBe(_toNumber('0o7'))
        expect(toNumber('0xA')).toBe(_toNumber('0xA'))
    })

    it('matches lodash for invalid binary, octal, and hex strings', () => {
        expect(toNumber('0b102')).toBe(_toNumber('0b102'))
        expect(toNumber('0o8')).toBe(_toNumber('0o8'))
        expect(toNumber('0xG')).toBe(_toNumber('0xG'))
    })

    it('matches lodash for symbols', () => {
        const sym = Symbol('it')
        expect(toNumber(sym)).toBe(_toNumber(sym))
    })

    it('matches lodash for objects with valueOf method', () => {
        const obj = {
            valueOf: () => 42,
        }
        expect(toNumber(obj)).toBe(_toNumber(obj))
    })

    it('matches lodash for objects without valueOf method', () => {
        const obj = {key: 'value'}
        expect(toNumber(obj)).toBe(_toNumber(obj))
    })

    it('matches lodash for null and undefined', () => {
        expect(toNumber(null)).toBe(_toNumber(null))
        expect(toNumber(undefined)).toBe(_toNumber(undefined))
    })

    it('matches lodash for boolean values', () => {
        expect(toNumber(true)).toBe(_toNumber(true))
        expect(toNumber(false)).toBe(_toNumber(false))
    })

    it('matches lodash for empty and whitespace strings', () => {
        expect(toNumber('')).toBe(_toNumber(''))
        expect(toNumber('   ')).toBe(_toNumber('   '))
    })

    it('matches lodash for arrays and array-like objects', () => {
        expect(toNumber([])).toBe(_toNumber([]))
        expect(toNumber(['42'])).toBe(_toNumber(['42']))
        expect(toNumber([42])).toBe(_toNumber([42]))
        expect(toNumber([1, 2])).toBe(_toNumber([1, 2]))
    })

    it('matches lodash for very large numbers', () => {
        expect(toNumber('1e308')).toBe(_toNumber('1e308'))
        expect(toNumber('1e-308')).toBe(_toNumber('1e-308'))
        expect(toNumber('1e309')).toBe(_toNumber('1e309'))
    })
})
