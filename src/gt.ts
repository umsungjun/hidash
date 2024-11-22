import {isNumber} from './isNumber'
import {toNumber} from './toNumber'

export function gt(value: unknown, other: unknown): boolean {
    if (typeof value === 'string' && typeof other === 'string') {
        return value > other
    }

    const v = isNumber(value) ? (value as number) : toNumber(value)
    const o = isNumber(other) ? (other as number) : toNumber(other)

    return v > o
}

export default gt
