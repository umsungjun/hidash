import isArray from './isArray'

export function isString(value: unknown) {
    return (
        typeof value === 'string' ||
        (!isArray(value) &&
            typeof value === 'object' &&
            value !== null &&
            Object.prototype.toString.call(value) === '[object String]')
    )
}

export default isString
