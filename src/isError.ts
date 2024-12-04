export function isError(value: unknown): value is Error {
    if (!value || typeof value !== 'object') {
        return false
    }

    const proto = Object.getPrototypeOf(value)
    return proto !== null && ((proto.constructor && proto.constructor.name === 'Error') || proto instanceof Error)
}

export default isError
