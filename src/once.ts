import {before} from './before'

export function once<T extends (...args: Parameters<T>) => ReturnType<T>>(
    func: T,
): (...args: Parameters<T>) => ReturnType<T> {
    return before(2, func)
}

export default once
