# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/12c671fb28250466392a3599bcb9f81306d74d1f/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.19x faster | 112.70 🏆 | 51.54 |
| [every](https://github.com/NaverPayDev/hidash/blob/12c671fb28250466392a3599bcb9f81306d74d1f/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.89x faster | 51.06 🏆 | 27.07 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/12c671fb28250466392a3599bcb9f81306d74d1f/src/groupBy.ts) | src/groupBy.bench.ts > groupBy basic performance | hidash is 1.98x faster | 616.00 🏆 | 311.63 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/12c671fb28250466392a3599bcb9f81306d74d1f/src/groupBy.ts) | src/groupBy.bench.ts > groupBy complex performance | hidash is 1.28x faster | 38.76 🏆 | 30.37 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/12c671fb28250466392a3599bcb9f81306d74d1f/src/groupBy.ts) | src/groupBy.bench.ts > groupBy large array performance (simple key) | hidash is 1.13x faster | 3400.64 🏆 | 3007.59 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/12c671fb28250466392a3599bcb9f81306d74d1f/src/groupBy.ts) | src/groupBy.bench.ts > groupBy large array performance (complex operations) | hidash is 1.28x faster | 3050.73 🏆 | 2379.91 |
| [has](https://github.com/NaverPayDev/hidash/blob/12c671fb28250466392a3599bcb9f81306d74d1f/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.30x faster | 477.56 🏆 | 207.68 |
| [includes](https://github.com/NaverPayDev/hidash/blob/12c671fb28250466392a3599bcb9f81306d74d1f/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.97x faster | 39.84 🏆 | 5.72 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/12c671fb28250466392a3599bcb9f81306d74d1f/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.84x faster | 221.00 🏆 | 20.39 |
| [keys](https://github.com/NaverPayDev/hidash/blob/12c671fb28250466392a3599bcb9f81306d74d1f/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.98x faster | 15.75 🏆 | 5.29 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/12c671fb28250466392a3599bcb9f81306d74d1f/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.22x faster | 296.67 🏆 | 243.44 |
| [merge](https://github.com/NaverPayDev/hidash/blob/12c671fb28250466392a3599bcb9f81306d74d1f/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.32x faster | 276.90 🏆 | 209.02 |
| [omit](https://github.com/NaverPayDev/hidash/blob/12c671fb28250466392a3599bcb9f81306d74d1f/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 2.43x faster | 66.18 🏆 | 27.21 |
| [size](https://github.com/NaverPayDev/hidash/blob/12c671fb28250466392a3599bcb9f81306d74d1f/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.00x faster | 70.63 🏆 | 70.59 |
| [sum](https://github.com/NaverPayDev/hidash/blob/12c671fb28250466392a3599bcb9f81306d74d1f/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.56x faster | 153.94 🏆 | 60.11 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/12c671fb28250466392a3599bcb9f81306d74d1f/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.43x faster | 298.97 🏆 | 87.16 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/12c671fb28250466392a3599bcb9f81306d74d1f/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.49x faster | 102.28 🏆 | 12.05 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-11-21_
