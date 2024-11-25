/* eslint-disable @typescript-eslint/no-explicit-any */
import isObject from './isObject'

export function isFunction(value: unknown): value is (...args: any[]) => any {
    if (!isObject(value)) {
        return false
    }
    return typeof value === 'function'
}

export default isFunction
