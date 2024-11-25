import {SYMBOL_TAG} from './internal/to-string-tags'

export function isSymbol(value: unknown): value is symbol {
    return (
        typeof value === 'symbol' ||
        (typeof value === 'object' && value !== null && Object.prototype.toString.call(value) === SYMBOL_TAG)
    )
}

export default isSymbol
