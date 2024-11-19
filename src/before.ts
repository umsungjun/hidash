export function before<T extends (...args: Parameters<T>) => ReturnType<T>>(
    initialN: number,
    func: T,
): (...args: Parameters<T>) => ReturnType<T> {
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function')
    }

    let result: ReturnType<T>
    let n = Math.floor(initialN)

    return function (this: ThisParameterType<T>, ...args: Parameters<T>): ReturnType<T> {
        if (--n > 0) {
            result = func.apply(this, args)
        }
        if (n <= 1) {
            // eslint-disable-next-line no-param-reassign
            func = undefined as unknown as T
        }
        return result
    }
}

export default before
