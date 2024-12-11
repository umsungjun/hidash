# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.30x faster | 113.12 🏆 | 49.26 |
| [clone](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 15.54x faster | 54.71 🏆 | 3.52 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.33x faster | 2.09 🏆 | 0.90 |
| [every](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.83x faster | 50.71 🏆 | 27.77 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.89x faster | 6081.07 🏆 | 1033.25 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.47x faster | 5917.19 🏆 | 1081.76 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.24x faster | 76.10 🏆 | 61.44 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.31x faster | 1596.81 🏆 | 1219.99 |
| [gt](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 2.88x faster | 148.04 🏆 | 51.41 |
| [has](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.53x faster | 517.55 🏆 | 204.42 |
| [includes](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.93x faster | 40.54 🏆 | 5.85 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.84x faster | 216.14 🏆 | 19.93 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 2.24x faster | 1.91 🏆 | 0.85 |
| [keys](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.97x faster | 16.03 🏆 | 5.40 |
| [lt](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.08x faster | 161.00 🏆 | 52.20 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.26x faster | 310.72 🏆 | 246.54 |
| [merge](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.30x faster | 276.98 🏆 | 213.28 |
| [omit](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.97x faster | 110.08 🏆 | 27.75 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.66x faster | 1716.67 🏆 | 644.92 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.89x faster | 19.00 🏆 | 6.57 |
| [size](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.00x faster | 64.46 | 64.77 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.57x faster | 155.08 🏆 | 60.45 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.52x faster | 309.85 🏆 | 88.03 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 7.94x faster | 94.09 🏆 | 11.85 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 3.06x faster | 94.12 🏆 | 30.73 |
| [toString](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.89x faster | 33.24 🏆 | 17.57 |
| [trim](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.83x faster | 35.04 🏆 | 12.37 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.52x faster | 119.12 🏆 | 78.33 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.67x faster | 64.03 🏆 | 38.27 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/9060d04c720505d8573b089c22576911cdf7ff00/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.07x faster | 16.00 | 17.13 🏆 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-11_
