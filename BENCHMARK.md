# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: TINY (10) | lodash is 1.00x faster | 7452086.88 | 7452086.88 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: SMALL (100) | lodash is 1.00x faster | 1327026.40 | 1327026.40 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: MEDIUM (1000) | lodash is 1.00x faster | 145287.13 | 145287.13 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: LARGE (10000) | lodash is 1.00x faster | 14729.09 | 14729.09 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: TINY (10) | lodash is 1.00x faster | 1400677.56 | 1400677.56 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: SMALL (100) | lodash is 1.00x faster | 161252.29 | 161252.29 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: MEDIUM (1000) | lodash is 1.00x faster | 16349.66 | 16349.66 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: LARGE (10000) | lodash is 1.00x faster | 1645.17 | 1645.17 🏆 |
| [assign](https://github.com/NaverPayDev/hidash/blob/main/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.56x faster | 28.08 🏆 | 10.98 |
| [before](https://github.com/NaverPayDev/hidash/blob/main/src/before.ts) ⚠️ | src/before.bench.ts > before performance | lodash is 1.63x faster | 342233.55 | 556887.99 🏆 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/main/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.57x faster | 634.42 🏆 | 247.18 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/main/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.22x faster | 111.85 🏆 | 50.45 |
| [clone](https://github.com/NaverPayDev/hidash/blob/main/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.27x faster | 53.74 🏆 | 3.30 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/main/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.12x faster | 1.88 🏆 | 0.88 |
| [difference](https://github.com/NaverPayDev/hidash/blob/main/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.30x faster | 300.79 🏆 | 91.09 |
| [every](https://github.com/NaverPayDev/hidash/blob/main/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.84x faster | 50.96 🏆 | 27.75 |
| [filter](https://github.com/NaverPayDev/hidash/blob/main/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 3.16x faster | 16.70 🏆 | 5.28 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/main/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 4.76x faster | 5010.59 🏆 | 1051.98 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/main/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 4.66x faster | 4654.21 🏆 | 998.40 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/main/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.19x faster | 71.96 🏆 | 60.27 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/main/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.14x faster | 1121.93 | 1281.95 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/main/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.50x faster | 170.86 🏆 | 48.85 |
| [has](https://github.com/NaverPayDev/hidash/blob/main/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.42x faster | 486.56 🏆 | 200.75 |
| [includes](https://github.com/NaverPayDev/hidash/blob/main/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 7.01x faster | 40.22 🏆 | 5.74 |
| [isArray](https://github.com/NaverPayDev/hidash/blob/main/src/isArray.ts) | src/isArray.bench.ts > isArray performance | hidash is 8.78x faster | 503.92 🏆 | 57.42 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/main/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.59x faster | 206.42 🏆 | 19.50 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/main/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.45x faster | 5.45 🏆 | 0.84 |
| [isFunction](https://github.com/NaverPayDev/hidash/blob/main/src/isFunction.ts) | src/isFunction.bench.ts > isFunction performance | hidash is 20.38x faster | 3226.13 🏆 | 158.32 |
| [keys](https://github.com/NaverPayDev/hidash/blob/main/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 3.00x faster | 16.13 🏆 | 5.38 |
| [lt](https://github.com/NaverPayDev/hidash/blob/main/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.39x faster | 171.61 🏆 | 50.59 |
| [map](https://github.com/NaverPayDev/hidash/blob/main/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.66x faster | 594.46 🏆 | 358.95 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/main/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.44x faster | 505.59 🏆 | 351.25 |
| [merge](https://github.com/NaverPayDev/hidash/blob/main/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.26x faster | 277.57 🏆 | 220.90 |
| [omit](https://github.com/NaverPayDev/hidash/blob/main/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.98x faster | 109.09 🏆 | 27.43 |
| [pick](https://github.com/NaverPayDev/hidash/blob/main/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.32x faster | 167.99 🏆 | 31.58 |
| [pickBy](https://github.com/NaverPayDev/hidash/blob/main/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.22x faster | 2.28 🏆 | 1.87 |
| [range](https://github.com/NaverPayDev/hidash/blob/main/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.62x faster | 30.69 🏆 | 18.96 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/main/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.70x faster | 1659.02 🏆 | 615.58 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/main/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.93x faster | 18.32 🏆 | 6.25 |
| [size](https://github.com/NaverPayDev/hidash/blob/main/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.03x faster | 61.68 | 63.39 🏆 |
| [some](https://github.com/NaverPayDev/hidash/blob/main/src/some.ts) | src/some.bench.ts > some performance | hidash is 2.58x faster | 18.56 🏆 | 7.21 |
| [sum](https://github.com/NaverPayDev/hidash/blob/main/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 3.12x faster | 186.10 🏆 | 59.64 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/main/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.35x faster | 136.88 🏆 | 101.62 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/main/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.20x faster | 94.30 🏆 | 11.51 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/main/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.93x faster | 92.22 🏆 | 31.50 |
| [toString](https://github.com/NaverPayDev/hidash/blob/main/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.03x faster | 34.77 🏆 | 17.16 |
| [transform](https://github.com/NaverPayDev/hidash/blob/main/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 3.00x faster | 247.59 🏆 | 82.66 |
| [trim](https://github.com/NaverPayDev/hidash/blob/main/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.88x faster | 34.48 🏆 | 11.95 |
| [union](https://github.com/NaverPayDev/hidash/blob/main/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.78x faster | 95.25 🏆 | 53.37 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/main/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.49x faster | 117.54 🏆 | 79.08 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/main/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.75x faster | 65.43 🏆 | 37.39 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/main/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.27 | 17.02 🏆 |
| [unzip](https://github.com/NaverPayDev/hidash/blob/main/src/unzip.ts) | src/unzip.bench.ts > unzip performance | hidash is 1.32x faster | 83.96 🏆 | 63.59 |
| [values](https://github.com/NaverPayDev/hidash/blob/main/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.43x faster | 139.48 🏆 | 6.22 |
| [zip](https://github.com/NaverPayDev/hidash/blob/main/src/zip.ts) | src/zip.bench.ts > zip performance | hidash is 1.14x faster | 49.10 🏆 | 43.15 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
> 
> ⚠️ indicates where hidash is slower than lodash.
> 
> 🏆 indicates the faster implementation.


_Last updated: 2025-05-07_

*Last updated by [GitHub Actions](https://github.com/NaverPayDev/hidash/actions/runs/14878134005)*