import {isArrayLike} from './internal/array'
import {MAP_TAG, SET_TAG} from './internal/to-string-tags'

/**
 * @description https://unpkg.com/lodash.size@4.2.0/index.js
 */
export function size(collection: unknown): number {
    if (collection == null) {
        return 0
    }
    if (isArrayLike(collection)) {
        return collection.length
    }

    const type = Object.prototype.toString.call(collection)
    if (type === MAP_TAG || type === SET_TAG) {
        return (collection as Map<unknown, unknown> | Set<unknown>).size
    }

    if (typeof collection === 'object') {
        return Object.keys(collection as object).length
    }
    return 0
}

export default size
