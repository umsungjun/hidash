# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.16x faster | 110.38 🏆 | 51.08 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 3.64x faster | 3.27 🏆 | 0.90 |
| [every](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.87x faster | 51.99 🏆 | 27.73 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/groupBy.ts) | src/groupBy.bench.ts > groupBy basic performance | hidash is 1.96x faster | 613.80 🏆 | 313.46 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/groupBy.ts) | src/groupBy.bench.ts > groupBy complex performance | hidash is 1.30x faster | 40.61 🏆 | 31.30 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/groupBy.ts) | src/groupBy.bench.ts > groupBy large array performance (simple key) | hidash is 1.19x faster | 3893.43 🏆 | 3265.34 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/groupBy.ts) | src/groupBy.bench.ts > groupBy large array performance (complex operations) | hidash is 1.29x faster | 3078.78 🏆 | 2381.77 |
| [gt](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.49x faster | 183.62 🏆 | 52.62 |
| [has](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.42x faster | 481.59 🏆 | 199.16 |
| [includes](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.53x faster | 40.61 🏆 | 6.22 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.31x faster | 213.25 🏆 | 20.69 |
| [keys](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.96x faster | 15.91 🏆 | 5.37 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.20x faster | 291.61 🏆 | 243.13 |
| [merge](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.29x faster | 276.38 🏆 | 215.03 |
| [omit](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 2.39x faster | 66.91 🏆 | 27.96 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.66x faster | 1711.10 🏆 | 642.13 |
| [size](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.08x faster | 71.51 🏆 | 66.38 |
| [sum](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.58x faster | 155.33 🏆 | 60.21 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.53x faster | 307.78 🏆 | 87.19 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/7ccef856bf7103f4bd17101d6af7c5d00cd7efb6/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.85x faster | 105.53 🏆 | 11.92 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-11-22_
