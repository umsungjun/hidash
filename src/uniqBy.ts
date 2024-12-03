import {baseIteratee, ListIteratee} from './internal/baseIteratee'
import {List} from './internal/types'

export function uniqBy<T>(array: List<T> | null | undefined, iteratee: ListIteratee<T>): T[] {
    if (!array || !('length' in array)) {
        return []
    }

    const seen = new Map<unknown, boolean>()
    const result: T[] = []
    const iterateeFn = baseIteratee(iteratee)

    for (let i = 0; i < array.length; i++) {
        const value = array[i]
        const computed = iterateeFn(value, i, array)

        if (!seen.has(computed)) {
            seen.set(computed, true)
            result.push(value)
        }
    }

    return result
}

export default uniqBy
