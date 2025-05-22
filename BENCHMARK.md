# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: TINY (10) | lodash is 1.00x faster | 7707690.41 | 7707690.41 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: SMALL (100) | lodash is 1.00x faster | 1344215.21 | 1344215.21 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: MEDIUM (1000) | lodash is 1.00x faster | 145592.78 | 145592.78 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: LARGE (10000) | lodash is 1.00x faster | 14278.68 | 14278.68 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: TINY (10) | lodash is 1.00x faster | 1371167.21 | 1371167.21 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: SMALL (100) | lodash is 1.00x faster | 159984.51 | 159984.51 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: MEDIUM (1000) | lodash is 1.00x faster | 16387.08 | 16387.08 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: LARGE (10000) | lodash is 1.00x faster | 1640.63 | 1640.63 🏆 |
| [assign](https://github.com/NaverPayDev/hidash/blob/main/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.45x faster | 27.11 🏆 | 11.07 |
| [before](https://github.com/NaverPayDev/hidash/blob/main/src/before.ts) ⚠️ | src/before.bench.ts > before performance | lodash is 1.61x faster | 344865.63 | 555744.61 🏆 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/main/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.60x faster | 633.00 🏆 | 243.35 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/main/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.21x faster | 111.98 🏆 | 50.57 |
| [clone](https://github.com/NaverPayDev/hidash/blob/main/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.69x faster | 54.47 🏆 | 3.26 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/main/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.19x faster | 1.94 🏆 | 0.88 |
| [difference](https://github.com/NaverPayDev/hidash/blob/main/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.42x faster | 301.86 🏆 | 88.30 |
| [every](https://github.com/NaverPayDev/hidash/blob/main/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.82x faster | 49.47 🏆 | 27.12 |
| [filter](https://github.com/NaverPayDev/hidash/blob/main/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 2.78x faster | 16.64 🏆 | 5.99 |
| [find](https://github.com/NaverPayDev/hidash/blob/main/src/find.ts) | src/find.bench.ts > find performance | hidash is 4.08x faster | 1559.82 🏆 | 382.24 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/main/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 4.75x faster | 5026.40 🏆 | 1058.31 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/main/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 4.91x faster | 4997.17 🏆 | 1017.45 |
| [first](https://github.com/NaverPayDev/hidash/blob/main/src/first.ts) | src/first.bench.ts > first performance | hidash is 8.61x faster | 499.14 🏆 | 57.94 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/main/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.26x faster | 71.45 🏆 | 56.72 |
| [get](https://github.com/NaverPayDev/hidash/blob/main/src/get.ts) | src/get.bench.ts > get performance | hidash is 3.29x faster | 1110.54 🏆 | 337.47 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/main/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.25x faster | 1069.65 | 1335.58 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/main/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.54x faster | 175.26 🏆 | 49.57 |
| [has](https://github.com/NaverPayDev/hidash/blob/main/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.41x faster | 486.69 🏆 | 202.36 |
| [includes](https://github.com/NaverPayDev/hidash/blob/main/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.87x faster | 39.82 🏆 | 5.79 |
| [isArray](https://github.com/NaverPayDev/hidash/blob/main/src/isArray.ts) | src/isArray.bench.ts > isArray performance | hidash is 8.77x faster | 508.26 🏆 | 57.97 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/main/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 11.65x faster | 219.31 🏆 | 18.83 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/main/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.49x faster | 5.51 🏆 | 0.85 |
| [isFunction](https://github.com/NaverPayDev/hidash/blob/main/src/isFunction.ts) | src/isFunction.bench.ts > isFunction performance | hidash is 20.20x faster | 3126.96 🏆 | 154.79 |
| [isMap](https://github.com/NaverPayDev/hidash/blob/main/src/isMap.ts) | src/isMap.bench.ts > isMap performance | hidash is 3.34x faster | 2553.68 🏆 | 765.68 |
| [isNumber](https://github.com/NaverPayDev/hidash/blob/main/src/isNumber.ts) | src/isNumber.bench.ts > isNumber performance | hidash is 7.87x faster | 2995.31 🏆 | 380.78 |
| [keys](https://github.com/NaverPayDev/hidash/blob/main/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 3.01x faster | 16.15 🏆 | 5.37 |
| [last](https://github.com/NaverPayDev/hidash/blob/main/src/last.ts) | src/last.bench.ts > last performance | hidash is 5.13x faster | 2414.20 🏆 | 470.77 |
| [lt](https://github.com/NaverPayDev/hidash/blob/main/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.41x faster | 173.43 🏆 | 50.79 |
| [map](https://github.com/NaverPayDev/hidash/blob/main/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.63x faster | 592.69 🏆 | 363.31 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/main/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.38x faster | 469.68 🏆 | 340.65 |
| [merge](https://github.com/NaverPayDev/hidash/blob/main/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.26x faster | 277.28 🏆 | 219.93 |
| [omit](https://github.com/NaverPayDev/hidash/blob/main/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.06x faster | 109.19 🏆 | 26.89 |
| [pick](https://github.com/NaverPayDev/hidash/blob/main/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.23x faster | 170.04 🏆 | 32.48 |
| [pickBy](https://github.com/NaverPayDev/hidash/blob/main/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.20x faster | 2.24 🏆 | 1.86 |
| [range](https://github.com/NaverPayDev/hidash/blob/main/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.59x faster | 30.85 🏆 | 19.40 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/main/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.59x faster | 1683.82 🏆 | 650.05 |
| [reverse](https://github.com/NaverPayDev/hidash/blob/main/src/reverse.ts) | src/reverse.bench.ts > reverse performance | hidash is 1.93x faster | 1115.30 🏆 | 578.21 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/main/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.85x faster | 18.03 🏆 | 6.32 |
| [size](https://github.com/NaverPayDev/hidash/blob/main/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.02x faster | 61.97 | 63.08 🏆 |
| [some](https://github.com/NaverPayDev/hidash/blob/main/src/some.ts) | src/some.bench.ts > some performance | hidash is 2.64x faster | 18.48 🏆 | 7.00 |
| [sum](https://github.com/NaverPayDev/hidash/blob/main/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 3.10x faster | 185.10 🏆 | 59.66 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/main/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.39x faster | 142.23 🏆 | 102.52 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/main/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.10x faster | 93.17 🏆 | 11.51 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/main/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.96x faster | 92.50 🏆 | 31.24 |
| [toString](https://github.com/NaverPayDev/hidash/blob/main/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.94x faster | 33.30 🏆 | 17.17 |
| [transform](https://github.com/NaverPayDev/hidash/blob/main/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.93x faster | 232.56 🏆 | 79.26 |
| [trim](https://github.com/NaverPayDev/hidash/blob/main/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.88x faster | 34.50 🏆 | 11.96 |
| [union](https://github.com/NaverPayDev/hidash/blob/main/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.78x faster | 95.37 🏆 | 53.67 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/main/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.49x faster | 117.76 🏆 | 79.21 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/main/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.77x faster | 65.31 🏆 | 36.85 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/main/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.20 | 17.01 🏆 |
| [unzip](https://github.com/NaverPayDev/hidash/blob/main/src/unzip.ts) | src/unzip.bench.ts > unzip performance | hidash is 1.38x faster | 87.62 🏆 | 63.38 |
| [values](https://github.com/NaverPayDev/hidash/blob/main/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.53x faster | 133.85 🏆 | 5.94 |
| [zip](https://github.com/NaverPayDev/hidash/blob/main/src/zip.ts) | src/zip.bench.ts > zip performance | hidash is 1.13x faster | 49.11 🏆 | 43.42 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
> 
> ⚠️ indicates where hidash is slower than lodash.
> 
> 🏆 indicates the faster implementation.


_Last updated: 2025-05-22_

*Last updated by [GitHub Actions](https://github.com/NaverPayDev/hidash/actions/runs/15176533744)*