# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.57x faster | 27.94 🏆 | 10.88 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.33x faster | 634.52 🏆 | 272.80 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.43x faster | 112.60 🏆 | 46.34 |
| [clone](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.83x faster | 57.20 🏆 | 3.21 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.26x faster | 1.95 🏆 | 0.86 |
| [difference](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.19x faster | 303.06 🏆 | 95.09 |
| [every](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.87x faster | 51.33 🏆 | 27.41 |
| [filter](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 2.56x faster | 17.50 🏆 | 6.85 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 4.81x faster | 4847.81 🏆 | 1007.50 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.08x faster | 4965.83 🏆 | 977.37 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.15x faster | 68.25 🏆 | 59.50 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.23x faster | 1107.25 | 1364.08 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.36x faster | 167.32 🏆 | 49.86 |
| [has](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.46x faster | 482.53 🏆 | 195.80 |
| [includes](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 7.31x faster | 40.14 🏆 | 5.49 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.82x faster | 211.57 🏆 | 19.55 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 2.51x faster | 2.00 🏆 | 0.80 |
| [keys](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.96x faster | 15.83 🏆 | 5.35 |
| [lt](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.31x faster | 168.00 🏆 | 50.68 |
| [map](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.65x faster | 607.55 🏆 | 368.91 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.48x faster | 503.10 🏆 | 341.04 |
| [merge](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.26x faster | 276.07 🏆 | 218.29 |
| [omit](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.10x faster | 112.09 🏆 | 27.36 |
| [pick](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 4.95x faster | 164.13 🏆 | 33.14 |
| [pickBy](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.25x faster | 2.29 🏆 | 1.83 |
| [range](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.63x faster | 31.06 🏆 | 19.09 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.69x faster | 1698.53 🏆 | 631.65 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.93x faster | 19.05 🏆 | 6.51 |
| [size](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.01x faster | 63.56 | 64.00 🏆 |
| [some](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/some.ts) | src/some.bench.ts > some performance | hidash is 3.70x faster | 18.87 🏆 | 5.10 |
| [sum](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.62x faster | 155.00 🏆 | 59.19 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.39x faster | 142.39 🏆 | 102.34 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 7.96x faster | 93.09 🏆 | 11.70 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.89x faster | 92.00 🏆 | 31.78 |
| [toString](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.96x faster | 33.65 🏆 | 17.13 |
| [transform](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.94x faster | 242.79 🏆 | 82.46 |
| [trim](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.97x faster | 34.78 🏆 | 11.73 |
| [union](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.72x faster | 95.49 🏆 | 55.65 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.48x faster | 117.20 🏆 | 79.41 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.74x faster | 65.53 🏆 | 37.73 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.03x faster | 16.60 | 17.07 🏆 |
| [unzip](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/unzip.ts) | src/unzip.bench.ts > unzip performance | hidash is 1.32x faster | 84.45 🏆 | 63.77 |
| [values](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/values.ts) | src/values.bench.ts > values performance | hidash is 23.31x faster | 136.97 🏆 | 5.87 |
| [zip](https://github.com/NaverPayDev/hidash/blob/c6b7fd1ec07ab1d755ff3982d257407f6cab196e/src/zip.ts) | src/zip.bench.ts > zip performance | hidash is 1.18x faster | 49.24 🏆 | 41.78 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2025-03-13_
