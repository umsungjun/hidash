import {baseIteratee} from './internal/baseIteratee'

import type {ListIterateeCustom} from './internal/baseIteratee.type'

/**
 * @description
 * Finds the **index** of the first element in an array that satisfies a given predicate.
 * If no element satisfies the predicate, it returns `-1`.
 *
 * Opposed to `findLastIndex`, this function starts searching from the beginning of the array.
 *
 * @param {Array<T>} array The array to search
 * @param {ListIterateeCustom<T, unknown>} [predicate] The function invoked per iteration
 * @param {number} [fromIndex] The index to search from (default: `0`)
 * @returns {number} The index of the first element that satisfies the predicate, or `-1` if none found
 */
export function findIndex<T>(array: T[], predicate?: ListIterateeCustom<T, unknown>, fromIndex?: number) {
    const length = array.length

    if (!length) {
        return -1
    }

    const from = fromIndex !== undefined ? fromIndex : 0
    const startIndex = Math.max(from >= 0 ? from : length + from, 0)

    const iteratee = baseIteratee(predicate)

    let index = startIndex - 1

    while (++index < length) {
        if (iteratee(array[index], index, array)) {
            return index
        }
    }

    return -1
}

export default findIndex
