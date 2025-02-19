import {baseIteratee} from './internal/baseIteratee'
import {ListIterator, ObjectIterator} from './internal/baseIteratee.type'
import {Dictionary, NumericDictionary} from './internal/types'
import {isObject} from './isObject'

type BoxedPrimitive = StringConstructor | NumberConstructor | BooleanConstructor

function isBoxedPrimitive(value: unknown): value is BoxedPrimitive {
    return value === String || value === Number || value === Boolean
}

function deepClone<T>(value: T): T {
    if (Array.isArray(value)) {
        return value.map(deepClone) as T
    } else if (isObject(value)) {
        const result = {} as T
        for (const key in value) {
            if (Object.prototype.hasOwnProperty.call(value, key)) {
                result[key] = deepClone(value[key])
            }
        }
        return result
    }
    return value
}

export function mapValues<TResult>(
    obj: string | null | undefined,
    callback: StringIterator<TResult>,
): NumericDictionary<TResult>
export function mapValues<T, TResult>(array: T[], callback: ListIterator<T, TResult>): NumericDictionary<TResult>
export function mapValues<T extends object, TResult>(
    obj: T | null | undefined,
    callback: ObjectIterator<T, TResult>,
): {[P in keyof T]: TResult}
export function mapValues<T>(
    obj: Dictionary<T> | NumericDictionary<T> | null | undefined,
    iteratee: object,
): Dictionary<boolean>
export function mapValues<T extends object>(obj: T | null | undefined, iteratee: object): {[P in keyof T]: boolean}
export function mapValues<T, TKey extends keyof T>(
    obj: Dictionary<T> | NumericDictionary<T> | null | undefined,
    iteratee: TKey,
): Dictionary<T[TKey]>
export function mapValues<T>(
    obj: Dictionary<T> | NumericDictionary<T> | null | undefined,
    iteratee: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Dictionary<any>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapValues<T extends object>(obj: T | null | undefined, iteratee: string): {[P in keyof T]: any}
export function mapValues(obj: string | null | undefined): NumericDictionary<string>
export function mapValues<T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined): Dictionary<T>
export function mapValues<T extends object>(obj: T): T
export function mapValues<T extends object>(obj: T | null | undefined): Partial<T>
// 실제 구현
export function mapValues<T extends Record<string, unknown> | unknown[], R, I>(
    object: T | null | undefined,
    iteratee?: BoxedPrimitive | I | null | undefined,
): T extends unknown[]
    ? Record<string, R | T[number] | ReturnType<BoxedPrimitive>>
    : {[K in keyof T]: R | T[keyof T] | ReturnType<BoxedPrimitive>} {
    // null이나 undefined인 경우 빈 객체 반환
    if (object === null || object === undefined) {
        return {} as T extends unknown[]
            ? Record<string, R | T[number] | ReturnType<BoxedPrimitive>>
            : {[K in keyof T]: R | T[keyof T] | ReturnType<BoxedPrimitive>}
    }

    const result: Record<string, unknown> = {}
    const isBoxed = isBoxedPrimitive(iteratee)
    const iterateeFunc =
        !isBoxed && iteratee ? baseIteratee<T extends unknown[] ? T[number] : T[keyof T], R>(iteratee) : null

    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            const value = object[key as keyof T]

            if (iteratee === undefined || iteratee === null) {
                result[key] = isObject(value) || Array.isArray(value) ? deepClone(value) : value
            } else if (isBoxed) {
                result[key] = (iteratee as BoxedPrimitive)(value as never)
            } else if (iterateeFunc) {
                result[key] = iterateeFunc(
                    value as (T extends unknown[] ? T[number] : T[keyof T])[keyof (T extends unknown[]
                        ? T[number]
                        : T[keyof T])],
                    key,
                    object as T extends unknown[] ? T[number] : T[keyof T],
                )
            }
        }
    }

    return result as T extends unknown[]
        ? Record<string, R | T[number] | ReturnType<BoxedPrimitive>>
        : {[K in keyof T]: R | T[keyof T] | ReturnType<BoxedPrimitive>}
}

export default mapValues
