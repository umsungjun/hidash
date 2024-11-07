/**
 * @description https://unpkg.com/lodash.isarray@4.0.0/index.js
 */
export function isArray(value: unknown): value is unknown[] {
    return Array.isArray(value)
}

export default isArray
