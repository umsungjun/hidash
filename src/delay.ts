import toNumber from './toNumber'

export function delay<T extends unknown[]>(func: (...args: T) => void, wait: number, ...args: T): number {
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function')
    }
    const timeout = setTimeout(() => func(...args), wait)
    return toNumber(timeout)
}

export default delay
