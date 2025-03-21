# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.55x faster | 27.75 🏆 | 10.88 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.50x faster | 636.13 🏆 | 254.43 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.18x faster | 108.75 🏆 | 49.97 |
| [clone](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.04x faster | 51.84 🏆 | 3.23 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.14x faster | 1.88 🏆 | 0.88 |
| [difference](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.29x faster | 290.34 🏆 | 88.33 |
| [every](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.81x faster | 49.04 🏆 | 27.10 |
| [filter](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 3.79x faster | 15.90 🏆 | 4.20 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 4.45x faster | 4792.83 🏆 | 1076.65 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 4.69x faster | 5025.08 🏆 | 1071.46 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.23x faster | 68.46 🏆 | 55.76 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.19x faster | 1095.12 | 1303.64 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.49x faster | 168.94 🏆 | 48.44 |
| [has](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.36x faster | 485.00 🏆 | 205.71 |
| [includes](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.87x faster | 39.12 🏆 | 5.70 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 11.99x faster | 225.84 🏆 | 18.83 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.24x faster | 5.45 🏆 | 0.87 |
| [keys](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 3.17x faster | 15.37 🏆 | 4.86 |
| [lt](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.42x faster | 168.94 🏆 | 49.33 |
| [map](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.66x faster | 592.79 🏆 | 356.17 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.58x faster | 505.27 🏆 | 319.90 |
| [merge](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.25x faster | 272.03 🏆 | 216.99 |
| [omit](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.08x faster | 108.62 🏆 | 26.60 |
| [pick](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.15x faster | 163.21 🏆 | 31.72 |
| [pickBy](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.22x faster | 2.28 🏆 | 1.87 |
| [range](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.64x faster | 30.75 🏆 | 18.79 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.50x faster | 1684.01 🏆 | 673.41 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.88x faster | 18.07 🏆 | 6.27 |
| [size](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.01x faster | 63.44 | 63.78 🏆 |
| [some](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/some.ts) | src/some.bench.ts > some performance | hidash is 2.39x faster | 18.60 🏆 | 7.77 |
| [sum](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 3.12x faster | 184.33 🏆 | 59.13 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.26x faster | 127.62 🏆 | 101.63 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 7.99x faster | 92.34 🏆 | 11.55 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.95x faster | 92.75 🏆 | 31.43 |
| [toString](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.10x faster | 35.62 🏆 | 16.96 |
| [transform](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.95x faster | 241.02 🏆 | 81.74 |
| [trim](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 3.01x faster | 35.01 🏆 | 11.65 |
| [union](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.78x faster | 93.65 🏆 | 52.67 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.48x faster | 116.52 🏆 | 78.54 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.75x faster | 64.36 🏆 | 36.81 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.07x faster | 15.80 | 16.94 🏆 |
| [unzip](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/unzip.ts) | src/unzip.bench.ts > unzip performance | hidash is 1.28x faster | 81.57 🏆 | 63.63 |
| [values](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/values.ts) | src/values.bench.ts > values performance | hidash is 21.93x faster | 134.57 🏆 | 6.13 |
| [zip](https://github.com/NaverPayDev/hidash/blob/ccd3c4e829039f41de7ffaf675e5f6e8b1f398d1/src/zip.ts) | src/zip.bench.ts > zip performance | hidash is 1.13x faster | 48.47 🏆 | 42.81 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2025-03-21_
