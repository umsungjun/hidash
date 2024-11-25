/**
 * @description https://unpkg.com/lodash@4.17.21/isNull.js
 * @param value
 * @returns boolean
 */
export function isNull(value: unknown): value is null {
    return value === null
}

export default isNull
