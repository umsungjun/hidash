export function last<T>(array: T[] | null | undefined): T | undefined {
    return array && array.length ? array[array.length - 1] : undefined
}

export default last
