# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.40x faster | 27.22 🏆 | 11.36 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.40x faster | 643.62 🏆 | 267.69 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.23x faster | 111.13 🏆 | 49.79 |
| [clone](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.71x faster | 54.80 🏆 | 3.28 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.25x faster | 1.99 🏆 | 0.89 |
| [difference](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.30x faster | 310.84 🏆 | 94.13 |
| [every](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.90x faster | 48.10 🏆 | 25.30 |
| [filter](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 2.70x faster | 17.61 🏆 | 6.53 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.86x faster | 6445.76 🏆 | 1100.49 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.74x faster | 6241.32 🏆 | 1087.24 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.14x faster | 70.94 🏆 | 62.09 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.02x faster | 1206.59 | 1236.70 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.14x faster | 165.18 🏆 | 52.62 |
| [has](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.30x faster | 489.75 🏆 | 212.93 |
| [includes](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.54x faster | 40.38 🏆 | 6.18 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.83x faster | 220.16 🏆 | 20.33 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.48x faster | 5.51 🏆 | 0.85 |
| [keys](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 3.03x faster | 15.64 🏆 | 5.16 |
| [lt](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.00x faster | 152.74 🏆 | 50.95 |
| [map](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.56x faster | 577.83 🏆 | 369.81 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.23x faster | 310.29 🏆 | 253.23 |
| [merge](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.21x faster | 261.40 🏆 | 216.74 |
| [omit](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.00x faster | 110.99 🏆 | 27.77 |
| [pick](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 4.92x faster | 166.43 🏆 | 33.86 |
| [pickBy](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.23x faster | 2.35 🏆 | 1.91 |
| [range](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.62x faster | 31.04 🏆 | 19.21 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.53x faster | 1694.33 🏆 | 670.85 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.96x faster | 19.10 🏆 | 6.45 |
| [size](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.03x faster | 63.84 🏆 | 61.88 |
| [some](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/some.ts) | src/some.bench.ts > some performance | hidash is 2.43x faster | 18.86 🏆 | 7.77 |
| [sum](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.58x faster | 154.55 🏆 | 59.92 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.42x faster | 126.35 🏆 | 89.28 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.18x faster | 97.88 🏆 | 11.96 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 3.02x faster | 92.19 🏆 | 30.57 |
| [toString](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.02x faster | 35.85 🏆 | 17.74 |
| [transform](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 3.30x faster | 251.63 🏆 | 76.34 |
| [trim](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 3.01x faster | 35.54 🏆 | 11.82 |
| [union](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.73x faster | 95.74 🏆 | 55.21 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.47x faster | 117.29 🏆 | 79.96 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.76x faster | 65.63 🏆 | 37.34 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.28 | 17.04 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/83b005094cd97990a5b688a6a187500ab96963c5/src/values.ts) | src/values.bench.ts > values performance | hidash is 21.73x faster | 138.34 🏆 | 6.37 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2025-02-09_
