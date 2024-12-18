# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.36x faster | 26.35 🏆 | 11.18 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.66x faster | 625.04 🏆 | 234.96 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.35x faster | 112.19 🏆 | 47.69 |
| [clone](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.21x faster | 55.02 🏆 | 3.20 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.29x faster | 2.03 🏆 | 0.89 |
| [difference](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.26x faster | 303.15 🏆 | 92.93 |
| [every](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.82x faster | 50.54 🏆 | 27.83 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.93x faster | 5974.39 🏆 | 1007.15 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.70x faster | 5807.89 🏆 | 1018.36 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.20x faster | 72.83 🏆 | 60.46 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.14x faster | 1423.04 🏆 | 1246.73 |
| [gt](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.14x faster | 160.72 🏆 | 51.18 |
| [has](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.45x faster | 509.67 🏆 | 208.34 |
| [includes](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.78x faster | 40.25 🏆 | 5.93 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.88x faster | 213.67 🏆 | 19.64 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.70x faster | 5.49 🏆 | 0.82 |
| [keys](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.96x faster | 15.89 🏆 | 5.36 |
| [lt](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.22x faster | 166.04 🏆 | 51.57 |
| [map](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.20x faster | 446.55 🏆 | 371.12 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.25x faster | 301.45 🏆 | 241.71 |
| [merge](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.29x faster | 279.21 🏆 | 216.29 |
| [omit](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.02x faster | 109.86 🏆 | 27.36 |
| [pick](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 4.97x faster | 172.60 🏆 | 34.72 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.69x faster | 1699.98 🏆 | 632.76 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.82x faster | 18.16 🏆 | 6.44 |
| [size](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.00x faster | 64.39 | 64.68 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.60x faster | 155.05 🏆 | 59.60 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.45x faster | 301.99 🏆 | 87.44 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.04x faster | 93.49 🏆 | 11.62 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 3.07x faster | 92.81 🏆 | 30.22 |
| [toString](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.03x faster | 35.62 🏆 | 17.51 |
| [transform](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 3.16x faster | 249.81 🏆 | 79.17 |
| [trim](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.99x faster | 34.65 🏆 | 11.57 |
| [union](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.76x faster | 95.43 🏆 | 54.18 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.50x faster | 118.56 🏆 | 79.03 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.69x faster | 63.82 🏆 | 37.66 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.18 | 17.04 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/a1c7a40e6f7a2b066332ac6b8df3d5785d09ee24/src/values.ts) | src/values.bench.ts > values performance | hidash is 21.93x faster | 137.52 🏆 | 6.27 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-18_
