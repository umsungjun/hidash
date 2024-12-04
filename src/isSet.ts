import {SET_TAG} from './internal/to-string-tags'

export function isSet(value: unknown): value is Set<unknown> {
    return Object.prototype.toString.call(value) === SET_TAG
}

export default isSet
