import {AnyKindOfDictionary} from './internal/types'
import isArray from './isArray'
import isEmpty from './isEmpty'
import isMap from './isMap'
import isPlainObject from './isPlainObject'
import isSet from './isSet'
import isString from './isString'

/**
 * @description
 * Converts a given object, array, or collection into an array of key-value pairs.
 *
 * @param {AnyKindOfDictionary<Value> | object | Map<Key, Value> | Set<Value>} [object] The object to convert
 * @returns {[Key, Value][]} An array of key-value pairs
 *
 * @example
 * toPairs({ a: 1, b: 2 }) // [['a', 1], ['b', 2]]
 * toPairs([1, 2, 3]) // [['0', 1], ['1', 2], ['2', 3]]
 * toPairs(new Map([['a', 1], ['b', 2]])) // [['a', 1], ['b', 2]]
 * toPairs(new Set([1, 2, 3])) // [[1, 1], [2, 2], [3, 3]]
 * toPairs('abc') // [['0', 'a'], ['1', 'b'], ['2', 'c']]
 * toPairs(null) // [], but type error
 */
export function toPairs<Value, Key = Value>(
    object?: AnyKindOfDictionary<Value> | object | Map<Key, Value> | Set<Value>,
): [Key, Value][] {
    /**
     * Compared to Lodash, this implementation:
     * - Directly handles multiple types (object, array, string, Map, Set, null/undefined) in a single optimized function.
     * - Minimizes unnecessary iterations and conversions for better performance.
     * - Uses early returns for empty or nullish values.
     * - Leverages TypeScript for enhanced type safety.
     */
    if (!object) {
        return []
    }

    if (isString(object)) {
        return object.split('').map((char, index) => [String(index) as unknown as Key, char as unknown as Value])
    }

    if (isArray(object)) {
        return object.map((value, index) => [String(index) as unknown as Key, value as Value])
    }

    if (isEmpty(object)) {
        return []
    }

    if (isPlainObject(object)) {
        return Object.entries(object) as [Key, Value][]
    }

    if (isMap(object)) {
        return [...(object as unknown as Map<Key, Value>).entries()]
    }

    if (isSet(object)) {
        return [...(object as unknown as Set<Value>).entries()] as unknown as [Key, Value][]
    }

    return []
}

export default toPairs
