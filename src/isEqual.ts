export function isEqual(value: unknown, other: unknown) {
    if (typeof value === 'number' && typeof other === 'number') {
        if (isNaN(value) && isNaN(other)) {
            return true
        }
    }

    if (value === other) {
        return true
    }

    if (typeof value === 'object' && value !== null && typeof other === 'object' && other !== null) {
        const valueObject = value as Record<string, unknown>
        const otherObject = other as Record<string, unknown>
        if (Object.getPrototypeOf(valueObject) !== Object.getPrototypeOf(otherObject)) {
            return false
        }

        const valueKeys = Object.keys(valueObject)
        const otherKeys = Object.keys(otherObject)

        if (valueKeys.length !== otherKeys.length) {
            return false
        }

        for (const key of valueKeys) {
            if (!isEqual(valueObject[key], otherObject[key])) {
                return false
            }
        }

        return true
    }

    return false
}

export default isEqual
