type KeyOf<T> = keyof T

export function pick<T extends object, K extends KeyOf<T>>(object: T, keys: K[]): Pick<T, K> {
    if (object == null) {
        return {} as Pick<T, K>
    }

    const result: Partial<T> = {}

    for (const key of keys) {
        if (key in object) {
            result[key] = object[key]
        }
    }

    return result as Pick<T, K>
}

export default pick
