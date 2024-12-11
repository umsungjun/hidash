export function union<T>(...arrays: (T[] | null | undefined)[]): T[] {
    const result: T[] = []
    const seen = new Map<T, boolean>()

    for (let i = 0; i < arrays.length; i++) {
        const array = arrays[i]
        if (array) {
            for (let j = 0; j < array.length; j++) {
                const item = array[j]
                if (!seen.has(item)) {
                    seen.set(item, true)
                    result.push(item)
                }
            }
        }
    }

    return result
}

export default union
