type NestedPaths<T> = T extends object
    ? {
          [K in keyof T]: K extends string
              ? T[K] extends number
                  ? K
                  : T[K] extends object
                  ? `${K}.${NestedPaths<T[K]>}`
                  : never
              : never
      }[keyof T]
    : never

/**
 * @description https://unpkg.com/browse/lodash.sumby@4.6.0/index.js
 */
export function sumBy<T, P extends NestedPaths<T>>(elements: T[], iteratee: P | ((element: T) => number)): number {
    const len = elements.length
    let sum = 0

    // 함수인 경우
    if (typeof iteratee === 'function') {
        const fn = iteratee as (element: T) => number
        for (let i = 0; i < len; i++) {
            sum += fn(elements[i])
        }
        return sum
    }

    // 문자열 경로인 경우
    const keys = iteratee.split('.') as (keyof T)[]
    const pathLen = keys.length

    // 단일 키인 경우 최적화
    if (pathLen === 1) {
        const key = keys[0] as keyof T
        for (let i = 0; i < len; i++) {
            const value = elements[i][key]
            if (typeof value === 'number') {
                sum += value
            }
        }
        return sum
    }

    // 다중 키 경로인 경우
    for (let i = 0; i < len; i++) {
        let value: unknown = elements[i]
        for (let j = 0; j < pathLen && value != null; j++) {
            const key = keys[j]
            value = (value as Record<keyof T, unknown>)[key]
        }
        if (typeof value === 'number') {
            sum += value
        }
    }

    return sum
}

export default sumBy
