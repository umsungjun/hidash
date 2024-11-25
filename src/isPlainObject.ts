export function isPlainObject(value: unknown): value is object {
    if (!(value && typeof value === 'object')) {
        return false
    }

    if (Object.prototype.toString.call(value) !== '[object Object]') {
        return false
    }

    const proto = Object.getPrototypeOf(Object(value))
    if (proto === null) {
        return true
    }

    const Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor
    return (
        typeof Ctor === 'function' &&
        Ctor instanceof Ctor &&
        Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object)
    )
}

export default isPlainObject
