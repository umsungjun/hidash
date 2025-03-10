# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.62x faster | 28.41 🏆 | 10.84 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.50x faster | 600.55 🏆 | 239.81 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.31x faster | 111.46 🏆 | 48.19 |
| [clone](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.62x faster | 55.05 🏆 | 3.31 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.18x faster | 1.91 🏆 | 0.87 |
| [difference](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.28x faster | 300.79 🏆 | 91.65 |
| [every](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.84x faster | 49.61 🏆 | 26.93 |
| [filter](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 2.30x faster | 17.32 🏆 | 7.53 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.98x faster | 6436.72 🏆 | 1075.93 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.73x faster | 6428.21 🏆 | 1121.06 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.28x faster | 72.01 🏆 | 56.17 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.04x faster | 1127.58 | 1176.15 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.22x faster | 166.15 🏆 | 51.56 |
| [has](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.48x faster | 479.27 🏆 | 193.43 |
| [includes](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.54x faster | 39.87 🏆 | 6.10 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.90x faster | 215.73 🏆 | 19.80 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 2.31x faster | 1.93 🏆 | 0.83 |
| [keys](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.86x faster | 15.07 🏆 | 5.27 |
| [lt](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.34x faster | 166.78 🏆 | 50.00 |
| [map](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.62x faster | 605.76 🏆 | 373.79 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.44x faster | 350.08 🏆 | 243.25 |
| [merge](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.25x faster | 271.56 🏆 | 216.96 |
| [omit](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.92x faster | 106.90 🏆 | 27.30 |
| [pick](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 4.89x faster | 163.82 🏆 | 33.50 |
| [pickBy](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.21x faster | 2.30 🏆 | 1.90 |
| [range](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.60x faster | 30.95 🏆 | 19.33 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.66x faster | 1691.68 🏆 | 635.14 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.96x faster | 18.67 🏆 | 6.31 |
| [size](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.02x faster | 64.63 🏆 | 63.09 |
| [some](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/some.ts) | src/some.bench.ts > some performance | hidash is 3.82x faster | 18.76 🏆 | 4.91 |
| [sum](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.59x faster | 155.66 🏆 | 60.18 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.48x faster | 128.24 🏆 | 86.47 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 7.78x faster | 92.22 🏆 | 11.85 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.96x faster | 91.64 🏆 | 30.95 |
| [toString](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.90x faster | 32.53 🏆 | 17.14 |
| [transform](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.80x faster | 233.86 🏆 | 83.53 |
| [trim](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 3.02x faster | 35.78 🏆 | 11.87 |
| [union](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.75x faster | 94.85 🏆 | 54.27 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.48x faster | 116.70 🏆 | 78.84 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.71x faster | 64.46 🏆 | 37.61 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.04x faster | 16.25 | 16.97 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.24x faster | 138.21 🏆 | 6.21 |
| [zip](https://github.com/NaverPayDev/hidash/blob/22a0c7c0fd7c78607ccb30a0b8bf9af05e787c8a/src/zip.ts) | src/zip.bench.ts > zip performance | hidash is 1.14x faster | 48.96 🏆 | 43.07 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2025-03-10_
