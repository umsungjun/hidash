/**
 * @description https://unpkg.com/lodash@4.17.21/isNull.js
 * @param value
 * @returns boolean
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isNull(value: any): value is null {
    return value === null
}

export default isNull
