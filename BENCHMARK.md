# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.58x faster | 28.70 🏆 | 11.11 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.44x faster | 644.84 🏆 | 264.06 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.42x faster | 112.57 🏆 | 46.58 |
| [clone](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.24x faster | 56.57 🏆 | 3.28 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.21x faster | 1.96 🏆 | 0.89 |
| [difference](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.22x faster | 300.05 🏆 | 93.23 |
| [every](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.90x faster | 50.89 🏆 | 26.75 |
| [filter](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 2.13x faster | 16.89 🏆 | 7.92 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 6.03x faster | 6433.88 🏆 | 1066.79 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.68x faster | 6237.04 🏆 | 1097.70 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.11x faster | 45.32 🏆 | 40.72 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.15x faster | 1038.98 | 1199.50 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.43x faster | 169.80 🏆 | 49.53 |
| [has](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.44x faster | 488.95 🏆 | 200.42 |
| [includes](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.84x faster | 40.00 🏆 | 5.84 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 11.46x faster | 225.15 🏆 | 19.64 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 2.40x faster | 2.02 🏆 | 0.84 |
| [keys](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.94x faster | 15.70 🏆 | 5.35 |
| [lt](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.29x faster | 164.22 🏆 | 49.90 |
| [map](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.62x faster | 599.25 🏆 | 369.50 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.36x faster | 334.45 🏆 | 246.27 |
| [merge](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.26x faster | 276.71 🏆 | 219.50 |
| [omit](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.05x faster | 109.48 🏆 | 27.01 |
| [pick](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.13x faster | 168.42 🏆 | 32.82 |
| [pickBy](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.25x faster | 2.27 🏆 | 1.82 |
| [range](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.53x faster | 30.83 🏆 | 20.10 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.60x faster | 1690.40 🏆 | 650.96 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.99x faster | 18.79 🏆 | 6.28 |
| [size](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.02x faster | 61.82 | 63.16 🏆 |
| [some](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/some.ts) | src/some.bench.ts > some performance | hidash is 3.08x faster | 18.81 🏆 | 6.11 |
| [sum](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.57x faster | 154.48 🏆 | 60.10 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.44x faster | 125.76 🏆 | 87.60 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.18x faster | 96.55 🏆 | 11.81 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.93x faster | 92.13 🏆 | 31.46 |
| [toString](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.07x faster | 35.39 🏆 | 17.08 |
| [transform](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.82x faster | 241.62 🏆 | 85.66 |
| [trim](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.87x faster | 34.69 🏆 | 12.08 |
| [union](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.67x faster | 92.19 🏆 | 55.29 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.48x faster | 116.35 🏆 | 78.58 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.74x faster | 65.29 🏆 | 37.52 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.06x faster | 16.03 | 16.96 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/fde12a38c1291e47c697ebbd1e8dcb9aea4ff862/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.59x faster | 137.33 🏆 | 6.08 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2025-03-04_
