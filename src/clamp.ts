/**
 * @description https://unpkg.com/lodash.clamp@4.0.3/index.js
 */
export function clamp(number: number, bounds?: number, upperBound?: number): number {
    const [lowerBound, finalUpperBound] = upperBound === undefined ? [undefined, bounds] : [bounds, upperBound]

    if (isNaN(number)) {
        return NaN
    }

    const lower = lowerBound ?? number
    const upper = finalUpperBound ?? number

    if (isNaN(lower) || isNaN(upper)) {
        return 0
    }

    return Math.min(Math.max(number, lower), upper)
}

export default clamp
