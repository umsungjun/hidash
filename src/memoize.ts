// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunc = (...args: any[]) => any

interface MemoizedFunction<T extends AnyFunc> {
    (...args: Parameters<T>): ReturnType<T>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cache: Map<any, ReturnType<T>>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class MemoizeCache<T> extends Map<any, T> {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function memoize<T extends AnyFunc>(func: T, resolver?: (...args: Parameters<T>) => any): MemoizedFunction<T> {
    if (typeof func !== 'function' || (resolver != null && typeof resolver !== 'function')) {
        throw new TypeError('Expected a function')
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const memoized = function (this: any, ...args: Parameters<T>): ReturnType<T> {
        const key = resolver ? resolver.apply(this, args) : args[0]
        const cache = memoized.cache

        if (cache.has(key)) {
            return cache.get(key)!
        }
        const result = func.apply(this, args)
        cache.set(key, result)
        return result
    } as MemoizedFunction<T>

    memoized.cache = new MemoizeCache<ReturnType<T>>()
    return memoized
}

memoize.Cache = MemoizeCache

export default memoize
