import isArray from './isArray'
import isString from './isString'
import isSymbol from './isSymbol'

export function toString(value: unknown): string {
    if (value == null) {
        return ''
    }

    if (isString(value)) {
        return value
    }

    if (isArray(value)) {
        if (value.length === 0) {
            return ''
        }
        return (
            value
                /**
                 * @see lodash why this way?
                 */
                .map((item) => (item === null ? 'null' : item === undefined ? 'undefined' : toString(item)))
                .join(',')
        )
    }

    if (isSymbol(value)) {
        return value.toString()
    }

    if (typeof value === 'object') {
        if (typeof value.toString === 'function' && value.toString !== Object.prototype.toString) {
            return value.toString()
        }

        return Object.prototype.toString.call(value)
    }

    if (typeof value === 'number' && Object.is(value, -0)) {
        return '-0'
    }

    return String(value)
}

export default toString
