# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.27x faster | 113.49 🏆 | 50.01 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 3.55x faster | 3.25 🏆 | 0.91 |
| [every](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.90x faster | 52.33 🏆 | 27.58 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/groupBy.ts) | src/groupBy.bench.ts > groupBy basic performance | hidash is 1.96x faster | 613.90 🏆 | 312.75 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/groupBy.ts) | src/groupBy.bench.ts > groupBy complex performance | hidash is 1.30x faster | 40.46 🏆 | 31.03 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/groupBy.ts) | src/groupBy.bench.ts > groupBy large array performance (simple key) | hidash is 1.20x faster | 3790.57 🏆 | 3159.86 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/groupBy.ts) | src/groupBy.bench.ts > groupBy large array performance (complex operations) | hidash is 1.26x faster | 3063.54 🏆 | 2426.20 |
| [gt](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.40x faster | 179.22 🏆 | 52.75 |
| [has](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.49x faster | 494.15 🏆 | 198.60 |
| [includes](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.69x faster | 40.10 🏆 | 6.00 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 11.16x faster | 216.00 🏆 | 19.35 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.43x faster | 5.54 🏆 | 0.86 |
| [keys](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.96x faster | 15.86 🏆 | 5.36 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.23x faster | 294.91 🏆 | 239.02 |
| [merge](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.29x faster | 279.09 🏆 | 216.59 |
| [omit](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 2.46x faster | 66.92 🏆 | 27.23 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.53x faster | 1700.57 🏆 | 673.35 |
| [size](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.02x faster | 70.46 | 71.54 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.64x faster | 156.39 🏆 | 59.19 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.40x faster | 295.86 🏆 | 86.96 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/76058802398d1d43bb545ed2d47b8bba68509132/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.07x faster | 95.95 🏆 | 11.89 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-11-22_
