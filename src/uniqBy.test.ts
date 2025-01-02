import _uniqBy from 'lodash/uniqBy'
import {describe, expect, it} from 'vitest'

import {uniqBy} from './uniqBy'

describe('uniqBy', () => {
    describe('should match lodash behavior', () => {
        it('number iteratee', () => {
            const testCases: [number[], (value: number) => number][] = [
                [[2.1, 1.2, 2.3], Math.floor],
                [[1, 2.5, 3, 1.3, 2.7], Math.floor],
                [[-2.1, -1.2, -2.3], Math.abs],
            ]

            testCases.forEach(([array, iteratee]) => {
                expect(uniqBy(array, iteratee)).toEqual(_uniqBy(array, iteratee))
            })
        })

        it('string iteratee', () => {
            interface NamedObject {
                id: number
                name: string
            }

            const namedObjects: [NamedObject[], (obj: NamedObject) => string] = [
                [
                    {id: 1, name: 'a'},
                    {id: 2, name: 'a'},
                    {id: 3, name: 'b'},
                ],
                (obj) => obj.name,
            ]
            expect(uniqBy(...namedObjects)).toEqual(_uniqBy(...namedObjects))

            interface ValueObject {
                x: number
            }

            const valueObjects: [ValueObject[], (obj: ValueObject) => number] = [
                [{x: 1}, {x: 2}, {x: 1}],
                (obj) => obj.x,
            ]
            expect(uniqBy(...valueObjects)).toEqual(_uniqBy(...valueObjects))
        })

        it('complex objects', () => {
            interface UserObject {
                user: {
                    id: number
                    name: string
                }
            }

            const userObjects: [UserObject[], (obj: UserObject) => number] = [
                [{user: {id: 1, name: 'John'}}, {user: {id: 2, name: 'Jane'}}, {user: {id: 1, name: 'Johnny'}}],
                (obj) => obj.user.id,
            ]
            expect(uniqBy(...userObjects)).toEqual(_uniqBy(...userObjects))

            interface DataObject {
                data: readonly number[]
            }

            const dataObjects: [DataObject[], (obj: DataObject) => string] = [
                [{data: [1, 2]}, {data: [2, 3]}, {data: [1, 2]}],
                (obj) => JSON.stringify(obj.data),
            ]
            expect(uniqBy(...dataObjects)).toEqual(_uniqBy(...dataObjects))
        })

        it('edge cases', () => {
            interface NullableNumber {
                value: number | null | undefined
            }

            const nullableTest: [NullableNumber[], (x: NullableNumber) => number | null | undefined] = [
                [{value: null}, {value: undefined}, {value: null}],
                (x) => x.value,
            ]
            expect(uniqBy(...nullableTest)).toEqual(_uniqBy(...nullableTest))

            const nanTest: [number[], (x: number) => number] = [[NaN, NaN, NaN], (x) => x]
            expect(uniqBy(...nanTest)).toEqual(_uniqBy(...nanTest))

            const zeroTest: [number[], (x: number) => number] = [[0, -0, 0], (x) => x]
            expect(uniqBy(...zeroTest)).toEqual(_uniqBy(...zeroTest))

            const nanIterateeTest: [string[], number] = [['a', 'b', 'c'], NaN]
            expect(uniqBy(...nanIterateeTest)).toEqual(_uniqBy(...nanIterateeTest))
        })

        it('array-like objects', () => {
            function testFunc(...args: number[]) {
                expect(uniqBy(args, Math.floor)).toEqual(_uniqBy(args, Math.floor))
            }
            testFunc(1.2, 2.3, 1.8, 2.1)
        })
    })
})
