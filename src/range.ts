import eq from './eq'
import {isArrayLike} from './internal/array'
import isObject from './isObject'

const INFINITY = 1 / 0
const reIsUint = /^(?:0|[1-9]\d*)$/

const baseRange = (start: number, end: number, step: number) => {
    let length = Math.max(Math.ceil((end - start) / (step || 1)), 0)
    const result = Array(length)
    let index = -1

    while (length--) {
        result[++index] = start
        // eslint-disable-next-line no-param-reassign
        start += step
    }
    return result
}

function isIndex(value: number | undefined, length: number) {
    if (value === undefined) {
        return Number.MAX_SAFE_INTEGER
    }
    const type = typeof value
    // eslint-disable-next-line no-param-reassign
    length = length == null ? Number.MAX_SAFE_INTEGER : length

    return (
        !!length &&
        (type === 'number' || (type !== 'symbol' && reIsUint.test(String(value)))) &&
        value > -1 &&
        value % 1 === 0 &&
        value < length
    )
}

function toFinite(value: number) {
    if (!value) {
        return value === 0 ? value : 0
    }
    // eslint-disable-next-line no-param-reassign
    value = Number(value)
    if (value === INFINITY || value === -INFINITY) {
        const sign = value < 0 ? -1 : 1
        return sign * Number.MAX_VALUE
    }
    return value
}

function isIterateeCall(value: number, index: number | undefined, object: Record<string, unknown>) {
    if (!isObject(object)) {
        return false
    }
    if (typeof index === 'undefined') {
        return false
    }
    if (
        typeof index === 'number'
            ? isArrayLike(object) && isIndex(index, object.length)
            : typeof index === 'string' && index in object
    ) {
        return eq(index ? [index] : Symbol('any'), value)
    }
    return false
}

export const range = (start: number, end?: number, step?: number): number[] => {
    if (step && typeof step !== 'number' && isIterateeCall(start, end, step)) {
        // eslint-disable-next-line no-param-reassign
        end = step = undefined
    }
    // Ensure the sign of `-0` is preserved.
    // eslint-disable-next-line no-param-reassign
    start = toFinite(start)
    if (end === undefined) {
        // eslint-disable-next-line no-param-reassign
        end = start
        // eslint-disable-next-line no-param-reassign
        start = 0
    } else {
        // eslint-disable-next-line no-param-reassign
        end = toFinite(end)
    }
    // eslint-disable-next-line no-param-reassign
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step)
    return baseRange(start, end, step)
}

export default range
