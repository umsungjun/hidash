import isArray from './isArray'
import isFunction from './isFunction'
import isMap from './isMap'
import {isNull} from './isNull'
import isObject from './isObject'
import isSet from './isSet'
import isString from './isString'

/**
 * @description
 * Returns an array of the values of the given object.
 *
 * @param {AnyKindOfDictionary<Value> | object | Map<Key, Value> | Set<Value>} [obj] The object to get values from
 * @returns {Value[]} An array of the values of the object
 *
 * @example
 * values({ a: 1, b: 2 }) // [1, 2]
 * values([1, 2, 3]) // [1, 2, 3]
 * values(new Map([['a', 1], ['b', 2]])) // [1, 2]
 * values(new Set([1, 2, 3])) // [1, 2, 3]
 * values('abc') // ['a', 'b', 'c']
 * values(null) // []
 */
export function values<T>(obj: T): unknown[] {
    if (isNull(obj)) {
        return []
    }

    if (isString(obj)) {
        return [...obj]
    }

    if (isArray(obj)) {
        return [...obj]
    }

    if (isSet(obj) || isMap(obj)) {
        return []
    }

    if (isObject(obj) || isFunction(obj)) {
        return Object.keys(obj).map((key) => (obj as Record<string, unknown>)[key])
    }

    return []
}

export default values
