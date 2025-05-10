# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: TINY (10) | lodash is 1.00x faster | 7697420.60 | 7697420.60 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: SMALL (100) | lodash is 1.00x faster | 1315112.35 | 1315112.35 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: MEDIUM (1000) | lodash is 1.00x faster | 141958.49 | 141958.49 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: LARGE (10000) | lodash is 1.00x faster | 13997.03 | 13997.03 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: TINY (10) | lodash is 1.00x faster | 1377301.01 | 1377301.01 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: SMALL (100) | lodash is 1.00x faster | 160326.57 | 160326.57 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: MEDIUM (1000) | lodash is 1.00x faster | 16347.78 | 16347.78 🏆 |
| [tip](https://github.com/NaverPayDev/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: LARGE (10000) | lodash is 1.00x faster | 1636.48 | 1636.48 🏆 |
| [assign](https://github.com/NaverPayDev/hidash/blob/main/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.48x faster | 27.87 🏆 | 11.24 |
| [before](https://github.com/NaverPayDev/hidash/blob/main/src/before.ts) ⚠️ | src/before.bench.ts > before performance | lodash is 1.63x faster | 341780.38 | 557910.69 🏆 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/main/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.61x faster | 634.13 🏆 | 242.57 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/main/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.20x faster | 111.20 🏆 | 50.49 |
| [clone](https://github.com/NaverPayDev/hidash/blob/main/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.88x faster | 55.51 🏆 | 3.29 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/main/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.17x faster | 1.87 🏆 | 0.86 |
| [difference](https://github.com/NaverPayDev/hidash/blob/main/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.32x faster | 298.01 🏆 | 89.74 |
| [every](https://github.com/NaverPayDev/hidash/blob/main/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.84x faster | 50.60 🏆 | 27.50 |
| [filter](https://github.com/NaverPayDev/hidash/blob/main/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 3.80x faster | 16.69 🏆 | 4.39 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/main/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.03x faster | 4869.86 🏆 | 967.29 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/main/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 4.80x faster | 5031.09 🏆 | 1048.89 |
| [first](https://github.com/NaverPayDev/hidash/blob/main/src/first.ts) | src/first.bench.ts > first performance | hidash is 8.46x faster | 504.92 🏆 | 59.68 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/main/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.24x faster | 71.41 🏆 | 57.61 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/main/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.22x faster | 1056.39 | 1289.64 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/main/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.39x faster | 167.91 🏆 | 49.60 |
| [has](https://github.com/NaverPayDev/hidash/blob/main/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.45x faster | 485.92 🏆 | 198.06 |
| [includes](https://github.com/NaverPayDev/hidash/blob/main/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.62x faster | 38.85 🏆 | 5.87 |
| [isArray](https://github.com/NaverPayDev/hidash/blob/main/src/isArray.ts) | src/isArray.bench.ts > isArray performance | hidash is 9.24x faster | 526.71 🏆 | 56.98 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/main/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.76x faster | 208.21 🏆 | 19.36 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/main/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 2.39x faster | 2.04 🏆 | 0.86 |
| [isFunction](https://github.com/NaverPayDev/hidash/blob/main/src/isFunction.ts) | src/isFunction.bench.ts > isFunction performance | hidash is 19.84x faster | 3138.36 🏆 | 158.14 |
| [keys](https://github.com/NaverPayDev/hidash/blob/main/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.94x faster | 15.33 🏆 | 5.22 |
| [lt](https://github.com/NaverPayDev/hidash/blob/main/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.42x faster | 172.56 🏆 | 50.43 |
| [map](https://github.com/NaverPayDev/hidash/blob/main/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.61x faster | 587.21 🏆 | 365.12 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/main/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.49x faster | 500.50 🏆 | 334.88 |
| [merge](https://github.com/NaverPayDev/hidash/blob/main/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.25x faster | 273.93 🏆 | 218.30 |
| [omit](https://github.com/NaverPayDev/hidash/blob/main/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.16x faster | 111.66 🏆 | 26.86 |
| [pick](https://github.com/NaverPayDev/hidash/blob/main/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.33x faster | 171.54 🏆 | 32.17 |
| [pickBy](https://github.com/NaverPayDev/hidash/blob/main/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.21x faster | 2.28 🏆 | 1.89 |
| [range](https://github.com/NaverPayDev/hidash/blob/main/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.60x faster | 30.69 🏆 | 19.22 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/main/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.56x faster | 1669.60 🏆 | 651.16 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/main/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.95x faster | 18.16 🏆 | 6.16 |
| [size](https://github.com/NaverPayDev/hidash/blob/main/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.01x faster | 61.50 | 61.84 🏆 |
| [some](https://github.com/NaverPayDev/hidash/blob/main/src/some.ts) | src/some.bench.ts > some performance | hidash is 4.44x faster | 18.61 🏆 | 4.19 |
| [sum](https://github.com/NaverPayDev/hidash/blob/main/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 3.11x faster | 185.15 🏆 | 59.53 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/main/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.39x faster | 140.00 🏆 | 101.05 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/main/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.40x faster | 96.23 🏆 | 11.45 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/main/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 3.00x faster | 92.33 🏆 | 30.79 |
| [toString](https://github.com/NaverPayDev/hidash/blob/main/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.01x faster | 34.01 🏆 | 16.94 |
| [transform](https://github.com/NaverPayDev/hidash/blob/main/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 3.10x faster | 249.11 🏆 | 80.38 |
| [trim](https://github.com/NaverPayDev/hidash/blob/main/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.99x faster | 35.22 🏆 | 11.76 |
| [union](https://github.com/NaverPayDev/hidash/blob/main/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.76x faster | 94.58 🏆 | 53.76 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/main/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.49x faster | 117.15 🏆 | 78.58 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/main/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.75x faster | 65.11 🏆 | 37.28 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/main/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.01x faster | 16.25 | 16.48 🏆 |
| [unzip](https://github.com/NaverPayDev/hidash/blob/main/src/unzip.ts) | src/unzip.bench.ts > unzip performance | hidash is 1.37x faster | 85.66 🏆 | 62.73 |
| [values](https://github.com/NaverPayDev/hidash/blob/main/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.35x faster | 138.23 🏆 | 6.19 |
| [zip](https://github.com/NaverPayDev/hidash/blob/main/src/zip.ts) | src/zip.bench.ts > zip performance | hidash is 1.14x faster | 49.46 🏆 | 43.25 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
> 
> ⚠️ indicates where hidash is slower than lodash.
> 
> 🏆 indicates the faster implementation.


_Last updated: 2025-05-10_

*Last updated by [GitHub Actions](https://github.com/NaverPayDev/hidash/actions/runs/14946435747)*