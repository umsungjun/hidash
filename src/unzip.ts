import type {List} from './internal/types'

export function unzip<T>(array: T[][] | List<List<T>> | null | undefined): T[][] {
    if (!array || array.length === 0) {
        return []
    }

    const length = array.length
    let maxInnerLength = 0

    for (let i = 0; i < length; i++) {
        const innerArray = array[i]
        if (innerArray && innerArray.length > maxInnerLength) {
            maxInnerLength = innerArray.length
        }
    }

    const result: T[][] = new Array(maxInnerLength)

    for (let i = 0; i < maxInnerLength; i++) {
        result[i] = new Array(length)
    }

    for (let i = 0; i < length; i++) {
        const innerArray = array[i]
        if (innerArray) {
            for (let j = 0; j < innerArray.length; j++) {
                result[j][i] = innerArray[j]
            }
        }
    }

    return result
}

export default unzip
