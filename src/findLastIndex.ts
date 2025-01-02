import {baseIteratee} from './internal/baseIteratee'

import type {ListIterateeCustom} from './internal/baseIteratee.type'

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
