import {SYMBOL_TAG} from './internal/constants'

export function isSymbol(value: unknown): value is symbol {
    return (
        typeof value === 'symbol' ||
        (typeof value === 'object' && value !== null && Object.prototype.toString.call(value) === SYMBOL_TAG)
    )
}

export default isSymbol
