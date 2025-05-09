import {isArrayLike} from './internal/array'
import {baseIteratee} from './internal/baseIteratee'
import isPlainObject from './isPlainObject'
import keys from './keys'

import type {ListIterateeCustom, ObjectIterateeCustom} from './internal/baseIteratee.type'
import type {List} from './internal/types'

/**
 * @description
 * Checks if **any** element in a collection satisfies a given predicate.
 * If no predicate is provided, it checks if the collection is empty.
 *
 * This function is similar to `Array.prototype.some` but works with various types of collections.
 *
 * @param {List<T> | object} [collection] The collection to iterate over
 * @param {ListIterateeCustom<T, boolean> | ObjectIterateeCustom<T, boolean>} [predicate] The function invoked per iteration
 * @returns {boolean} `true` if any element satisfies the predicate, `false` otherwise
 */
export function some<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean
export function some<T extends object>(
    collection: T | null | undefined,
    predicate?: ObjectIterateeCustom<T, boolean>,
): boolean
export function some<T>(
    collection: unknown,
    predicate?: ListIterateeCustom<T, boolean> | ObjectIterateeCustom<T, boolean>,
) {
    if (!predicate && keys(collection).length === 0) {
        return false
    }

    const iteratee = baseIteratee<unknown, boolean>(predicate)

    if (isPlainObject(collection)) {
        for (const key in collection) {
            if (
                Object.prototype.hasOwnProperty.call(collection, key) &&
                iteratee(collection[key as keyof typeof collection], 0, [])
            ) {
                return true
            }
        }
    }

    if (isArrayLike(collection)) {
        const arrayLike = collection as ArrayLike<T>

        const collectionLength = collection.length
        for (let i = 0; i < collectionLength; i++) {
            if (iteratee(arrayLike[i], i, arrayLike)) {
                return true
            }
        }
    }

    return false
}

export default some
