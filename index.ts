// only for vite, tsup
// remember, this is not barrel file.
const moduleMap = {
    clamp: './src/clamp.ts',
    debounce: './src/debounce.ts',
    eq: './src/eq.ts',
    every: './src/every.ts',
    groupBy: './src/groupBy.ts',
    has: './src/has.ts',
    includes: './src/includes.ts',
    isArray: './src/isArray.ts',
    isEmpty: './src/isEmpty.ts',
    isNil: './src/isNil.ts',
    isNull: './src/isNull.ts',
    isObject: './src/isObject.ts',
    keys: './src/keys.ts',
    memoize: './src/memoize.ts',
    size: './src/size.ts',
    sum: './src/sum.ts',
    sumBy: './src/sumBy.ts',
    throttle: './src/throttle.ts',
} as const

export default moduleMap
