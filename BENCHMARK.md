# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.26x faster | 109.77 🏆 | 48.53 |
| [clone](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.63x faster | 56.52 🏆 | 3.21 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.32x faster | 2.03 🏆 | 0.88 |
| [every](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.83x faster | 50.49 🏆 | 27.61 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.34x faster | 5795.87 🏆 | 1086.38 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.34x faster | 5823.29 🏆 | 1091.42 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.16x faster | 70.69 🏆 | 61.10 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.17x faster | 1490.77 🏆 | 1275.59 |
| [gt](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.18x faster | 162.49 🏆 | 51.15 |
| [has](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.40x faster | 493.29 🏆 | 205.84 |
| [includes](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.81x faster | 39.97 🏆 | 5.87 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 11.42x faster | 222.27 🏆 | 19.47 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.28x faster | 5.46 🏆 | 0.87 |
| [keys](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 3.07x faster | 15.74 🏆 | 5.13 |
| [lt](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 2.98x faster | 154.46 🏆 | 51.76 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.24x faster | 306.21 🏆 | 246.60 |
| [merge](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.25x faster | 273.29 🏆 | 218.16 |
| [omit](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.02x faster | 108.98 🏆 | 27.13 |
| [pick](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 4.98x faster | 166.27 🏆 | 33.36 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.61x faster | 1687.81 🏆 | 645.63 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.89x faster | 18.81 🏆 | 6.52 |
| [size](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.00x faster | 62.80 | 62.95 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.60x faster | 155.32 🏆 | 59.82 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.53x faster | 309.78 🏆 | 87.81 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.03x faster | 93.75 🏆 | 11.67 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.91x faster | 92.18 🏆 | 31.73 |
| [toString](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.99x faster | 35.57 🏆 | 17.91 |
| [transform](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 3.01x faster | 241.68 🏆 | 80.24 |
| [trim](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.86x faster | 34.31 🏆 | 11.99 |
| [union](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.71x faster | 95.26 🏆 | 55.61 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.48x faster | 117.35 🏆 | 79.19 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.69x faster | 62.12 🏆 | 36.79 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.07x faster | 15.88 | 17.01 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/3abd8ae7d30b9a514b810e1975ffddc94c6b6483/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.08x faster | 138.70 🏆 | 6.28 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-16_
