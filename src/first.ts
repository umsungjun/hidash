export function first<T>(array: T[] | null | undefined): T | undefined {
    return array && array.length ? array[0] : undefined
}

export default first
