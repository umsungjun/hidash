import isObject from './isObject'
import isSymbol from './isSymbol'

const reTrimStart = /^\s+/
const reWhitespace = /\s/

function trimmedEndIndex(string: string) {
    let index = string.length

    while (index-- && reWhitespace.test(string.charAt(index))) {
        // nothing to do
    }
    return index
}

function baseTrim(string: string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string
}

const NAN = NaN // Number.isNaN(0/0) true

const reIsBadHex = /^[-+]0x[0-9a-f]+$/i
const reIsBinary = /^0b[01]+$/i
const reIsOctal = /^0o[0-7]+$/i
const freeParseInt = Number.parseInt

function toNumber(value: unknown): number {
    if (typeof value === 'number') {
        return value
    }

    if (typeof value === 'boolean') {
        return value ? 1 : 0
    }

    if (value === null) {
        return 0
    }

    if (value === undefined) {
        return NaN
    }

    if (typeof value === 'string') {
        const trimmedValue = baseTrim(value)

        if (reIsBinary.test(trimmedValue)) {
            return freeParseInt(trimmedValue.slice(2), 2)
        }

        if (reIsOctal.test(trimmedValue)) {
            return freeParseInt(trimmedValue.slice(2), 8)
        }

        if (reIsBadHex.test(trimmedValue)) {
            return NAN
        }

        const result = +trimmedValue
        return isNaN(result) ? NAN : result
    }

    if (isSymbol(value)) {
        return NAN
    }

    if (Array.isArray(value)) {
        if (value.length === 0) {
            return 0
        }
        if (value.length === 1) {
            return toNumber(value[0])
        }
        return NaN
    }

    if (isObject(value)) {
        const primitiveValue = value.valueOf()
        if (typeof primitiveValue === 'number') {
            return primitiveValue
        }

        if (typeof primitiveValue === 'string') {
            return toNumber(primitiveValue)
        }
    }

    return NAN
}

export default toNumber
