import {FUNCTION_TAG, WEAK_SET_TAG, WEAK_MAP_TAG} from './internal/to-string-tags'
import isArray from './isArray'

export function cloneDeep<T>(value: T): T {
    const seen = new WeakSet()

    function deepClone<R>(v: R): R {
        const type = Object.prototype.toString.call(v)

        if (type === WEAK_MAP_TAG || type === WEAK_SET_TAG || type === FUNCTION_TAG) {
            return {} as R
        }

        if (v === null || typeof v !== 'object') {
            return v
        }

        if (seen.has(v)) {
            return {} as R
        }
        seen.add(v as object)

        if (isArray(v)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const result: any[] = []
            v.forEach((item) => {
                result.push(deepClone(item))
            })
            return result as unknown as R
        }

        if (v instanceof Map) {
            const result = new Map()
            v.forEach((item, k) => {
                result.set(k, deepClone(item))
            })
            return result as unknown as R
        }

        if (v instanceof Set) {
            const result = new Set()
            v.forEach((item) => {
                result.add(deepClone(item))
            })
            return result as unknown as R
        }

        if (type === '[object Object]') {
            const proto = Object.getPrototypeOf(v)
            const result = Object.create(proto)
            for (const key in v) {
                if (Object.prototype.hasOwnProperty.call(v, key)) {
                    result[key] = deepClone((v as Record<string, unknown>)[key])
                }
            }
            return result as R
        }

        return v
    }

    return deepClone(value)
}

export default cloneDeep
