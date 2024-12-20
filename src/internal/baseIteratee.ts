/* eslint-disable @typescript-eslint/no-explicit-any */
import isFunction from '../isFunction'
import isNull from '../isNull'
import isPlainObject from '../isPlainObject'
import isUndefined from '../isUndefined'
import {isArrayLike} from './array'

import type {List} from './types'

type PropertyName = string | number | symbol
type PartialShallow<T> = {
    [P in keyof T]?: T[P] extends object ? object : T[P]
}
type IterateeShorthand<T> = PropertyName | [PropertyName, any] | PartialShallow<T> | undefined | null
export type ListIterator<T, TResult> = (value: T, index: number, collection: ArrayLike<T>) => TResult
export type ListIteratee<T> = ListIterator<T, unknown> | IterateeShorthand<T>
export type ListIterateeCustom<T, TResult> = ListIterator<T, TResult> | IterateeShorthand<T>
export type ListIteratorTypeGuard<T, S extends T> = (value: T, index: number, collection: List<T>) => value is S

export type ValueIteratee<T> = ((value: T) => unknown) | IterateeShorthand<T>

export type ObjectIterator<T, TResult> = (value: T[keyof T], key: string, collection: T) => TResult
export type ObjectIteratee<TObject> = ObjectIterator<TObject, unknown> | IterateeShorthand<TObject[keyof TObject]>
export type ObjectIterateeCustom<TObject, TResult> =
    | ObjectIterator<TObject, TResult>
    | IterateeShorthand<TObject[keyof TObject]>
export type ObjectIteratorTypeGuard<TObject, S extends TObject[keyof TObject]> = (
    value: TObject[keyof TObject],
    key: string,
    collection: TObject,
) => value is S

function isMatch<T extends object>(element: T, source: any): boolean {
    if (!isPlainObject(element) || !isPlainObject(source)) {
        return false
    }

    for (const [key, value] of Object.entries(source)) {
        const elementValue = (element as Record<string, any>)[key]

        if (isPlainObject(value)) {
            if (!isMatch(elementValue, value)) {
                return false
            }
        } else if (elementValue !== value) {
            return false
        }
    }

    return true
}

export function baseIteratee<T, TResult>(iteratee: ObjectIterateeCustom<T, TResult>): ObjectIterator<T, TResult>
export function baseIteratee<T, TResult>(iteratee: ListIterateeCustom<T, TResult>): ListIterator<T, TResult>
export function baseIteratee<T, TResult>(
    iteratee: ListIterateeCustom<T, TResult> | ObjectIterateeCustom<T, TResult>,
): ListIterator<T, TResult> | ObjectIterator<T, TResult> {
    if (isNull(iteratee) || isUndefined(iteratee)) {
        return function (element: T) {
            return element as unknown as TResult
        }
    }

    // early return
    if (typeof iteratee === 'string' && !iteratee.includes('.')) {
        return function (element: T) {
            return element !== null ? (element as any)[iteratee] : undefined
        }
    }

    if (typeof iteratee === 'string' || typeof iteratee === 'symbol' || typeof iteratee === 'number') {
        const keys = typeof iteratee === 'string' ? iteratee.split('.') : [iteratee]

        return function (element: T) {
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
            return (element: T) => (element != null && (element as any)[key] === value) as TResult
        }

        const keys = typeof key === 'string' ? key.split('.') : [key]

        return function (element: T) {
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
        return function (element: T) {
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
