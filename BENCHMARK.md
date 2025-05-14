# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [tip](https://github.com/umsungjun/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: TINY (10) | lodash is 1.00x faster | 7649051.22 | 7649051.22 🏆 |
| [tip](https://github.com/umsungjun/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: SMALL (100) | lodash is 1.00x faster | 1336286.59 | 1336286.59 🏆 |
| [tip](https://github.com/umsungjun/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: MEDIUM (1000) | lodash is 1.00x faster | 145610.44 | 145610.44 🏆 |
| [tip](https://github.com/umsungjun/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: LARGE (10000) | lodash is 1.00x faster | 14760.74 | 14760.74 🏆 |
| [tip](https://github.com/umsungjun/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: TINY (10) | lodash is 1.00x faster | 1358325.37 | 1358325.37 🏆 |
| [tip](https://github.com/umsungjun/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: SMALL (100) | lodash is 1.00x faster | 159975.77 | 159975.77 🏆 |
| [tip](https://github.com/umsungjun/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: MEDIUM (1000) | lodash is 1.00x faster | 16356.90 | 16356.90 🏆 |
| [tip](https://github.com/umsungjun/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: LARGE (10000) | lodash is 1.00x faster | 1644.94 | 1644.94 🏆 |
| [assign](https://github.com/umsungjun/hidash/blob/main/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.40x faster | 27.10 🏆 | 11.31 |
| [before](https://github.com/umsungjun/hidash/blob/main/src/before.ts) ⚠️ | src/before.bench.ts > before performance | lodash is 1.62x faster | 343320.75 | 554743.11 🏆 |
| [chunk](https://github.com/umsungjun/hidash/blob/main/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.30x faster | 610.14 🏆 | 265.18 |
| [clamp](https://github.com/umsungjun/hidash/blob/main/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.17x faster | 109.32 🏆 | 50.46 |
| [clone](https://github.com/umsungjun/hidash/blob/main/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.75x faster | 56.53 🏆 | 3.38 |
| [cloneDeep](https://github.com/umsungjun/hidash/blob/main/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.20x faster | 1.95 🏆 | 0.88 |
| [difference](https://github.com/umsungjun/hidash/blob/main/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.31x faster | 306.77 🏆 | 92.62 |
| [every](https://github.com/umsungjun/hidash/blob/main/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.84x faster | 51.00 🏆 | 27.68 |
| [filter](https://github.com/umsungjun/hidash/blob/main/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 3.10x faster | 16.82 🏆 | 5.42 |
| [findIndex](https://github.com/umsungjun/hidash/blob/main/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 4.32x faster | 4837.01 🏆 | 1120.85 |
| [findLastIndex](https://github.com/umsungjun/hidash/blob/main/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 4.62x faster | 4873.83 🏆 | 1054.44 |
| [first](https://github.com/umsungjun/hidash/blob/main/src/first.ts) | src/first.bench.ts > first performance | hidash is 9.22x faster | 524.78 🏆 | 56.92 |
| [flatten](https://github.com/umsungjun/hidash/blob/main/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.24x faster | 76.39 🏆 | 61.70 |
| [groupBy](https://github.com/umsungjun/hidash/blob/main/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.22x faster | 1127.99 | 1379.91 🏆 |
| [gt](https://github.com/umsungjun/hidash/blob/main/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.53x faster | 175.78 🏆 | 49.81 |
| [has](https://github.com/umsungjun/hidash/blob/main/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.59x faster | 490.60 🏆 | 189.63 |
| [includes](https://github.com/umsungjun/hidash/blob/main/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.31x faster | 40.28 🏆 | 6.39 |
| [isArray](https://github.com/umsungjun/hidash/blob/main/src/isArray.ts) | src/isArray.bench.ts > isArray performance | hidash is 8.86x faster | 508.22 🏆 | 57.38 |
| [isEmpty](https://github.com/umsungjun/hidash/blob/main/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.78x faster | 208.31 🏆 | 19.32 |
| [isEqual](https://github.com/umsungjun/hidash/blob/main/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.32x faster | 5.52 🏆 | 0.87 |
| [isFunction](https://github.com/umsungjun/hidash/blob/main/src/isFunction.ts) | src/isFunction.bench.ts > isFunction performance | hidash is 20.55x faster | 3242.73 🏆 | 157.76 |
| [isMap](https://github.com/umsungjun/hidash/blob/main/src/isMap.ts) | src/isMap.bench.ts > isMap performance | hidash is 3.06x faster | 2490.89 🏆 | 813.25 |
| [keys](https://github.com/umsungjun/hidash/blob/main/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 3.00x faster | 16.17 🏆 | 5.39 |
| [last](https://github.com/umsungjun/hidash/blob/main/src/last.ts) | src/last.bench.ts > last performance | hidash is 4.65x faster | 2386.95 🏆 | 512.86 |
| [lt](https://github.com/umsungjun/hidash/blob/main/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.32x faster | 166.41 🏆 | 50.09 |
| [map](https://github.com/umsungjun/hidash/blob/main/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.60x faster | 603.42 🏆 | 376.46 |
| [mapValues](https://github.com/umsungjun/hidash/blob/main/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.52x faster | 508.36 🏆 | 334.99 |
| [merge](https://github.com/umsungjun/hidash/blob/main/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.23x faster | 274.05 🏆 | 222.01 |
| [omit](https://github.com/umsungjun/hidash/blob/main/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.99x faster | 110.19 🏆 | 27.65 |
| [pick](https://github.com/umsungjun/hidash/blob/main/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.42x faster | 170.68 🏆 | 31.48 |
| [pickBy](https://github.com/umsungjun/hidash/blob/main/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.22x faster | 2.30 🏆 | 1.88 |
| [range](https://github.com/umsungjun/hidash/blob/main/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.58x faster | 30.85 🏆 | 19.55 |
| [repeat](https://github.com/umsungjun/hidash/blob/main/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.49x faster | 1663.13 🏆 | 667.44 |
| [shuffle](https://github.com/umsungjun/hidash/blob/main/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.92x faster | 18.56 🏆 | 6.35 |
| [size](https://github.com/umsungjun/hidash/blob/main/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.01x faster | 62.32 | 63.06 🏆 |
| [some](https://github.com/umsungjun/hidash/blob/main/src/some.ts) | src/some.bench.ts > some performance | hidash is 2.03x faster | 18.68 🏆 | 9.20 |
| [sum](https://github.com/umsungjun/hidash/blob/main/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 3.12x faster | 185.32 🏆 | 59.44 |
| [sumBy](https://github.com/umsungjun/hidash/blob/main/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.33x faster | 136.48 🏆 | 102.58 |
| [toNumber](https://github.com/umsungjun/hidash/blob/main/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.18x faster | 95.82 🏆 | 11.71 |
| [toPairs](https://github.com/umsungjun/hidash/blob/main/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.95x faster | 94.18 🏆 | 31.91 |
| [toString](https://github.com/umsungjun/hidash/blob/main/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.07x faster | 35.49 🏆 | 17.14 |
| [transform](https://github.com/umsungjun/hidash/blob/main/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.92x faster | 235.15 🏆 | 80.57 |
| [trim](https://github.com/umsungjun/hidash/blob/main/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.94x faster | 34.87 🏆 | 11.86 |
| [union](https://github.com/umsungjun/hidash/blob/main/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.71x faster | 95.34 🏆 | 55.63 |
| [uniq](https://github.com/umsungjun/hidash/blob/main/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.49x faster | 118.05 🏆 | 79.13 |
| [uniqBy](https://github.com/umsungjun/hidash/blob/main/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.78x faster | 66.49 🏆 | 37.32 |
| [uniqWith](https://github.com/umsungjun/hidash/blob/main/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.04x faster | 16.30 | 17.02 🏆 |
| [unzip](https://github.com/umsungjun/hidash/blob/main/src/unzip.ts) | src/unzip.bench.ts > unzip performance | hidash is 1.31x faster | 83.25 🏆 | 63.68 |
| [values](https://github.com/umsungjun/hidash/blob/main/src/values.ts) | src/values.bench.ts > values performance | hidash is 21.73x faster | 137.54 🏆 | 6.33 |
| [zip](https://github.com/umsungjun/hidash/blob/main/src/zip.ts) | src/zip.bench.ts > zip performance | hidash is 1.13x faster | 49.30 🏆 | 43.57 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
> 
> ⚠️ indicates where hidash is slower than lodash.
> 
> 🏆 indicates the faster implementation.


_Last updated: 2025-05-14_

*Last updated by [GitHub Actions](https://github.com/umsungjun/hidash/actions/runs/15032962228)*