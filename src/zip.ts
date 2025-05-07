import type {List} from './internal/types'

/**
 * @description
 * Combines multiple arrays into a single array of grouped elements, where each group contains the elements at the same index from each input array.
 * If the input arrays have different lengths, `undefined` is used for missing values.
 *
 *
 * @param {...List<T>} arrays The arrays to process.
 * @returns {(T | undefined)[][]} An array of grouped elements.
 *
 * @example
 * zip([1, 2], ['a', 'b']) // [[1, 'a'], [2, 'b']]
 * zip([1, 2], ['a']) // [[1, 'a'], [2, undefined]]
 * zip([1, 2], null, [true, false, true]) // [[1, undefined, true], [2, undefined, false], [undefined, undefined, true]]
 * zip() // []
 */
export function zip<T1, T2>(arrays1: List<T1>, arrays2: List<T2>): [T1 | undefined, T2 | undefined][]
export function zip<T1, T2, T3>(
    arrays1: List<T1>,
    arrays2: List<T2>,
    arrays3: List<T3>,
): [T1 | undefined, T2 | undefined, T3 | undefined][]
export function zip<T1, T2, T3, T4>(
    arrays1: List<T1>,
    arrays2: List<T2>,
    arrays3: List<T3>,
    arrays4: List<T4>,
): [T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined][]
export function zip<T1, T2, T3, T4, T5>(
    arrays1: List<T1>,
    arrays2: List<T2>,
    arrays3: List<T3>,
    arrays4: List<T4>,
    arrays5: List<T5>,
): [T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined, T5 | undefined][]
export function zip<T>(...arrays: (List<T> | null | undefined)[]): (T | undefined)[][]
export function zip<T>(...arrays: (List<T> | null | undefined)[]) {
    /**
     * Compared to Lodash, this implementation:
     * - **Single-pass maximum length calculation:** Determines the longest input array in a single loop, avoiding unnecessary intermediate arrays.
     * - **Direct result allocation:** Pre-allocates the result array to the exact required size, reducing dynamic resizing and memory overhead.
     * - **No intermediate array transposition:** Unlike Lodash, which calls `unzip` (transposing arrays after zipping), this implementation directly builds the zipped output row by row, eliminating extra iterations.
     * - **Minimal helper usage:** Implements all logic in a single function without relying on additional utility functions, reducing call stack depth and improving inlining opportunities for JavaScript engines.
     * - **Graceful null/undefined handling:** Supports `null` and `undefined` arrays without extra checks or conversions.
     * - **TypeScript-friendly:** Provides precise tuple typings for up to 5 arrays, enhancing type safety and developer experience.
     */
    const length = arrays.length
    if (length === 0) {
        return []
    }

    let maxLength = 0
    for (let i = 0; i < length; i++) {
        const arr = arrays[i]
        if (arr && arr.length > maxLength) {
            maxLength = arr.length
        }
    }

    const result: (T | undefined)[][] = new Array(maxLength)
    for (let i = 0; i < maxLength; i++) {
        const row: (T | undefined)[] = new Array(length)
        for (let j = 0; j < length; j++) {
            const arr = arrays[j]
            row[j] = arr ? arr[i] : undefined
        }
        result[i] = row
    }

    return result
}

export default zip
