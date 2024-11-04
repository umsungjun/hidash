import {isArrayLike} from './internal'

const nativeKeys = Object.keys
const isArray = Array.isArray

export function keys(object: unknown): string[] {
    // null/undefined 빠른 처리
    if (object == null) {
        return []
    }

    const obj = Object(object)

    // 순수 배열과 추가 속성이 있는 배열 처리
    if (isArray(obj)) {
        const plainKeys = nativeKeys(obj)
        const len = obj.length

        // 배열 길이와 키 개수가 같으면 추가 속성이 없는 경우
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

        // 추가 속성 채우기
        for (const key of plainKeys) {
            const keyNum = +key
            if (isNaN(keyNum) || keyNum >= len) {
                result[idx++] = key
            }
        }

        return result
    }

    if (isArrayLike(obj)) {
        const plainKeys = nativeKeys(obj)
        const len = obj.length

        if (plainKeys.length === 1 && plainKeys[0] === 'length') {
            const result = new Array(len)
            let idx = 0
            while (idx < len) {
                result[idx] = String(idx++)
            }
            return result
        }

        let extraKeysCount = 0

        for (const key of plainKeys) {
            const keyNum = +key
            if (key !== 'length' && (isNaN(keyNum) || keyNum >= len)) {
                extraKeysCount++
            }
        }

        const result = new Array(len + extraKeysCount)
        let idx = 0

        while (idx < len) {
            result[idx] = String(idx++)
        }

        if (extraKeysCount > 0) {
            for (const key of plainKeys) {
                const keyNum = +key
                if (key !== 'length' && (isNaN(keyNum) || keyNum >= len)) {
                    result[idx++] = key
                }
            }
        }

        return result
    }

    return nativeKeys(obj)
}
