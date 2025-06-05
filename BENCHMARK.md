# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [tip](https://github.com/umsungjun/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: TINY (10) | lodash is 1.00x faster | 7593250.72 | 7593250.72 🏆 |
| [tip](https://github.com/umsungjun/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: SMALL (100) | lodash is 1.00x faster | 1323780.90 | 1323780.90 🏆 |
| [tip](https://github.com/umsungjun/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: MEDIUM (1000) | lodash is 1.00x faster | 143169.83 | 143169.83 🏆 |
| [tip](https://github.com/umsungjun/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Function creation benchmark with different sizes > Array size: LARGE (10000) | lodash is 1.00x faster | 14361.67 | 14361.67 🏆 |
| [tip](https://github.com/umsungjun/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: TINY (10) | lodash is 1.00x faster | 1389649.45 | 1389649.45 🏆 |
| [tip](https://github.com/umsungjun/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: SMALL (100) | lodash is 1.00x faster | 161702.68 | 161702.68 🏆 |
| [tip](https://github.com/umsungjun/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: MEDIUM (1000) | lodash is 1.00x faster | 16650.47 | 16650.47 🏆 |
| [tip](https://github.com/umsungjun/hidash/blob/main/src/tip.ts) ⚠️ | tip.bench.ts > Map vs Object with different sizes > Size: LARGE (10000) | lodash is 1.00x faster | 1678.91 | 1678.91 🏆 |
| [assign](https://github.com/umsungjun/hidash/blob/main/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.38x faster | 26.12 🏆 | 10.98 |
| [before](https://github.com/umsungjun/hidash/blob/main/src/before.ts) ⚠️ | src/before.bench.ts > before performance | lodash is 1.65x faster | 337200.70 | 557802.07 🏆 |
| [chunk](https://github.com/umsungjun/hidash/blob/main/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.20x faster | 590.22 🏆 | 268.44 |
| [clamp](https://github.com/umsungjun/hidash/blob/main/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.13x faster | 112.88 🏆 | 52.96 |
| [clone](https://github.com/umsungjun/hidash/blob/main/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.43x faster | 56.72 🏆 | 3.25 |
| [cloneDeep](https://github.com/umsungjun/hidash/blob/main/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.12x faster | 1.89 🏆 | 0.89 |
| [difference](https://github.com/umsungjun/hidash/blob/main/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.19x faster | 292.66 🏆 | 91.62 |
| [every](https://github.com/umsungjun/hidash/blob/main/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.85x faster | 50.83 🏆 | 27.54 |
| [filter](https://github.com/umsungjun/hidash/blob/main/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 3.25x faster | 16.66 🏆 | 5.13 |
| [find](https://github.com/umsungjun/hidash/blob/main/src/find.ts) | src/find.bench.ts > find performance | hidash is 3.96x faster | 1610.70 🏆 | 406.41 |
| [findIndex](https://github.com/umsungjun/hidash/blob/main/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 4.25x faster | 4867.37 🏆 | 1146.09 |
| [findLastIndex](https://github.com/umsungjun/hidash/blob/main/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 4.45x faster | 5039.49 🏆 | 1132.72 |
| [first](https://github.com/umsungjun/hidash/blob/main/src/first.ts) | src/first.bench.ts > first performance | hidash is 8.03x faster | 498.69 🏆 | 62.11 |
| [flatten](https://github.com/umsungjun/hidash/blob/main/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.38x faster | 73.86 🏆 | 53.39 |
| [get](https://github.com/umsungjun/hidash/blob/main/src/get.ts) | src/get.bench.ts > get performance | hidash is 2.87x faster | 1101.22 🏆 | 383.27 |
| [groupBy](https://github.com/umsungjun/hidash/blob/main/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.27x faster | 1085.38 | 1382.11 🏆 |
| [gt](https://github.com/umsungjun/hidash/blob/main/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.48x faster | 177.56 🏆 | 50.99 |
| [has](https://github.com/umsungjun/hidash/blob/main/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.35x faster | 477.22 🏆 | 203.23 |
| [includes](https://github.com/umsungjun/hidash/blob/main/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.07x faster | 38.75 🏆 | 6.38 |
| [isArray](https://github.com/umsungjun/hidash/blob/main/src/isArray.ts) | src/isArray.bench.ts > isArray performance | hidash is 8.36x faster | 503.13 🏆 | 60.20 |
| [isEmpty](https://github.com/umsungjun/hidash/blob/main/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 9.89x faster | 197.64 🏆 | 19.98 |
| [isEqual](https://github.com/umsungjun/hidash/blob/main/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.45x faster | 5.47 🏆 | 0.85 |
| [isFunction](https://github.com/umsungjun/hidash/blob/main/src/isFunction.ts) | src/isFunction.bench.ts > isFunction performance | hidash is 19.90x faster | 3190.89 🏆 | 160.36 |
| [isMap](https://github.com/umsungjun/hidash/blob/main/src/isMap.ts) | src/isMap.bench.ts > isMap performance | hidash is 2.90x faster | 2421.97 🏆 | 834.75 |
| [isNumber](https://github.com/umsungjun/hidash/blob/main/src/isNumber.ts) | src/isNumber.bench.ts > isNumber performance | hidash is 7.23x faster | 2988.39 🏆 | 413.20 |
| [keys](https://github.com/umsungjun/hidash/blob/main/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.72x faster | 14.29 🏆 | 5.26 |
| [last](https://github.com/umsungjun/hidash/blob/main/src/last.ts) | src/last.bench.ts > last performance | hidash is 4.29x faster | 2331.77 🏆 | 542.92 |
| [lt](https://github.com/umsungjun/hidash/blob/main/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.23x faster | 169.73 🏆 | 52.53 |
| [map](https://github.com/umsungjun/hidash/blob/main/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.62x faster | 604.07 🏆 | 373.25 |
| [mapValues](https://github.com/umsungjun/hidash/blob/main/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.35x faster | 479.46 🏆 | 355.99 |
| [merge](https://github.com/umsungjun/hidash/blob/main/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.26x faster | 277.40 🏆 | 220.84 |
| [omit](https://github.com/umsungjun/hidash/blob/main/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.01x faster | 107.69 🏆 | 26.87 |
| [once](https://github.com/umsungjun/hidash/blob/main/src/once.ts) ⚠️ | src/once.bench.ts > once performance | lodash is 1.56x faster | 433347.30 | 674276.91 🏆 |
| [pick](https://github.com/umsungjun/hidash/blob/main/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.26x faster | 171.05 🏆 | 32.49 |
| [pickBy](https://github.com/umsungjun/hidash/blob/main/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.24x faster | 2.29 🏆 | 1.85 |
| [range](https://github.com/umsungjun/hidash/blob/main/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.50x faster | 31.02 🏆 | 20.63 |
| [repeat](https://github.com/umsungjun/hidash/blob/main/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.42x faster | 1674.75 🏆 | 692.48 |
| [reverse](https://github.com/umsungjun/hidash/blob/main/src/reverse.ts) | src/reverse.bench.ts > reverse performance | hidash is 1.78x faster | 1085.34 🏆 | 611.27 |
| [shuffle](https://github.com/umsungjun/hidash/blob/main/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.91x faster | 18.11 🏆 | 6.21 |
| [size](https://github.com/umsungjun/hidash/blob/main/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.01x faster | 63.67 | 64.19 🏆 |
| [some](https://github.com/umsungjun/hidash/blob/main/src/some.ts) | src/some.bench.ts > some performance | hidash is 3.23x faster | 18.55 🏆 | 5.75 |
| [sum](https://github.com/umsungjun/hidash/blob/main/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 3.07x faster | 184.89 🏆 | 60.27 |
| [sumBy](https://github.com/umsungjun/hidash/blob/main/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.37x faster | 141.92 🏆 | 103.52 |
| [toNumber](https://github.com/umsungjun/hidash/blob/main/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 7.90x faster | 93.32 🏆 | 11.81 |
| [toPairs](https://github.com/umsungjun/hidash/blob/main/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.95x faster | 93.42 🏆 | 31.71 |
| [toString](https://github.com/umsungjun/hidash/blob/main/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.91x faster | 33.28 🏆 | 17.46 |
| [transform](https://github.com/umsungjun/hidash/blob/main/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.93x faster | 239.20 🏆 | 81.56 |
| [trim](https://github.com/umsungjun/hidash/blob/main/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 3.05x faster | 34.28 🏆 | 11.24 |
| [union](https://github.com/umsungjun/hidash/blob/main/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.83x faster | 93.51 🏆 | 51.16 |
| [uniq](https://github.com/umsungjun/hidash/blob/main/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.47x faster | 115.15 🏆 | 78.59 |
| [uniqBy](https://github.com/umsungjun/hidash/blob/main/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.75x faster | 65.87 🏆 | 37.70 |
| [uniqWith](https://github.com/umsungjun/hidash/blob/main/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.28 | 17.02 🏆 |
| [unzip](https://github.com/umsungjun/hidash/blob/main/src/unzip.ts) | src/unzip.bench.ts > unzip performance | hidash is 1.38x faster | 87.58 🏆 | 63.38 |
| [values](https://github.com/umsungjun/hidash/blob/main/src/values.ts) | src/values.bench.ts > values performance | hidash is 21.15x faster | 129.35 🏆 | 6.11 |
| [zip](https://github.com/umsungjun/hidash/blob/main/src/zip.ts) | src/zip.bench.ts > zip performance | hidash is 1.14x faster | 48.93 🏆 | 43.06 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
> 
> ⚠️ indicates where hidash is slower than lodash.
> 
> 🏆 indicates the faster implementation.


_Last updated: 2025-06-05_

*Last updated by [GitHub Actions](https://github.com/umsungjun/hidash/actions/runs/15460348206)*