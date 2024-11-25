# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.18x faster | 111.41 🏆 | 51.00 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.30x faster | 2.06 🏆 | 0.90 |
| [every](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.88x faster | 51.60 🏆 | 27.49 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.22x faster | 1500.13 🏆 | 1227.35 |
| [gt](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.09x faster | 158.07 🏆 | 51.21 |
| [has](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.43x faster | 491.73 🏆 | 202.47 |
| [includes](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.50x faster | 39.01 🏆 | 6.00 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 11.09x faster | 219.80 🏆 | 19.83 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.60x faster | 5.50 🏆 | 0.83 |
| [keys](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.94x faster | 15.71 🏆 | 5.35 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.22x faster | 299.85 🏆 | 246.17 |
| [merge](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.28x faster | 260.19 🏆 | 203.98 |
| [omit](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 2.43x faster | 66.68 🏆 | 27.44 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.47x faster | 1699.89 🏆 | 687.59 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.92x faster | 18.65 🏆 | 6.40 |
| [size](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.01x faster | 71.38 | 71.91 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.60x faster | 155.79 🏆 | 60.00 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.24x faster | 285.67 🏆 | 88.06 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/d242c8de1afb2b7acb33e5a049b41ad4fbcb6047/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 7.84x faster | 93.44 🏆 | 11.92 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-11-25_
