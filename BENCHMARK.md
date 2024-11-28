# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.30x faster | 112.96 🏆 | 49.15 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.37x faster | 2.10 🏆 | 0.89 |
| [every](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.82x faster | 50.51 🏆 | 27.71 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.50x faster | 5851.60 🏆 | 1063.22 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.21x faster | 1512.32 🏆 | 1245.64 |
| [gt](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.08x faster | 155.82 🏆 | 50.60 |
| [has](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.57x faster | 509.05 🏆 | 198.27 |
| [includes](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.79x faster | 40.51 🏆 | 5.97 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.61x faster | 210.48 🏆 | 19.85 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.45x faster | 5.51 🏆 | 0.85 |
| [keys](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 3.06x faster | 15.91 🏆 | 5.21 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.15x faster | 286.46 🏆 | 248.84 |
| [merge](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.25x faster | 272.35 🏆 | 217.95 |
| [omit](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 2.58x faster | 66.41 🏆 | 25.70 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.67x faster | 1708.67 🏆 | 640.75 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.90x faster | 18.70 🏆 | 6.45 |
| [size](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.01x faster | 70.55 | 71.30 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.56x faster | 154.93 🏆 | 60.47 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.47x faster | 306.77 🏆 | 88.52 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/177a8f05c83af17230728591ae5502ce731bf736/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.41x faster | 100.02 🏆 | 11.89 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-11-28_
