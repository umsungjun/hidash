/**
 * @see https://unpkg.com/browse/lodash.isobject@3.0.2/index.js
 */
export function isObject(value: unknown): value is object {
    const type = typeof value
    return !!value && (type === 'object' || type === 'function')
}

export default isObject
