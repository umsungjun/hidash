export function uniqWith<T>(array: T[] | null | undefined, comparator?: (a: T, b: T) => boolean): T[] {
    if (!array || !array.length) {
        return []
    }

    const result: T[] = []
    const seen = new Set<T>()

    for (let i = array.length - 1; i >= 0; i--) {
        const value = array[i]
        let isDuplicate = false

        for (const seenValue of seen) {
            if (comparator ? comparator(value, seenValue) : value === seenValue) {
                isDuplicate = true
                break
            }
        }

        if (!isDuplicate) {
            seen.add(value)
            result.unshift(value)
        }
    }

    return result
}

export default uniqWith
