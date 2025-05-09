/* eslint-disable @typescript-eslint/no-explicit-any */
import isObject from './isObject'

/**
 * @description
 * Checks if the provided value is a function.
 *
 * @param {unknown} value The value to check
 * @returns {boolean} `true` if the value is a function, `false` otherwise
 */
export function isFunction(value: unknown): value is (...args: any[]) => any {
    if (!isObject(value)) {
        return false
    }
    return typeof value === 'function'
}

export default isFunction
