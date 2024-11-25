import {STRING_OBJECT_TAG} from './internal/to-string-tags'
import isArray from './isArray'

export function isString(value: unknown) {
    return (
        typeof value === 'string' ||
        (!isArray(value) &&
            typeof value === 'object' &&
            value !== null &&
            Object.prototype.toString.call(value) === STRING_OBJECT_TAG)
    )
}

export default isString
