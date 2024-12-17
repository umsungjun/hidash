export function times(n: number): number[]
export function times<TResult>(n: number, iteratee: (num: number) => TResult): TResult[]
export function times<TResult>(n: number, iteratee?: (num: number) => TResult): (number | TResult)[] {
    const nTimes = Math.floor(Number(n))
    if (n < 1) {
        return []
    }

    const result = new Array(nTimes)

    if (iteratee) {
        for (let i = 0; i < nTimes; i++) {
            result[i] = iteratee(i)
        }
    } else {
        for (let i = 0; i < nTimes; i++) {
            result[i] = i
        }
    }

    return result
}

export default times
