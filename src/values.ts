import isArray from './isArray'
import isFunction from './isFunction'
import isMap from './isMap'
import {isNull} from './isNull'
import isObject from './isObject'
import isSet from './isSet'
import isString from './isString'

export function values<T>(obj: T): unknown[] {
    if (isNull(obj)) {
        return []
    }

    if (isString(obj)) {
        return [...obj]
    }

    if (isArray(obj)) {
        return [...obj]
    }

    if (isSet(obj) || isMap(obj)) {
        return []
    }

    if (isObject(obj) || isFunction(obj)) {
        return Object.keys(obj).map((key) => (obj as Record<string, unknown>)[key])
    }

    return []
}

export default values
