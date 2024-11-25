# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.22x faster | 111.84 🏆 | 50.42 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 3.48x faster | 3.13 🏆 | 0.90 |
| [every](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.86x faster | 50.40 🏆 | 27.16 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/groupBy.ts) | src/groupBy.bench.ts > groupBy basic performance | hidash is 1.98x faster | 612.89 🏆 | 308.97 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/groupBy.ts) | src/groupBy.bench.ts > groupBy complex performance | hidash is 1.24x faster | 36.79 🏆 | 29.66 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/groupBy.ts) | src/groupBy.bench.ts > groupBy large array performance (simple key) | hidash is 1.23x faster | 3471.97 🏆 | 2829.33 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/groupBy.ts) | src/groupBy.bench.ts > groupBy large array performance (complex operations) | hidash is 1.18x faster | 2819.76 🏆 | 2391.24 |
| [gt](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.49x faster | 182.30 🏆 | 52.23 |
| [has](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.50x faster | 492.91 🏆 | 197.35 |
| [includes](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.64x faster | 39.20 🏆 | 5.91 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.17x faster | 207.91 🏆 | 20.45 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.38x faster | 5.49 🏆 | 0.86 |
| [keys](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.91x faster | 15.31 🏆 | 5.26 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.26x faster | 301.41 🏆 | 239.36 |
| [merge](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.29x faster | 280.29 🏆 | 217.60 |
| [omit](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 2.39x faster | 65.03 🏆 | 27.16 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.48x faster | 1700.36 🏆 | 684.95 |
| [size](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.01x faster | 69.06 | 69.85 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.57x faster | 155.85 🏆 | 60.60 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.53x faster | 307.19 🏆 | 87.07 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/e01139cb1278ad5349354694b3d2ab8f01d7bc91/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.30x faster | 99.23 🏆 | 11.96 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-11-25_
