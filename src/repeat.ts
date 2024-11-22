export function repeat(str: string, n: number): string {
    if (typeof n !== 'number') {
        return str
    }

    if (str === '' || n <= 0 || !Number.isFinite(n) || isNaN(n)) {
        return ''
    }

    let result = ''
    let current = str
    let num = Math.floor(n)

    while (num > 0) {
        if (num % 2 === 1) {
            result = result + current
        }
        current = current + current
        num = Math.floor(num / 2)
    }

    return result
}

export default repeat
