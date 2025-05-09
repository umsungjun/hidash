import {isArrayLike} from './internal/array'
import {baseIteratee} from './internal/baseIteratee'
import isArray from './isArray'

import type {ListIterator} from './internal/baseIteratee.type'

function arrayMap<T, R>(array: ArrayLike<T> | null | undefined, iteratee: ListIterator<T, R>): R[] {
    if (!array || array.length === 0) {
        return []
    }

    const length = array.length
    const result: R[] = new Array<R>(length)

    for (let index = 0; index < length; index++) {
        result[index] = iteratee(array[index], index, array)
    }

    return result
}

function baseMap<T, R>(array: ArrayLike<T> | null | undefined, iteratee: ListIterator<T, R>): R[] {
    if (!array || array.length === 0) {
        return []
    }

    const length = array.length
    const result: R[] = isArrayLike(array) ? Array(array.length) : []

    for (let index = 0; index < length; index++) {
        result[index] = iteratee(array[index], index, array)
    }

    return result
}

export function map<T, R>(collection: ArrayLike<T> | null | undefined, iteratee: ListIterator<T, R>): R[] {
    const mapper = isArray(collection) ? arrayMap : baseMap
    // ensure type matching
    return mapper(collection, baseIteratee(iteratee))
}

export default map
