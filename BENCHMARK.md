# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/8219549366f52c009ff0ac33e39a152fba6672a1/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.25x faster | 113.77 🏆 | 50.47 |
| [every](https://github.com/NaverPayDev/hidash/blob/8219549366f52c009ff0ac33e39a152fba6672a1/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.89x faster | 51.80 🏆 | 27.38 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/8219549366f52c009ff0ac33e39a152fba6672a1/src/groupBy.ts) | src/groupBy.bench.ts > groupBy basic performance | hidash is 1.95x faster | 613.36 🏆 | 314.30 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/8219549366f52c009ff0ac33e39a152fba6672a1/src/groupBy.ts) | src/groupBy.bench.ts > groupBy complex performance | hidash is 1.28x faster | 39.36 🏆 | 30.76 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/8219549366f52c009ff0ac33e39a152fba6672a1/src/groupBy.ts) | src/groupBy.bench.ts > groupBy large array performance (simple key) | hidash is 1.18x faster | 3553.90 🏆 | 3001.65 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/8219549366f52c009ff0ac33e39a152fba6672a1/src/groupBy.ts) | src/groupBy.bench.ts > groupBy large array performance (complex operations) | hidash is 1.28x faster | 3097.38 🏆 | 2429.25 |
| [has](https://github.com/NaverPayDev/hidash/blob/8219549366f52c009ff0ac33e39a152fba6672a1/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.36x faster | 458.35 🏆 | 194.56 |
| [includes](https://github.com/NaverPayDev/hidash/blob/8219549366f52c009ff0ac33e39a152fba6672a1/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.70x faster | 39.92 🏆 | 5.96 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/8219549366f52c009ff0ac33e39a152fba6672a1/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.96x faster | 220.91 🏆 | 20.15 |
| [keys](https://github.com/NaverPayDev/hidash/blob/8219549366f52c009ff0ac33e39a152fba6672a1/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 3.03x faster | 15.54 🏆 | 5.13 |
| [merge](https://github.com/NaverPayDev/hidash/blob/8219549366f52c009ff0ac33e39a152fba6672a1/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.28x faster | 273.50 🏆 | 212.84 |
| [omit](https://github.com/NaverPayDev/hidash/blob/8219549366f52c009ff0ac33e39a152fba6672a1/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 2.42x faster | 65.35 🏆 | 26.99 |
| [size](https://github.com/NaverPayDev/hidash/blob/8219549366f52c009ff0ac33e39a152fba6672a1/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.02x faster | 71.65 | 72.74 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/8219549366f52c009ff0ac33e39a152fba6672a1/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.72x faster | 155.57 🏆 | 57.17 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/8219549366f52c009ff0ac33e39a152fba6672a1/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.51x faster | 308.57 🏆 | 87.84 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/8219549366f52c009ff0ac33e39a152fba6672a1/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 9.15x faster | 104.11 🏆 | 11.38 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-11-20_
