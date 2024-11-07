/**
 * @description https://unpkg.com/lodash.sum lodash.sum is only compatible with number arrays
 */
export default function sum(elements: number[]): number {
    let result = 0
    for (const element of elements) {
        result += element
    }
    return result
}
