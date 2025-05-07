import type {List} from './internal/types'

/**
 * @description
 * Transposes an array of arrays (e.g., the output of `zip`) so that the first array contains the first element of each input array, the second array contains the second element, and so on.
 * If the input arrays have different lengths, missing values are left as `undefined`.
 *
 * @param {T[][] | List<List<T>> | null | undefined} array The array of arrays to transpose.
 * @returns {T[][]} The transposed array.
 *
 * @example
 * unzip([[1, 2], ['a', 'b']]) // [[1, 'a'], [2, 'b']]
 * unzip([[1, 2], ['a']]) // [[1, 'a'], [2, undefined]]
 * unzip(null) // []
 */
export function unzip<T>(array: T[][] | List<List<T>> | null | undefined): T[][] {
    /**
     * Compared to Lodash, this implementation:
     * - **Single-pass maximum length calculation:** Finds the longest inner array in a single loop, avoiding extra passes and intermediate arrays.
     * - **Direct result allocation:** Pre-allocates the output arrays to the exact required size, reducing dynamic resizing and memory overhead.
     * - **No intermediate filtering or mapping:** Unlike Lodash, which uses multiple helpers and array filtering, this implementation transposes the input in-place with minimal logic.
     * - **Minimal helper usage:** All logic is implemented in a single function, reducing call stack depth and enabling better inlining by JavaScript engines.
     * - **Graceful null/undefined handling:** Returns an empty array for `null`, `undefined`, or empty input, without extra checks or conversions.
     * - **TypeScript-friendly:** Provides strong typing for input and output arrays.
     */
    if (!array || array.length === 0) {
        return []
    }

    const length = array.length
    let maxInnerLength = 0

    for (let i = 0; i < length; i++) {
        const innerArray = array[i]
        if (innerArray && innerArray.length > maxInnerLength) {
            maxInnerLength = innerArray.length
        }
    }

    const result: T[][] = new Array(maxInnerLength)

    for (let i = 0; i < maxInnerLength; i++) {
        result[i] = new Array(length)
    }

    for (let i = 0; i < length; i++) {
        const innerArray = array[i]
        if (innerArray) {
            for (let j = 0; j < innerArray.length; j++) {
                result[j][i] = innerArray[j]
            }
        }
    }

    return result
}

export default unzip
