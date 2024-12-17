/**
 * @description https://unpkg.com/lodash@4.17.21/chunk.js
 */
export function chunk<T>(array: T[] | null | undefined, size: number = 1): T[][] {
    if (!array || size < 1) {
        return []
    }

    const absoluteSize = Math.max(Math.floor(size), 1)
    const length = array.length
    const result: T[][] = new Array(Math.ceil(length / absoluteSize))

    let resIndex = 0
    for (let i = 0; i < length; i += absoluteSize) {
        result[resIndex++] = array.slice(i, i + absoluteSize)
    }

    return result
}

export default chunk
