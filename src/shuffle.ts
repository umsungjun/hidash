type Collection<T> = ArrayLike<T> | object

export function shuffle<T>(collection: Collection<T> | null | undefined): T[] {
    if (collection == null) {
        return []
    }
    let result: T[]
    if (collection instanceof Map) {
        result = Array.from(collection.entries()).flatMap(([key, value]) => [key as unknown as T, value as T])
    } else if (collection instanceof Set) {
        result = Array.from(collection)
    } else if (typeof collection === 'string' || Array.isArray(collection)) {
        result = [...collection]
    } else if (typeof collection === 'object') {
        if ('length' in collection && typeof collection.length === 'number') {
            result = Array.from(collection as ArrayLike<T>)
        } else {
            result = Object.values(collection) as T[]
        }
    } else {
        return []
    }
    let index = result.length
    while (index > 0) {
        const rand = Math.floor(Math.random() * index--)
        const temp = result[index]
        result[index] = result[rand]
        result[rand] = temp
    }
    return result
}
export default shuffle
