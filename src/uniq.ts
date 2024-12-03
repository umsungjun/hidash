import {List} from './internal/types'

export function uniq<T>(array: List<T> | null | undefined): T[] {
    if (!array || !('length' in array)) {
        return []
    }

    const length = array.length

    if (length <= 1) {
        return Array.from(array)
    }

    if (length < 200) {
        return Array.from(new Set(Array.from(array)))
    }

    const seen = new Map<T, boolean>()
    const result: T[] = []

    for (let i = 0; i < length; i++) {
        const value = array[i]

        if (!seen.has(value)) {
            seen.set(value, true)
            result.push(value)
        }
    }

    return result
}

export default uniq
