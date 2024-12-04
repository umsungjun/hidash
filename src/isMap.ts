import {MAP_TAG} from './internal/to-string-tags'

export function isMap(value: unknown): value is Map<unknown, unknown> {
    return Object.prototype.toString.call(value) === MAP_TAG
}

export default isMap
