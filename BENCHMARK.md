# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.21x faster | 110.80 🏆 | 50.07 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 3.48x faster | 3.15 🏆 | 0.91 |
| [every](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.74x faster | 46.88 🏆 | 26.87 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/groupBy.ts) | src/groupBy.bench.ts > groupBy basic performance | hidash is 1.95x faster | 604.79 🏆 | 309.77 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/groupBy.ts) | src/groupBy.bench.ts > groupBy complex performance | hidash is 1.27x faster | 37.56 🏆 | 29.66 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/groupBy.ts) | src/groupBy.bench.ts > groupBy large array performance (simple key) | hidash is 1.18x faster | 3397.31 🏆 | 2891.08 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/groupBy.ts) | src/groupBy.bench.ts > groupBy large array performance (complex operations) | hidash is 1.26x faster | 3002.64 🏆 | 2390.62 |
| [has](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.51x faster | 491.98 🏆 | 196.31 |
| [includes](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.79x faster | 39.18 🏆 | 5.77 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.09x faster | 208.37 🏆 | 20.66 |
| [keys](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.95x faster | 14.94 🏆 | 5.06 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.20x faster | 287.84 🏆 | 239.09 |
| [merge](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.29x faster | 275.82 🏆 | 213.99 |
| [omit](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 2.41x faster | 64.59 🏆 | 26.83 |
| [size](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.01x faster | 69.01 | 69.74 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.57x faster | 155.30 🏆 | 60.49 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.50x faster | 303.17 🏆 | 86.62 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/97d59e643de38c8ae25490c31c13048180c2c5ef/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.75x faster | 103.75 🏆 | 11.86 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-11-21_
