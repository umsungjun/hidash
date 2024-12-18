type PropertyName = string | number
type PropertyPath = PropertyName | PropertyName[]
type ValueIteratee<T> = ((value: T) => PropertyName) | PropertyPath

type Dictionary<T> = Record<string, T[]>

interface List<T> {
    length: number
    [index: number]: T
}

export function groupBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Dictionary<T>
export function groupBy<T extends object>(
    collection: T | null | undefined,
    iteratee?: ValueIteratee<T[keyof T]>,
): Dictionary<T[keyof T]>
export function groupBy(collection: string | null | undefined, iteratee?: ValueIteratee<string>): Dictionary<string>
export function groupBy(collection: unknown, iteratee?: unknown): Dictionary<unknown> {
    if (collection == null) {
        return {}
    }

    let finalIteratee: (val: unknown) => PropertyName

    if (iteratee == null) {
        finalIteratee = (val: unknown) => val as PropertyName
    } else if (typeof iteratee === 'function') {
        finalIteratee = iteratee as (val: unknown) => PropertyName
    } else {
        const path = Array.isArray(iteratee) ? iteratee : (iteratee as string).split('.')
        finalIteratee = (val: unknown) => {
            let current: unknown = val
            for (const key of path) {
                if (current == null || typeof current !== 'object') {
                    return 'undefined'
                }
                current = (current as Record<string, unknown>)[key]
            }
            return current == null ? 'undefined' : String(current)
        }
    }

    const result: Dictionary<unknown> = {}

    if (typeof collection === 'string') {
        for (let i = 0; i < collection.length; i++) {
            const char = collection[i]
            const key = String(finalIteratee(char))
            if (!result[key]) {
                result[key] = []
            }
            result[key].push(char)
        }
        return result
    }

    if (Array.isArray(collection)) {
        for (const item of collection) {
            const key = String(finalIteratee(item))
            if (!result[key]) {
                result[key] = []
            }
            result[key].push(item)
        }
        return result
    }

    if (typeof collection === 'object') {
        const objKeys = Object.keys(collection as object)
        for (const k of objKeys) {
            const val = (collection as Record<string, unknown>)[k]
            const key = String(finalIteratee(val))
            if (!result[key]) {
                result[key] = []
            }
            result[key].push(val)
        }
        return result
    }

    return {}
}

export default groupBy
