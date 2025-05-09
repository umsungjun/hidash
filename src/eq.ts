/**
 * @see https://unpkg.com/lodash@4.17.21/eq.js
 */
export function eq(value: unknown, other: unknown): boolean {
    // eslint-disable-next-line no-self-compare
    return value === other || (value !== value && other !== other)
}

export default eq
