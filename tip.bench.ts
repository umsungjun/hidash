/* eslint-disable @typescript-eslint/no-unused-vars */
import {bench, describe} from 'vitest'

const SIZES = {
    TINY: 10,
    SMALL: 100,
    MEDIUM: 1000,
    LARGE: 10000,
}

describe('Function creation benchmark with different sizes', () => {
    Object.entries(SIZES).forEach(([size, length]) => {
        const numbers = Array.from({length}, (_, i) => i)
        const double = (n: number) => n * 2

        describe(`Array size: ${size} (${length})`, () => {
            bench('inline function creation', () => {
                numbers.map((n) => n * 2)
            })

            bench('reused function', () => {
                numbers.map(double)
            })
        })
    })
})

describe('Array vs Set operations with different sizes', () => {
    Object.entries(SIZES).forEach(([size, length]) => {
        const array = Array.from({length}, (_, i) => i)
        const set = new Set(array)
        const searchValue = Math.floor(length * 0.9)

        describe(`Size: ${size} (${length})`, () => {
            bench('Array includes', () => {
                array.includes(searchValue)
            })

            bench('Set has', () => {
                set.has(searchValue)
            })

            const duplicatedArray = [...array, ...array.slice(0, length * 0.1)]

            bench('Array unique with filter', () => {
                duplicatedArray.filter((item, index, self) => self.indexOf(item) === index)
            })

            bench('Array unique with Set', () => {
                Array.from(new Set(duplicatedArray))
            })
        })
    })
})

describe('Loop performance with different sizes', () => {
    Object.entries(SIZES).forEach(([size, length]) => {
        const items = Array.from({length}, (_, i) => i)

        describe(`Size: ${size} (${length})`, () => {
            bench('for...of loop', () => {
                let sum = 0
                for (const item of items) {
                    sum += item
                }
            })

            bench('for loop with cached length', () => {
                let sum = 0
                const len = items.length
                for (let i = 0; i < len; i++) {
                    sum += items[i]
                }
            })

            bench('forEach', () => {
                let sum = 0
                items.forEach((item) => {
                    sum += item
                })
            })

            bench('reduce', () => {
                items.reduce((acc, cur) => acc + cur, 0)
            })
        })
    })
})

describe('Map vs Object with different sizes', () => {
    Object.entries(SIZES).forEach(([size, length]) => {
        const keys = Array.from({length}, (_, i) => `key${i}`)

        describe(`Size: ${size} (${length})`, () => {
            bench('Object operations', () => {
                const obj: Record<string, number> = {}
                for (let i = 0; i < length; i++) {
                    const key = keys[i]
                    obj[key] = i
                    const value = obj[key]
                    delete obj[key]
                }
            })

            bench('Map operations', () => {
                const map = new Map<string, number>()
                for (let i = 0; i < length; i++) {
                    const key = keys[i]
                    map.set(key, i)
                    const value = map.get(key)
                    map.delete(key)
                }
            })
        })
    })
})
