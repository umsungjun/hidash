/**
 * @description https://unpkg.com/lodash@4.17.21/eq.js
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function eq(value: any, other: any) {
    // eslint-disable-next-line no-self-compare
    return value === other || (value !== value && other !== other)
}

export default eq
