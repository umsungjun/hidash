import _shuffle from 'lodash/shuffle'
import {bench, describe} from 'vitest'

import shuffle from './shuffle'

const ITERATIONS = 1000

describe('shuffle performance', () => {
    describe('edge cases', () => {
        const edgeCases = [null, undefined, '', {}]

        bench('hidash shuffle', () => {
            for (let i = 0; i < ITERATIONS; i++) {
                edgeCases.forEach((testCase) => {
                    shuffle(testCase)
                })
            }
        })

        bench('lodash shuffle', () => {
            for (let i = 0; i < ITERATIONS; i++) {
                edgeCases.forEach((testCase) => {
                    _shuffle(testCase)
                })
            }
        })
    })

    describe('small arrays', () => {
        const arrays = [[], [1], [1, 2, 3], Array(10).fill(0)]

        bench('hidash shuffle', () => {
            for (let i = 0; i < ITERATIONS; i++) {
                arrays.forEach((testCase) => {
                    shuffle(testCase)
                })
            }
        })

        bench('lodash shuffle', () => {
            for (let i = 0; i < ITERATIONS; i++) {
                arrays.forEach((testCase) => {
                    _shuffle(testCase)
                })
            }
        })
    })

    describe('strings', () => {
        const strings = ['hello', '한글테스트', 'a'.repeat(100)]

        bench('hidash shuffle', () => {
            for (let i = 0; i < ITERATIONS; i++) {
                strings.forEach((testCase) => {
                    shuffle(testCase)
                })
            }
        })

        bench('lodash shuffle', () => {
            for (let i = 0; i < ITERATIONS; i++) {
                strings.forEach((testCase) => {
                    _shuffle(testCase)
                })
            }
        })
    })

    describe('objects', () => {
        const objects = [
            {a: 1, b: 2},
            Object.fromEntries(Array.from({length: 10}, (_, i) => [`key${i}`, i])),
            {length: 3, 0: 'a', 1: 'b', 2: 'c'},
        ]

        bench('hidash shuffle', () => {
            for (let i = 0; i < ITERATIONS; i++) {
                objects.forEach((testCase) => {
                    shuffle(testCase)
                })
            }
        })

        bench('lodash shuffle', () => {
            for (let i = 0; i < ITERATIONS; i++) {
                objects.forEach((testCase) => {
                    _shuffle(testCase)
                })
            }
        })
    })

    describe('Maps and Sets', () => {
        const collections = [
            new Map([
                ['a', 1],
                ['b', 2],
            ]),
            new Map(Array.from({length: 10}, (_, i) => [`key${i}`, i])),
            new Set([1, 2, 3]),
            new Set(Array.from({length: 10}, (_, i) => i)),
        ]

        bench('hidash shuffle', () => {
            for (let i = 0; i < ITERATIONS; i++) {
                collections.forEach((testCase) => {
                    shuffle(testCase)
                })
            }
        })

        bench('lodash shuffle', () => {
            for (let i = 0; i < ITERATIONS; i++) {
                collections.forEach((testCase) => {
                    _shuffle(testCase)
                })
            }
        })
    })

    describe('large collections', () => {
        const largeCollections = [
            Array.from({length: 10000}, (_, i) => i),
            'x'.repeat(10000),
            new Map(Array.from({length: 1000}, (_, i) => [`key${i}`, i])),
            new Set(Array.from({length: 1000}, (_, i) => i)),
            Object.fromEntries(Array.from({length: 1000}, (_, i) => [`key${i}`, i])),
        ]

        bench('hidash shuffle', () => {
            for (let i = 0; i < ITERATIONS; i++) {
                largeCollections.forEach((testCase) => {
                    shuffle(testCase)
                })
            }
        })

        bench('lodash shuffle', () => {
            for (let i = 0; i < ITERATIONS; i++) {
                largeCollections.forEach((testCase) => {
                    _shuffle(testCase)
                })
            }
        })
    })

    describe('array-like objects', () => {
        const arrayLikes = [
            {length: 3, 0: 'a', 1: 'b', 2: 'c'},
            {length: 100, ...Array.from({length: 100}, (_, i) => [i, `value${i}`])},
        ]

        bench('hidash shuffle', () => {
            for (let i = 0; i < ITERATIONS; i++) {
                arrayLikes.forEach((testCase) => {
                    shuffle(testCase)
                })
            }
        })

        bench('lodash shuffle', () => {
            for (let i = 0; i < ITERATIONS; i++) {
                arrayLikes.forEach((testCase) => {
                    _shuffle(testCase)
                })
            }
        })
    })
})
