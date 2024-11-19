/* eslint-disable @typescript-eslint/no-explicit-any */
import isObject from './isObject'

export function merge<TObject extends object, TSource extends object>(
    object: TObject,
    ...sources: TSource[]
): TObject & TSource {
    const length = sources.length
    if (!length) {
        return object as TObject & TSource
    }

    function cloneSpecialObject(obj: any): any {
        const type = Object.prototype.toString.call(obj)
        if (type === '[object Date]') {
            return new Date(obj)
        }
        if (type === '[object RegExp]') {
            return new RegExp(obj)
        }
        return obj
    }

    function baseMerge(target: any, source: any): any {
        // 특수 객체 처리
        const sourceType = Object.prototype.toString.call(source)
        if (sourceType === '[object Date]' || sourceType === '[object RegExp]') {
            return cloneSpecialObject(source)
        }

        const targetIsArray = Array.isArray(target)
        const sourceIsArray = Array.isArray(source)

        if (targetIsArray && sourceIsArray) {
            const targetLength = target.length
            const sourceLength = source.length
            const maxLength = Math.max(targetLength, sourceLength)

            if (targetLength < sourceLength) {
                target.length = sourceLength
            }

            for (let i = 0; i < maxLength; i++) {
                if (i in source) {
                    const valueType = Object.prototype.toString.call(source[i])
                    if (valueType === '[object Date]' || valueType === '[object RegExp]') {
                        target[i] = cloneSpecialObject(source[i])
                    } else if (isObject(source[i])) {
                        target[i] = isObject(target[i]) ? target[i] : {}
                        baseMerge(target[i], source[i])
                    } else {
                        target[i] = source[i]
                    }
                }
            }
            return target
        }

        // 객체 처리 최적화
        if (!sourceIsArray && isObject(source)) {
            const keys = Object.keys(source)

            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i]
                const sourceValue = source[key]

                if (sourceValue !== undefined) {
                    const valueType = Object.prototype.toString.call(sourceValue)
                    if (valueType === '[object Date]' || valueType === '[object RegExp]') {
                        target[key] = cloneSpecialObject(sourceValue)
                    } else if (isObject(sourceValue)) {
                        if (!Object.hasOwn(target, key)) {
                            target[key] = {}
                        } else if (!isObject(target[key])) {
                            target[key] = {}
                        }
                        baseMerge(target[key], sourceValue)
                    } else {
                        target[key] = sourceValue
                    }
                }
            }
            return target
        }

        return source
    }

    // sources 순회 처리
    let result = object
    for (let i = 0; i < length; i++) {
        const source = sources[i]
        if (source !== undefined) {
            result = baseMerge(result, source)
        }
    }

    return result as TObject & TSource
}
