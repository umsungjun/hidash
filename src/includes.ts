import type {PropertyName} from './internal/baseIteratee.type'
import type {Dictionary, NumericDictionary} from './internal/types'

export function includes<T>(
    collection: Dictionary<T> | NumericDictionary<T> | null | undefined,
    target: T,
    fromIndex?: number,
): boolean {
    if (!collection) {
        return false
    }

    const values = Object.values(collection as Record<PropertyName, T>)
    const length = values.length

    if (length === 0) {
        return false
    }

    const start = fromIndex ? (fromIndex < 0 ? Math.max(length + fromIndex, 0) : fromIndex) : 0
    if (start >= length) {
        return false
    }

    for (let i = start; i < length; i++) {
        if (values[i] === target) {
            return true
        }
    }

    return false
}

export default includes
