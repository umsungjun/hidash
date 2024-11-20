type PropertyPath = string | number | symbol | readonly (string | number | symbol)[]

export function omit<T extends object>(object: T | null | undefined, ...paths: PropertyPath[]): T {
    if (object == null) {
        return {} as T
    }

    const result = {...object}
    const flattenedPaths = paths.flatMap((path) => (Array.isArray(path) ? path : [path]))

    flattenedPaths.forEach((path) => {
        delete result[path as keyof T]
    })

    return result
}

export default omit
