import type {List} from './types'

export type PropertyName = string | number | symbol
export type PartialShallow<T> = {
    [P in keyof T]?: T[P] extends object ? object : T[P]
}
export type IterateeShorthand<T> = PropertyName | [PropertyName, unknown] | PartialShallow<T> | undefined | null

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
