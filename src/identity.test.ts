import lodashIdentity from 'lodash/identity'
import {describe, test, expect} from 'vitest'

import {identity} from './identity'

const testCases = [1, 'test', null, undefined, {a: 1}, [1, 2, 3]] as const

describe('identity', () => {
    test('should return the same value', () => {
        testCases.forEach((value) => {
            expect(identity(value)).toBe(value)
        })
    })
})

describe('identity basic functionality', () => {
    test('should return the same value', () => {
        testCases.forEach((value) => {
            expect(identity(value)).toBe(lodashIdentity(value))
        })
    })
})
