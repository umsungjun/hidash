// only for vite, tsup
// remember, this is not barrel file.
const moduleMap = {
    isEmpty: './src/isEmpty.ts',
    size: './src/size.ts',
    keys: './src/keys.ts',
    isNil: './src/isNil.ts',
    isArray: './src/isArray.ts',
    isObject: './src/isObject.ts',
    has: './src/has.ts',
    memoize: './src/memoize.ts',
    sum: './src/sum.ts',
} as const

export default moduleMap
