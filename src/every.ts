type List<T> = ArrayLike<T>
type ListIterateeCustom<T, R> = (value: T, index: number, collection: List<T>) => R
type ObjectIterateeCustom<T, R> = (value: T[keyof T], key: string, collection: T) => R

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
