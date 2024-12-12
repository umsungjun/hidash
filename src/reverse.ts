export function reverse<T>(array: T[]): T[] {
    return Array.prototype.reverse.call(array)
}

export default reverse
