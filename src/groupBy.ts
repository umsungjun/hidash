type PropertyName = string | number

export function groupBy<T>(
    collection: T[] | null | undefined,
    iteratee: ((value: T) => PropertyName) | keyof NonNullable<T>,
): Record<string, T[]>
export function groupBy<T extends object>(
    collection: T | null | undefined,
    iteratee?: ((value: T[keyof T]) => PropertyName) | keyof T[keyof T],
): Record<string, T[keyof T][]>
export function groupBy(collection: unknown, iteratee: unknown = String): Record<string, unknown[]> {
    if (!collection) {
        return {}
    }

    const result: Record<string, unknown[]> = {}

    if (Array.isArray(collection)) {
        const len = collection.length
        let i = 0

        if (typeof iteratee === 'function') {
            for (; i < len; i++) {
                const item = collection[i]
                const key = item === undefined ? 'undefined' : iteratee(item)
                ;(result[key] || (result[key] = [])).push(item)
            }
            return result
        }

        for (; i < len; i++) {
            const item = collection[i]

            if (item == null) {
                ;(result.undefined || (result.undefined = [])).push(item)
                continue
            }

            const value = (item as Record<string, unknown>)[iteratee as string]
            const key = value == null ? 'undefined' : String(value)
            ;(result[key] || (result[key] = [])).push(item)
        }
        return result
    }

    // 객체 처리
    const entries = Object.entries(collection as object)
    const len = entries.length
    let i = 0

    if (typeof iteratee === 'function') {
        for (; i < len; i++) {
            const item = entries[i][1]
            const key = item === undefined ? 'undefined' : iteratee(item)
            ;(result[key] || (result[key] = [])).push(item)
        }
        return result
    }

    for (; i < len; i++) {
        const item = entries[i][1]

        if (item == null) {
            ;(result.undefined || (result.undefined = [])).push(item)
            continue
        }

        const value = (item as Record<string, unknown>)[iteratee as string]
        const key = value == null ? 'undefined' : String(value)
        ;(result[key] || (result[key] = [])).push(item)
    }

    return result
}

export default groupBy
