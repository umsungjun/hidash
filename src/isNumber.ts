import {NUMBER_OBJECT_TAG} from './internal/constants'

export function isNumber(value: unknown): value is number {
    return (
        typeof value === 'number' ||
        (typeof value === 'object' && value !== null && Object.prototype.toString.call(value) === NUMBER_OBJECT_TAG)
    )
}

export default isNumber
