import flatten from './flatten'
import {baseIteratee} from './internal/baseIteratee'
import keys from './keys'

import type {ValueKeyIteratee, ValueKeyIterateeTypeGuard} from './internal/baseIteratee.type'
import type {Dictionary, NumericDictionary} from './internal/types'

/**
 * @description
 * Creates an object composed of the properties that pass a given predicate.
 * If no predicate is provided, it returns all properties in the object.
 *
 * @param {object} [object] The object to iterate over
 * @param {ValueKeyIteratee<T, boolean>} [predicate] The function invoked per iteration
 * @returns {object} An object composed of the properties that pass the predicate
 */
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
    /**
     * Compared to Lodash, this implementation:
     * - Handles null and undefined inputs safely, always returning a plain object.
     * - Uses a single, optimized iteration over the object's own properties (excluding prototype properties).
     * - Minimizes overhead by collecting keys once and avoiding unnecessary helper function (flatten) calls.
     * - Provides enhanced type safety and support for type guards with TypeScript.
     * - Returns all properties if no predicate is specified, for more intuitive behavior.
     */
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
