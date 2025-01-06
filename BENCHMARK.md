# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.41x faster | 26.81 🏆 | 11.10 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.28x faster | 623.07 🏆 | 273.23 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.25x faster | 110.42 🏆 | 49.06 |
| [clone](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.63x faster | 55.57 🏆 | 3.34 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.38x faster | 2.07 🏆 | 0.87 |
| [difference](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.23x faster | 293.49 🏆 | 90.74 |
| [every](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.78x faster | 48.62 🏆 | 27.30 |
| [filter](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 2.94x faster | 17.36 🏆 | 5.90 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.61x faster | 6219.54 🏆 | 1108.70 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.67x faster | 6380.20 🏆 | 1125.32 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.50x faster | 75.16 🏆 | 50.18 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.05x faster | 1152.84 | 1205.49 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.18x faster | 163.95 🏆 | 51.57 |
| [has](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.29x faster | 475.28 🏆 | 207.45 |
| [includes](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.37x faster | 38.98 🏆 | 6.12 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.70x faster | 211.14 🏆 | 19.73 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 2.40x faster | 2.02 🏆 | 0.84 |
| [keys](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.97x faster | 15.55 🏆 | 5.23 |
| [lt](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.25x faster | 164.98 🏆 | 50.73 |
| [map](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.58x faster | 584.79 🏆 | 370.10 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.24x faster | 301.41 🏆 | 242.96 |
| [merge](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.25x faster | 270.21 🏆 | 216.64 |
| [omit](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.89x faster | 103.64 🏆 | 26.61 |
| [pick](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.17x faster | 170.27 🏆 | 32.92 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.58x faster | 1683.07 🏆 | 652.39 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.96x faster | 18.58 🏆 | 6.27 |
| [size](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.00x faster | 62.70 | 62.72 🏆 |
| [some](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/some.ts) | src/some.bench.ts > some performance | hidash is 3.94x faster | 18.85 🏆 | 4.79 |
| [sum](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.60x faster | 153.79 🏆 | 59.12 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.43x faster | 125.36 🏆 | 87.64 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 7.89x faster | 92.15 🏆 | 11.68 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 3.00x faster | 91.94 🏆 | 30.65 |
| [toString](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.02x faster | 35.37 🏆 | 17.53 |
| [transform](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.73x faster | 230.51 🏆 | 84.37 |
| [trim](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.80x faster | 34.45 🏆 | 12.32 |
| [union](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.77x faster | 94.85 🏆 | 53.51 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.51x faster | 118.05 🏆 | 78.24 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.74x faster | 65.33 🏆 | 37.57 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.08x faster | 15.84 | 17.04 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/27ad0c2b143e6bfaf48c246d2a78938df89cf5b5/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.45x faster | 137.14 🏆 | 6.11 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2025-01-06_
