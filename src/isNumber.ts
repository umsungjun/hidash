export function isNumber(value: unknown): value is number {
    return (
        typeof value === 'number' ||
        (typeof value === 'object' && value !== null && Object.prototype.toString.call(value) === '[object Number]')
    )
}

export default isNumber
