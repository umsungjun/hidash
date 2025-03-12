/* eslint-disable @typescript-eslint/no-explicit-any */
import _filter from 'lodash/filter'
import {describe, it, expect} from 'vitest'

import {filter} from './filter'

describe('filter', () => {
    // Test case for null or undefined inputs
    it('should return an empty array for null or undefined input', () => {
        expect(filter(null)).toEqual([])
        expect(filter(undefined)).toEqual([])
        expect(_filter(null)).toEqual([])
        expect(_filter(undefined)).toEqual([])
    })

    // Test case for empty collections
    it('should return an empty array for empty collections', () => {
        expect(filter([], () => true)).toEqual([])
        expect(filter({}, () => true)).toEqual([])
        expect(_filter([], () => true)).toEqual([])
        expect(_filter({}, () => true)).toEqual([])
    })

    // Test case for filtering arrays
    it('should filter an array based on the predicate', () => {
        const input = [1, 2, 3, 4, 5, undefined]
        const predicate = (value?: number): value is number => !!value && value % 2 === 0
        expect(filter<number | undefined, number>(input, predicate)).toEqual(_filter(input, predicate))
    })

    // Test case for filtering objects
    it('should filter an object based on the predicate', () => {
        const input = {a: 1, b: 2, c: 3, d: 'juj'} as const
        const predicate = (value: number | string): value is 2 | 3 => typeof value === 'number' && value > 1
        expect(filter<{a: 1; b: 2; c: 3; d: 'juj'}, 2 | 3>(input, predicate)).toEqual(
            _filter<{a: 1; b: 2; c: 3; d: 'juj'}, 2 | 3>(input, predicate),
        )
    })

    // Test case for filtering strings
    it('should filter a string based on the predicate', () => {
        const input = 'hello'
        const predicate = (value: string) => value !== 'e'
        expect(filter(input, predicate)).toEqual(_filter(input, predicate))
    })

    // Edge case: Predicate is not provided
    it('should return the input as an array when predicate is not provided', () => {
        const input = [1, 2, 3]
        expect(filter(input)).toEqual(_filter(input))
    })

    // Edge case: Collection contains falsy values
    it('should handle collections with falsy values correctly', () => {
        const input = [0, false, null, undefined, '', 1, 2]
        const predicate = Boolean
        expect(filter(input, predicate)).toEqual(_filter(input, predicate))
    })

    // Edge case: Complex object structures
    it('should filter arrays of objects based on a property condition', () => {
        const input = [
            {id: 1, active: true},
            {id: 2, active: false},
            {id: 3, active: true},
        ]
        const predicate = (item: {active: boolean}) => item.active
        expect(filter(input, predicate)).toEqual(_filter(input, predicate))
    })

    // Edge case: Non-iterable input
    it('should return an empty array for non-iterable inputs', () => {
        expect(filter(123 as any)).toEqual([])
        expect(_filter(123 as any)).toEqual([])
    })

    // Edge case: String with empty predicate
    it('should return empty array for string input with empty predicate', () => {
        const input = 'abc'
        const predicate = () => false
        expect(filter(input, predicate)).toEqual(_filter(input, predicate))
    })

    // Edge case: Object with undefined values
    it('should handle objects with undefined values correctly', () => {
        const input = {a: undefined, b: 2, c: undefined}
        const predicate = (value: any) => value !== undefined
        expect(filter(input, predicate)).toEqual(_filter(input, predicate))
    })

    // Test case: Large array with multiple conditions
    it('should filter a large array based on a complex condition', () => {
        const input = Array.from({length: 100}, (_, i) => ({id: i, active: i % 3 === 0}))
        const predicate = (item: {id: number; active: boolean}) => item.active && item.id > 50
        expect(filter(input, predicate)).toEqual(_filter(input, predicate))
    })

    // Test case: Nested arrays
    it('should handle nested arrays and filter based on a condition', () => {
        const input = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]
        const predicate = (value: number[]) => value.some((v) => v > 5)
        expect(filter(input, predicate)).toEqual(_filter(input, predicate))
    })

    // Test case: Deeply nested objects
    it('should filter deeply nested objects', () => {
        const input = [
            {id: 1, details: {active: true}},
            {id: 2, details: {active: false}},
            {id: 3, details: {active: true}},
            {id: 4, details: {active: false}},
            {id: 5, details: {active: true}},
        ]
        const predicate = (item: {details: {active: boolean}}) => item.details.active
        expect(filter(input, predicate)).toEqual(_filter(input, predicate))
    })

    // Edge case: Predicate is a value instead of a function
    it('should filter by matching values when predicate is a value', () => {
        const input = [1, 2, 3, 4, 2]
        const predicate = 2
        const customPredicate = (value: any) => value === predicate
        expect(filter(input, customPredicate)).toEqual(_filter(input, customPredicate))

        const inputObj = {a: 1, b: 2, c: 3, d: 2}
        expect(filter(inputObj, customPredicate)).toEqual(_filter(inputObj, customPredicate))
    })
})
