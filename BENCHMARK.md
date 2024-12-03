# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.26x faster | 110.62 🏆 | 49.03 |
| [clone](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.95x faster | 56.44 🏆 | 3.33 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.33x faster | 2.07 🏆 | 0.89 |
| [every](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.82x faster | 50.70 🏆 | 27.91 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.74x faster | 5913.12 🏆 | 1030.15 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.75x faster | 6096.52 🏆 | 1059.37 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.32x faster | 1654.33 🏆 | 1249.21 |
| [gt](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.16x faster | 161.46 🏆 | 51.14 |
| [has](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.44x faster | 498.12 🏆 | 203.82 |
| [includes](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.89x faster | 40.12 🏆 | 5.83 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 11.55x faster | 222.05 🏆 | 19.22 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.29x faster | 5.48 🏆 | 0.87 |
| [keys](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.98x faster | 15.99 🏆 | 5.36 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.16x faster | 294.51 🏆 | 253.46 |
| [merge](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.25x faster | 271.23 🏆 | 217.21 |
| [omit](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.92x faster | 109.20 🏆 | 27.85 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.57x faster | 1718.20 🏆 | 667.62 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.75x faster | 17.83 🏆 | 6.47 |
| [size](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.00x faster | 62.62 | 62.81 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.63x faster | 155.90 🏆 | 59.35 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.34x faster | 295.74 🏆 | 88.63 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 7.80x faster | 92.04 🏆 | 11.80 |
| [toString](https://github.com/NaverPayDev/hidash/blob/d55d9859e6aadd0f29ec1d9a472d02a0fb3128e1/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.98x faster | 34.75 🏆 | 17.54 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-03_
