# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.36x faster | 26.51 🏆 | 11.23 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.37x faster | 644.21 🏆 | 271.35 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.32x faster | 113.35 🏆 | 48.85 |
| [clone](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.75x faster | 57.30 🏆 | 3.42 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.29x faster | 2.05 🏆 | 0.90 |
| [difference](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.24x faster | 304.14 🏆 | 93.95 |
| [every](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.85x faster | 50.39 🏆 | 27.27 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.46x faster | 5785.76 🏆 | 1059.87 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.57x faster | 5881.07 🏆 | 1055.54 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.43x faster | 75.47 🏆 | 52.84 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.32x faster | 1559.04 🏆 | 1181.49 |
| [gt](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.05x faster | 158.06 🏆 | 51.78 |
| [has](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.47x faster | 500.27 🏆 | 202.43 |
| [includes](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.92x faster | 40.29 🏆 | 5.83 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 11.23x faster | 220.21 🏆 | 19.61 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 2.29x faster | 2.03 🏆 | 0.89 |
| [keys](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 3.06x faster | 15.86 🏆 | 5.19 |
| [lt](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.16x faster | 164.22 🏆 | 52.02 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.23x faster | 303.00 🏆 | 245.42 |
| [merge](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.25x faster | 270.77 🏆 | 215.90 |
| [omit](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.93x faster | 109.11 🏆 | 27.76 |
| [pick](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.00x faster | 164.91 🏆 | 32.97 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.68x faster | 1714.16 🏆 | 640.35 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.89x faster | 18.96 🏆 | 6.56 |
| [size](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.00x faster | 63.79 | 63.97 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.60x faster | 155.45 🏆 | 59.74 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.46x faster | 303.39 🏆 | 87.61 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.06x faster | 94.24 🏆 | 11.69 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 3.07x faster | 92.99 🏆 | 30.32 |
| [toString](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.92x faster | 33.67 🏆 | 17.57 |
| [transform](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.82x faster | 235.77 🏆 | 83.71 |
| [trim](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.91x faster | 35.10 🏆 | 12.08 |
| [union](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.75x faster | 95.69 🏆 | 54.80 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.51x faster | 118.52 🏆 | 78.67 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.69x faster | 62.29 🏆 | 36.89 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.06x faster | 16.05 | 17.04 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/24f4b5b6cc8e3d098d5386f8af1695efe734fa9f/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.09x faster | 138.82 🏆 | 6.28 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-18_
