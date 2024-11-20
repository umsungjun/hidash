// only for vite, tsup
// remember, this is not barrel file.
const moduleMap = {
    before: './src/before.ts',
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
    isNumber: './src/isNumber.ts',
    isObject: './src/isObject.ts',
    isSymbol: './src/isSymbol.ts',
    keys: './src/keys.ts',
    memoize: './src/memoize.ts',
    merge: './src/merge.ts',
    omit: './src/omit.ts',
    once: './src/once.ts',
    size: './src/size.ts',
    sum: './src/sum.ts',
    sumBy: './src/sumBy.ts',
    throttle: './src/throttle.ts',
    toNumber: './src/toNumber.ts',
} as const

export default moduleMap
