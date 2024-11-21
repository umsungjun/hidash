type Iteratee<PARAM, RETURN> = string | ((element: PARAM) => RETURN)

function getIteratee<PARAM, RETURN>(iteratee: Iteratee<PARAM, RETURN>): (element: PARAM) => RETURN {
    /**
     * string을 iteratee로 변환합니다.
     *
     * ex. n.m > function ({ n : { m }}) { return m }
     * */
    if (typeof iteratee === 'string') {
        const keys = iteratee.split('.')
        const iterateeByString = function (element: PARAM): RETURN {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return keys.reduce((acc: any, key) => {
                return acc && acc[key]
            }, element)
        }
        return iterateeByString as (element: PARAM) => RETURN
    }

    return iteratee
}

type BoxedPrimitive = StringConstructor | NumberConstructor | BooleanConstructor

function isBoxedPrimitive(value: unknown): value is BoxedPrimitive {
    return value === String || value === Number || value === Boolean
}

function isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function deepClone<T>(value: T): T {
    if (Array.isArray(value)) {
        return value.map(deepClone) as T
    } else if (isObject(value)) {
        return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, deepClone(v)])) as T
    }
    return value
}

// 오버로드 시그니처
export function mapValues<T extends Record<string, unknown>>(object: T | null | undefined): T
export function mapValues<T extends unknown[]>(object: T | null | undefined): Record<string, T[number]>
export function mapValues<T extends Record<string, unknown>>(
    object: T | null | undefined,
    iteratee?: null | undefined,
): T
export function mapValues<T extends unknown[]>(
    object: T | null | undefined,
    iteratee?: null | undefined,
): Record<string, T[number]>
export function mapValues<T extends Record<string, unknown>, I extends BoxedPrimitive>(
    object: T | null | undefined,
    iteratee: I,
): {[K in keyof T]: ReturnType<I>}
export function mapValues<T extends Record<string, unknown>, R>(
    object: T | null | undefined,
    iteratee: Iteratee<T[keyof T], R>,
): {[K in keyof T]: R}
export function mapValues<T extends unknown[], I extends BoxedPrimitive>(
    object: T | null | undefined,
    iteratee: I,
): Record<string, ReturnType<I>>
export function mapValues<T extends unknown[], R>(
    object: T | null | undefined,
    iteratee: Iteratee<T[number], R>,
): Record<string, R>
// 실제 구현
export function mapValues<T extends Record<string, unknown> | unknown[], R>(
    object: T | null | undefined,
    iteratee?: BoxedPrimitive | Iteratee<T extends unknown[] ? T[number] : T[keyof T], R> | null | undefined,
): T extends unknown[]
    ? Record<string, R | T[number] | ReturnType<BoxedPrimitive>>
    : {[K in keyof T]: R | T[keyof T] | ReturnType<BoxedPrimitive>} {
    // null이나 undefined인 경우 빈 객체 반환
    if (object === null || object === undefined) {
        return {} as T extends unknown[]
            ? Record<string, R | T[number] | ReturnType<BoxedPrimitive>>
            : {[K in keyof T]: R | T[keyof T] | ReturnType<BoxedPrimitive>}
    }

    const result: Record<string, unknown> = {}
    const entries = Array.isArray(object) ? Object.entries(object) : Object.entries(object as Record<string, unknown>)
    for (const [key, value] of entries) {
        if (iteratee === undefined || iteratee === null) {
            result[key] = deepClone(value)
        } else if (isBoxedPrimitive(iteratee)) {
            result[key] = iteratee(value as T extends unknown[] ? T[number] : T[keyof T])
        } else {
            const iterateeFunc = getIteratee(iteratee)
            result[key] = iterateeFunc(value as T extends unknown[] ? T[number] : T[keyof T])
        }
    }
    return result as T extends unknown[]
        ? Record<string, R | T[number] | ReturnType<BoxedPrimitive>>
        : {[K in keyof T]: R | T[keyof T] | ReturnType<BoxedPrimitive>}
}

export default mapValues
