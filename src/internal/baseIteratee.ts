import isFunction from '../isFunction'
import isPlainObject from '../isPlainObject'
import {isArrayLike} from './array'

type PropertyName = string | number | symbol
type PartialShallow<T> = {
    [P in keyof T]?: T[P] extends object ? object : T[P]
}
type IterateeShorthand<T> = PropertyName | [PropertyName, unknown] | PartialShallow<T> | undefined | null
export type ListIterator<T, TResult> = (value: T, index: number, collection: ArrayLike<T>) => TResult
export type ListIteratee<T> = ListIterator<T, unknown> | IterateeShorthand<T>
export type ListIterateeCustom<T, TResult> = ListIterator<T, TResult> | IterateeShorthand<T>
export type ValueIteratee<T> = ((value: T) => unknown) | IterateeShorthand<T>

type ObjectIterator<T, TResult> = (value: T[keyof T], key: string, collection: T) => TResult
export type ObjectIteratee<TObject> = ObjectIterator<TObject, unknown> | IterateeShorthand<TObject[keyof TObject]>
export type ObjectIterateeCustom<TObject, TResult> =
    | ObjectIterator<TObject, TResult>
    | IterateeShorthand<TObject[keyof TObject]>

function getValueByPath(element: unknown, path: PropertyName[]): unknown {
    let result = element
    for (let i = 0; i < path.length; i++) {
        if (result == null || typeof result !== 'object') {
            return undefined
        }
        const obj = result as Record<PropertyName, unknown>
        result = obj[path[i]]
    }
    return result
}

function isMatch(element: unknown, source: unknown): boolean {
    if (!isPlainObject(element) || !isPlainObject(source)) {
        return false
    }
    const elementObj = element as Record<PropertyName, unknown>
    const sourceObj = source as Record<PropertyName, unknown>

    const keys = Object.keys(sourceObj)
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        const value = sourceObj[key]
        const elementValue = elementObj[key]

        if (elementValue === value) {
            continue
        }

        if (value == null || typeof value !== 'object') {
            return false
        }

        if (!isMatch(elementValue, value)) {
            return false
        }
    }
    return true
}

export function baseIteratee<T, TResult>(iteratee: ListIterateeCustom<T, TResult>): ListIterator<T, TResult> {
    if (iteratee == null) {
        return (element: T) => element as unknown as TResult
    }

    if (typeof iteratee === 'function') {
        return iteratee
    }

    if (typeof iteratee === 'string') {
        if (!iteratee.includes('.')) {
            const key = iteratee
            return (element: T) => {
                if (element == null) {
                    return undefined as TResult
                }
                return (element as Record<PropertyName, unknown>)[key] as TResult
            }
        } else {
            const path = iteratee.split('.')
            return (element: T) => {
                if (element == null) {
                    return undefined as TResult
                }
                return getValueByPath(element, path) as TResult
            }
        }
    }

    if (typeof iteratee === 'number' || typeof iteratee === 'symbol') {
        const path = [iteratee]
        return (element: T) => {
            if (element == null) {
                return undefined as TResult
            }
            return getValueByPath(element, path) as TResult
        }
    }

    if (isArrayLike(iteratee) && !isFunction(iteratee)) {
        const arrIter = iteratee as [PropertyName, unknown]
        const [key, val] = arrIter
        const path = typeof key === 'string' && key.includes('.') ? key.split('.') : [key]
        return (element: T) => {
            if (element == null) {
                return false as unknown as TResult
            }
            const elementVal = getValueByPath(element, path)
            return (elementVal === val) as unknown as TResult
        }
    }

    if (isPlainObject(iteratee) && !isFunction(iteratee)) {
        const pattern = iteratee as PartialShallow<T>
        return (element: T) => {
            if (element == null) {
                return false as unknown as TResult
            }
            return (isPlainObject(element) && isMatch(element, pattern)) as unknown as TResult
        }
    }

    throw new Error('Invalid iteratee')
}
