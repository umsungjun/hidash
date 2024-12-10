# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.29x faster | 113.74 🏆 | 49.71 |
| [clone](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.16x faster | 57.58 🏆 | 3.36 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.26x faster | 2.06 🏆 | 0.91 |
| [every](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.81x faster | 50.81 🏆 | 28.00 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.74x faster | 5941.65 🏆 | 1035.47 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.59x faster | 6053.48 🏆 | 1083.18 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.20x faster | 1538.50 🏆 | 1286.83 |
| [gt](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.24x faster | 166.89 🏆 | 51.45 |
| [has](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.46x faster | 508.88 🏆 | 206.59 |
| [includes](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 7.05x faster | 40.73 🏆 | 5.78 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.65x faster | 217.40 🏆 | 20.41 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.38x faster | 5.51 🏆 | 0.86 |
| [keys](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 3.00x faster | 16.05 🏆 | 5.35 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.26x faster | 311.76 🏆 | 247.82 |
| [merge](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.26x faster | 276.71 🏆 | 219.00 |
| [omit](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.93x faster | 110.04 🏆 | 27.98 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.68x faster | 1717.27 🏆 | 640.08 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.92x faster | 19.21 🏆 | 6.57 |
| [size](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.03x faster | 64.36 🏆 | 62.61 |
| [sum](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.53x faster | 152.59 🏆 | 60.22 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.51x faster | 310.44 🏆 | 88.39 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.12x faster | 94.93 🏆 | 11.69 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 3.70x faster | 0.96 🏆 | 0.26 |
| [toString](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.03x faster | 35.95 🏆 | 17.73 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.50x faster | 116.73 🏆 | 77.81 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.67x faster | 64.40 🏆 | 38.45 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/98270cd65f0ae2d6c4f71eebeb24f5d0225fb304/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.38 | 17.12 🏆 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-10_
