import _shuffle from 'lodash/shuffle'
import {describe, test, expect} from 'vitest'

import shuffle from './shuffle'

describe('shuffle function', () => {
    test('returns empty array for null and undefined', () => {
        expect(shuffle(null)).toEqual([])
        expect(shuffle(undefined)).toEqual([])
    })

    test('returns shuffled array for arrays', () => {
        const original = [1, 2, 3, 4, 5]
        const shuffled = shuffle(original)

        expect(shuffled.length).toBe(original.length)

        original.forEach((item) => {
            expect(shuffled).toContain(item)
        })

        expect(original).toEqual([1, 2, 3, 4, 5])

        const uniqueItems = new Set(shuffled)
        expect(uniqueItems.size).toBe(shuffled.length)
    })

    test('returns shuffled array for strings', () => {
        const original = 'hello'
        const shuffled = shuffle(original)

        expect(shuffled.length).toBe(original.length)
        original.split('').forEach((char) => {
            expect(shuffled).toContain(char)
        })
    })

    test('returns shuffled array for objects', () => {
        const original = {a: 1, b: 2, c: 3}
        const shuffled = shuffle(original)
        const values = Object.values(original)

        expect(shuffled.length).toBe(values.length)
        values.forEach((value) => {
            expect(shuffled).toContain(value)
        })
    })

    test('returns shuffled array for Map', () => {
        const map = new Map([
            ['a', 1],
            ['b', 2],
        ])
        const shuffled = shuffle(map)
        const entries = Array.from(map.entries())

        expect(shuffled.length).toBe(entries.length * 2)
        entries.forEach(([key, value]) => {
            expect(shuffled).toContain(key)
            expect(shuffled).toContain(value)
        })
    })

    test('returns shuffled array for Set', () => {
        const set = new Set([1, 2, 3])
        const shuffled = shuffle(set)
        const values = Array.from(set.values())

        expect(shuffled.length).toBe(values.length)
        values.forEach((value) => {
            expect(shuffled).toContain(value)
        })
    })

    test('shuffling produces different orders', () => {
        const original = Array.from({length: 100}, (_, i) => i)
        const shuffled1 = shuffle(original)
        const shuffled2 = shuffle(original)
        const shuffled3 = shuffle(original)

        // 세 번의 셔플 결과가 모두 다른지 확인
        // (매우 낮은 확률로 실패할 수 있음)
        expect(
            shuffled1.join(',') !== shuffled2.join(',') ||
                shuffled2.join(',') !== shuffled3.join(',') ||
                shuffled3.join(',') !== shuffled1.join(','),
        ).toBe(true)
    })

    test('handles empty collections', () => {
        expect(shuffle([])).toEqual([])
        expect(shuffle('')).toEqual([])
        expect(shuffle({})).toEqual([])
        expect(shuffle(new Map())).toEqual([])
        expect(shuffle(new Set())).toEqual([])
    })

    test('handles single-element collections', () => {
        expect(shuffle([1])).toEqual([1])
        expect(shuffle('a')).toEqual(['a'])
        expect(shuffle({a: 1})).toEqual([1])
    })

    test('maintains value equality but not reference equality', () => {
        const original = [{id: 1}, {id: 2}]
        const shuffled = shuffle(original)

        expect(shuffled).not.toBe(original) // 참조가 다른지 확인
        expect(shuffled.length).toBe(original.length)
        original.forEach((item) => {
            expect(shuffled).toContainEqual(item)
        })
    })

    test('handles large arrays', () => {
        const largeArray = Array.from({length: 10000}, (_, i) => i)
        const shuffled = shuffle(largeArray)

        expect(shuffled.length).toBe(largeArray.length)
        expect(new Set(shuffled).size).toBe(largeArray.length)
        expect(shuffled.sort((a, b) => a - b)).toEqual(largeArray)
    })

    test('returns empty array for functions', () => {
        expect(shuffle(() => {})).toEqual([])
        expect(shuffle(function () {})).toEqual([])
    })

    test('handles array-like objects', () => {
        const arrayLike = {length: 3, 0: 'a', 1: 'b', 2: 'c'}
        const shuffled = shuffle(arrayLike)

        expect(shuffled.length).toBe(3)
        expect(shuffled).toContain('a')
        expect(shuffled).toContain('b')
        expect(shuffled).toContain('c')
    })
})
