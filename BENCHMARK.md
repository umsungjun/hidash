# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.23x faster | 113.50 🏆 | 50.91 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.25x faster | 2.05 🏆 | 0.91 |
| [every](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.90x faster | 52.01 🏆 | 27.38 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.33x faster | 1631.54 🏆 | 1229.48 |
| [gt](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.18x faster | 162.83 🏆 | 51.28 |
| [has](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.38x faster | 484.16 🏆 | 203.38 |
| [includes](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 7.04x faster | 40.37 🏆 | 5.74 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 11.24x faster | 217.25 🏆 | 19.33 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.44x faster | 5.51 🏆 | 0.86 |
| [keys](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 3.03x faster | 15.71 🏆 | 5.18 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.21x faster | 297.71 🏆 | 245.57 |
| [merge](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.30x faster | 273.64 🏆 | 209.78 |
| [omit](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 2.40x faster | 66.14 🏆 | 27.60 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.54x faster | 1711.68 🏆 | 672.67 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.85x faster | 18.71 🏆 | 6.58 |
| [size](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.01x faster | 70.81 | 71.53 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.32x faster | 139.90 🏆 | 60.36 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.49x faster | 304.34 🏆 | 87.31 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/d8c386b1fb586bb4509bf18f8435011e840dcf8b/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.33x faster | 98.17 🏆 | 11.79 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-11-25_
