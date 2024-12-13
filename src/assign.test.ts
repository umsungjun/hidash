import _assign from 'lodash/assign'
import {describe, test, expect} from 'vitest'

import assign from './assign'

describe('assign', () => {
    test('should return single object', () => {
        const target = {a: 1}
        expect(assign(target)).toEqual(target)
        expect(assign(target)).toEqual(_assign(target))
    })

    test('should merge properties correctly', () => {
        const target = {a: 1}
        const source = {b: 2}
        const expected = {a: 1, b: 2}

        expect(assign({}, target, source)).toEqual(expected)
        expect(assign({}, target, source)).toEqual(_assign({}, target, source))
    })

    test('should override properties from later sources', () => {
        const target = {a: 1}
        const source1 = {b: 2}
        const source2 = {a: 3}
        const expected = {a: 3, b: 2}

        expect(assign({}, target, source1, source2)).toEqual(expected)
        expect(assign({}, target, source1, source2)).toEqual(_assign({}, target, source1, source2))
    })

    test('should ignore non-enumerable properties', () => {
        const target = {}
        const source = {}
        Object.defineProperty(source, 'hidden', {
            value: 42,
            enumerable: false,
        })
        const expected = {}

        expect(assign({}, target, source)).toEqual(expected)
        expect(assign({}, target, source)).toEqual(_assign({}, target, source))
    })

    test('should handle Symbol properties', () => {
        const target = {}
        const sym = Symbol('test')
        const source = {[sym]: 42}

        expect(assign({}, target, source)).toEqual(_assign({}, target, source))
    })

    test('should throw an error when target is null or undefined', () => {
        expect(assign(null, {a: 1})).toEqual({a: 1})
        expect(assign(null, {a: 1})).toEqual(_assign(null, {a: 1}))
    })

    test('should perform shallow copy', () => {
        const target = {}
        const source = {nested: {a: 1}}
        const result1 = _assign({}, target, source)
        const result2 = assign({}, target, source)

        expect(result1.nested).toBe(source.nested)
        expect(result2.nested).toBe(source.nested)
    })

    test('should handle non-object targets gracefully', () => {
        expect(assign(1, {a: 1})).toEqual(_assign(1, {a: 1}))
        expect(assign(Symbol('test'), {a: 1})).toEqual(_assign(Symbol('test'), {a: 1}))
        expect(assign(false, {a: 1})).toEqual(_assign(false, {a: 1}))
    })

    test('should merge string target with properties', () => {
        const target = 'a'
        const source = {1: 'aaa'}

        expect(assign(target, source)).toEqual(_assign(target, source))
    })

    test('should handle null targets differently', () => {
        const source1 = {}
        const source2 = {1: 'a'}

        expect(assign(null, source1, source2)).toEqual(_assign(null, source1, source2))
    })

    test('should merge multiple sources correctly', () => {
        const target = {name: 'juj'}
        const source1 = {age: 30}
        const source2 = {addr: 'Seoul'}
        const expected = {name: 'juj', age: 30, addr: 'Seoul'}

        expect(assign(target, source1, source2)).toEqual(expected)
        expect(assign(target, source1, source2)).toEqual(_assign(target, source1, source2))
    })

    test('should handle Symbol keys in target and sources', () => {
        const sym = Symbol('key')
        const target = {name: 'juj', [sym]: 'a'}
        const source = {age: 30}
        const expected = {name: 'juj', age: 30, [sym]: 'a'}

        expect(assign(target, source)).toEqual(expected)
        expect(assign(target, source)).toEqual(_assign(target, source))
    })

    test('should handle array and mixed sources', () => {
        const target = []
        const source1 = [1, 2, 3]
        const source2 = {apple: 'yammy'}
        const source3 = Symbol(1)

        expect(assign(target, source1, source2, source3)).toEqual(_assign(target, source1, source2, source3))
    })
})
