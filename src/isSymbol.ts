export function isSymbol(value: unknown): value is symbol {
    return (
        typeof value === 'symbol' ||
        (typeof value === 'object' && value !== null && Object.prototype.toString.call(value) === '[object Symbol]')
    )
}

export default isSymbol
