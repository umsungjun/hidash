import {toPairs} from './toPairs'

/**
 * @description
 * Converts a given object, array, or collection into an array of key-value pairs.
 *
 * Exactly the same as `toPairs`, but with a different name. (Alias of `toPairs`)
 *
 * @param {AnyKindOfDictionary<Value> | object | Map<Key, Value> | Set<Value>} [object] The object to convert
 * @returns {[Key, Value][]} An array of key-value pairs
 */
export const entries = toPairs

export default entries
