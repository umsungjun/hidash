import {MAP_TAG} from './internal/to-string-tags'

/**
 * @description
 * Checks if the provided value is a `Map` object.
 *
 * @param {unknown} value The value to check
 * @returns {boolean} `true` if the value is a `Map`, `false` otherwise
 */
export function isMap(value: unknown): value is Map<unknown, unknown> {
    return Object.prototype.toString.call(value) === MAP_TAG
}

export default isMap
