import {isArrayLike} from './internal/array'

const nativeKeys = Object.keys
const isArray = Array.isArray

export function keys(object: unknown): string[] {
    if (object == null) {
        return []
    }

    const obj = Object(object)

    if (isArray(obj)) {
        const plainKeys = nativeKeys(obj)
        const len = obj.length
        if (plainKeys.length === len) {
            const result = new Array(len)
            let idx = 0
            while (idx < len) {
                result[idx] = String(idx++)
            }
            return result
        }
        const result = new Array(plainKeys.length)
        let idx = 0
        while (idx < len) {
            result[idx] = String(idx++)
        }
        for (const key of plainKeys) {
            const keyNum = +key
            if (isNaN(keyNum) || keyNum >= len) {
                result[idx++] = key
            }
        }
        return result
    }

    if (isArrayLike(obj)) {
        return nativeKeys(obj)
    }

    return nativeKeys(obj)
}

export default keys
