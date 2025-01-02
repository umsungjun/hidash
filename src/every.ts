import type {ListIterateeCustom, ObjectIterateeCustom} from './internal/baseIteratee.type'
import type {List} from './internal/types'

export function every<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean
export function every<T extends object>(
    collection: T | null | undefined,
    predicate?: ObjectIterateeCustom<T, boolean>,
): boolean
export function every<T, U extends T[keyof T]>(
    collection: T | List<U> | null | undefined,
    predicate: ListIterateeCustom<U, boolean> | ObjectIterateeCustom<T, boolean> = Boolean,
): boolean {
    if (!collection) {
        return true
    }

    const values = Object.values(collection)
    const length = values.length

    if (length === 0) {
        return true
    }

    for (let i = 0; i < length; i++) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (!predicate(values[i], i, collection)) {
            return false
        }
    }

    return true
}

export default every
