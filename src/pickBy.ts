import flatten from './flatten'
import {baseIteratee} from './internal/baseIteratee'
import keys from './keys'

import type {ValueKeyIteratee, ValueKeyIterateeTypeGuard} from './internal/baseIteratee.type'
import type {Dictionary, NumericDictionary} from './internal/types'

export function pickBy<T, S extends T>(
    object: Dictionary<T> | null | undefined,
    predicate: ValueKeyIterateeTypeGuard<T, S>,
): Dictionary<S>
export function pickBy<T, S extends T>(
    object: NumericDictionary<T> | null | undefined,
    predicate: ValueKeyIterateeTypeGuard<T, S>,
): NumericDictionary<S>
export function pickBy<T>(object: Dictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): Dictionary<T>
export function pickBy<T>(
    object: NumericDictionary<T> | null | undefined,
    predicate?: ValueKeyIteratee<T>,
): NumericDictionary<T>
export function pickBy<T extends object>(
    object: T | null | undefined,
    predicate?: ValueKeyIteratee<T[keyof T]>,
): Partial<T>
export function pickBy<T, S extends T = T>(
    object: T | null | undefined,
    predicate: ValueKeyIteratee<T> | ValueKeyIterateeTypeGuard<T, S> = (value) => value,
) {
    if (object == null) {
        return {} as Partial<T>
    }
    const props = flatten(keys(object))
    const iteratee = baseIteratee(predicate)

    var index = -1
    var length = props.length
    var result = {} as Partial<T>

    while (++index < length) {
        var key = props[index]
        var value = object[key as keyof T]

        if (iteratee(value, key, object)) {
            result[key as keyof T] = value
        }
    }
    return result
}

export default pickBy
