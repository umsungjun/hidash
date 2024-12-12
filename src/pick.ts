import flatten from './flatten'

type Many<T> = T | Many<T>[]

export function pick<T extends object, U extends keyof T>(object: T, ...params: Many<U>[]): Pick<T, U> {
    if (object == null) {
        return {} as Pick<T, U>
    }

    const keys = flatten(params)
    const result: Partial<T> = {}

    for (const key of keys) {
        if (key in object) {
            result[key] = object[key]
        }
    }

    return result as Pick<T, U>
}

export default pick
