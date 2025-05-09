import {SET_TAG} from './internal/to-string-tags'

/**
 * @description
 * Checks if the provided value is a `Set` object.
 *
 * @param {unknown} value The value to check
 * @returns {boolean} `true` if the value is a `Set`, `false` otherwise
 */
export function isSet(value: unknown): value is Set<unknown> {
    return Object.prototype.toString.call(value) === SET_TAG
}

export default isSet
