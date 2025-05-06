import _before from 'lodash/before'
import {bench, describe} from 'vitest'

import before from './before'

const add = (a: number, b: number) => a + b

const ITERATIONS = 1000

describe('before performance', () => {
    bench('hidash', () => {
        const beforeFn = before(1000, add)

        for (let i = 0; i < ITERATIONS; i++) {
            beforeFn(1, 2)
        }
    })

    bench('lodash', () => {
        const beforeFn = _before(1000, add)

        for (let i = 0; i < ITERATIONS; i++) {
            beforeFn(1, 2)
        }
    })
})
