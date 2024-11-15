export type Dictionary<T> = Record<string, T>
export type NumericDictionary<T> = Record<number, T>

export function includes<T>(
    collection: Dictionary<T> | NumericDictionary<T> | null | undefined,
    target: T,
    fromIndex?: number,
): boolean {
    // 객체가 비어있으면 바로 false 반환
    if (!collection) {
        return false
    }

    // 객체의 모든 값들을 배열로 변환
    const values = Object.values(collection)
    const length = values.length

    // 값이 하나도 없으면 false 반환
    if (length === 0) {
        return false
    }

    // 시작 위치가 없으면 0부터 시작
    const normalizedFromIndex = fromIndex === undefined ? 0 : fromIndex
    // 시작 위치 계산 (음수면 뒤에서부터 계산)
    const start =
        normalizedFromIndex >= 0 ? Math.min(normalizedFromIndex, length) : Math.max(length + normalizedFromIndex, 0)

    // 4개씩 검사하기 전에 남은 값들 먼저 검사
    const remainder = (length - start) % 4
    for (let i = start; i < start + remainder; i++) {
        if (values[i] === target) {
            return true
        }
    }

    // 4개씩 묶어서 한번에 검사 (더 빠르게 찾기 위해)
    for (let i = start + remainder; i < length; i += 4) {
        if (values[i] === target || values[i + 1] === target || values[i + 2] === target || values[i + 3] === target) {
            return true
        }
    }

    // 끝까지 못 찾으면 false 반환
    return false
}

export default includes
