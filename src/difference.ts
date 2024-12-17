export function difference<T>(array: ArrayLike<T> | null | undefined, ...values: ArrayLike<T>[]): T[] {
    if (!array || array.length === 0) {
        return []
    }

    const toExclude = new Set<T>()
    for (let i = 0; i < values.length; i++) {
        const val = values[i]
        for (let j = 0; j < val.length; j++) {
            toExclude.add(val[j])
        }
    }

    const result: T[] = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        if (!toExclude.has(element)) {
            result.push(element)
        }
    }

    return result
}

export default difference
