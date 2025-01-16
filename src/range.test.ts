import _range from 'lodash/range'
import {describe, test, expect} from 'vitest'

import range from './range'

const lodashOfficialDocumentCases: [number, number | undefined, number | undefined, number[]][] = [
    [4, undefined, undefined, [0, 1, 2, 3]],
    [-4, undefined, undefined, [0, -1, -2, -3]],
    [1, 5, undefined, [1, 2, 3, 4]],
    [0, 20, 5, [0, 5, 10, 15]],
    [0, -4, -1, [0, -1, -2, -3]],
    [1, 4, 0, [1, 1, 1]],
    [0, undefined, undefined, []],
]

describe('basic functionality (lodash official webpage)', () => {
    test.each(lodashOfficialDocumentCases)('range(%i, %s, %s) = %j', (a, b, c, expected) => {
        expect(range(a, b, c)).toStrictEqual(expected)
    })
})

describe('same functionality', () => {
    test.each(lodashOfficialDocumentCases)('range(%i, %s, %s) = %j', (a, b, c) => {
        expect(range(a, b, c)).toStrictEqual(_range(a, b, c))
    })
})
