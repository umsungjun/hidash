import {List} from './internal/types'

export function uniqBy<T, K>(array: List<T> | null | undefined, iteratee: (value: T) => K): T[] {
    if (!array || !('length' in array)) {
        return []
    }

    const seen = new Map<K, boolean>()
    const result: T[] = []

    for (let i = 0; i < array.length; i++) {
        const value = array[i]
        const computed = iteratee(value)

        if (!seen.has(computed)) {
            seen.set(computed, true)
            result.push(value)
        }
    }

    return result
}

export default uniqBy
