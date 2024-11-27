/* eslint-disable @typescript-eslint/no-explicit-any */
import isFunction from '../isFunction'
import isNull from '../isNull'
import isPlainObject from '../isPlainObject'
import isUndefined from '../isUndefined'
import {isArrayLike} from './array'

type PropertyName = string | number | symbol
type PartialShallow<T> = {
    [P in keyof T]?: T[P] extends object ? object : T[P]
}
type IterateeShorthand<T> = PropertyName | [PropertyName, any] | PartialShallow<T> | undefined | null
type ListIterator<T, TResult> = (value: T, index: number, collection: ArrayLike<T>) => TResult
export type ListIteratee<T> = ListIterator<T, unknown> | IterateeShorthand<T>
export type ListIterateeCustom<T, TResult> = ListIterator<T, TResult> | IterateeShorthand<T>

function isMatch<T extends object>(element: T, source: any, cache = new WeakMap<T>()): boolean {
    if (cache.has(element)) {
        return cache.get(element) as boolean
    }

    if (!isPlainObject(element) || !isPlainObject(source)) {
        return false
    }

    for (const [key, value] of Object.entries(source)) {
        const elementValue = (element as Record<string, any>)[key]

        if (isPlainObject(value)) {
            if (!isMatch(elementValue, value, cache)) {
                return false
            }
        } else if (elementValue !== value) {
            return false
        }
    }

    cache.set(element, true)
    return true
}

export function baseIteratee<T, TResult>(iteratee: ListIterateeCustom<T, TResult>): ListIterator<T, TResult> {
    if (isNull(iteratee) || isUndefined(iteratee)) {
        return function (element) {
            return element as unknown as TResult
        }
    }

    // early return
    if (typeof iteratee === 'string' && !iteratee.includes('.')) {
        return function (element) {
            return element !== null ? (element as any)[iteratee] : undefined
        }
    }

    if (typeof iteratee === 'string' || typeof iteratee === 'symbol' || typeof iteratee === 'number') {
        const keys = typeof iteratee === 'string' ? iteratee.split('.') : [iteratee]

        return function (element) {
            let result = element
            for (const key of keys) {
                if (result === null) {
                    return undefined as TResult
                }
                result = (result as any)[key]
            }
            return result as unknown as TResult
        }
    }

    if (isArrayLike(iteratee) && !isFunction(iteratee)) {
        const [key, value] = iteratee
        // early return
        if (typeof key === 'string' && !key.includes('.')) {
            return (element) => (element != null && (element as any)[key] === value) as TResult
        }

        const keys = typeof key === 'string' ? key.split('.') : [key]

        return function (element) {
            let result = element
            for (const prop of keys) {
                if (result == null) {
                    return false as TResult
                }
                result = (result as any)[prop]
            }
            return (result === value) as TResult
        }
    }

    if (isPlainObject(iteratee) && !isFunction(iteratee)) {
        return function (element) {
            if (isPlainObject(element)) {
                return isMatch(element, iteratee as Record<string, any>) as TResult
            }
            return false as TResult
        }
    }

    if (isFunction(iteratee)) {
        return iteratee
    }

    throw new Error('Invalid iteratee')
}
