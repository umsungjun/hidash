/* eslint-disable @typescript-eslint/no-explicit-any */
import isObject from './isObject'

const toString = Object.prototype.toString
const getType = toString.call.bind(toString)

const DATE_TYPE = '[object Date]'
const REGEXP_TYPE = '[object RegExp]'

export function merge<TObject extends object, TSource extends object>(
    object: TObject,
    ...sources: TSource[]
): TObject & TSource {
    const length = sources.length
    if (!length) {
        return object as TObject & TSource
    }

    function cloneSpecialObject(obj: any, type: string): any {
        return type === DATE_TYPE ? new Date(obj) : new RegExp(obj)
    }

    function baseMerge(target: any, source: any): any {
        if (source === null || source === undefined) {
            return target
        }

        const sourceType = getType(source)
        if (sourceType === DATE_TYPE || sourceType === REGEXP_TYPE) {
            return cloneSpecialObject(source, sourceType)
        }

        if (Array.isArray(source)) {
            const targetIsArray = Array.isArray(target)
            if (!targetIsArray) {
                return source.slice()
            }

            const sourceLength = source.length

            if (target.length < sourceLength) {
                target.length = sourceLength
            }

            for (let i = 0; i < sourceLength; i++) {
                if (i in source) {
                    const value = source[i]
                    if (value === null || value === undefined) {
                        target[i] = value
                        continue
                    }

                    const valueType = getType(value)
                    target[i] =
                        valueType === DATE_TYPE || valueType === REGEXP_TYPE
                            ? cloneSpecialObject(value, valueType)
                            : isObject(value)
                            ? baseMerge(isObject(target[i]) ? target[i] : {}, value)
                            : value
                }
            }
            return target
        }

        if (isObject(source)) {
            const keys = Object.keys(source)
            const keysLength = keys.length

            let key: string

            for (let i = 0; i < keysLength; i++) {
                key = keys[i]
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const value = source[key]

                if (value === undefined) {
                    continue
                }

                if (value !== null && typeof value === 'object') {
                    const valueType = getType(value)
                    if (valueType === DATE_TYPE || valueType === REGEXP_TYPE) {
                        target[key] = cloneSpecialObject(value, valueType)
                    } else {
                        const currentTarget = target[key]
                        target[key] = isObject(currentTarget) ? baseMerge(currentTarget, value) : baseMerge({}, value)
                    }
                } else {
                    target[key] = value
                }
            }
            return target
        }

        return source
    }

    let result = object

    for (let i = 0; i < length; i++) {
        result = baseMerge(result, sources[i])
    }

    return result as TObject & TSource
}
