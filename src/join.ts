export function join(array: ArrayLike<unknown> | null | undefined, separator?: string): string {
    if (array) {
        return Array.prototype.join.call(array, separator)
    } else {
        return ''
    }
}

export default join
