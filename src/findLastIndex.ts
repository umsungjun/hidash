import {baseIteratee} from './internal/baseIteratee'

import type {ListIterateeCustom} from './internal/baseIteratee.type'

/**
 * @description
 * Finds the **last index** of an element in an array that satisfies a given predicate.
 * If no element satisfies the predicate, it returns `-1`.
 *
 * @param {Array<T>} array The array to search
 * @param {ListIterateeCustom<T, unknown>} [predicate] The function invoked per iteration
 * @param {number} [fromIndex] The index to search from (default: `array.length - 1`)
 * @returns {number} The index of the last element that satisfies the predicate, or `-1` if none found
 */
export function findLastIndex<T>(array: T[], predicate?: ListIterateeCustom<T, unknown>, fromIndex?: number): number {
    const length = array.length

    if (!length) {
        return -1
    }

    const from = fromIndex !== undefined ? fromIndex : length - 1
    const startIndex = Math.max(from >= 0 ? from : length + from, 0)

    const iteratee = baseIteratee(predicate)

    let index = startIndex + 1

    while (index--) {
        if (iteratee(array[index], index, array)) {
            return index
        }
    }

    return -1
}

export default findLastIndex
