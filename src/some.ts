import {isArrayLike} from './internal/array'
import {baseIteratee, type ListIterateeCustom} from './internal/baseIteratee'
import isPlainObject from './isPlainObject'
import keys from './keys'

import type {Collection} from './internal/types'

export function some<T>(
    collection: Collection<T> | null | undefined,
    predicate?: ListIterateeCustom<T, boolean>,
): boolean {
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

        for (let i = 0; i < collection.length; i++) {
            if (iteratee(arrayLike[i], i, arrayLike)) {
                return true
            }
        }
    }

    return false
}

export default some
