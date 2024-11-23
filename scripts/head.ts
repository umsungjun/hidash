/**
 * @description first === head
 * @see https://unpkg.com/lodash@4.17.21/first.js
 */
export function head<T>(array: T[] | null | undefined): T | undefined {
    return array && array.length ? array[0] : undefined
}

export default head
