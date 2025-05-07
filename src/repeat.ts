export function repeat(str: string, n: number): string {
    // Early type checking avoids unnecessary processing
    if (typeof n !== 'number') {
        return str
    }

    // Simplified validation: combined edge case checks reduce branching
    if (str === '' || n <= 0 || n > Number.MAX_SAFE_INTEGER || !Number.isFinite(n) || isNaN(n)) {
        return ''
    }

    let result = ''
    let current = str
    let num = Math.floor(n)

    while (num > 0) {
        // 1. No string concatenation in loop condition checks
        // 2. Simplified bitwise check
        if (num % 2 === 1) {
            result = result + current
        }
        current = current + current
        num = Math.floor(num / 2)
    }

    return result
}

export default repeat
