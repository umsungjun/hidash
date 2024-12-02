# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.33x faster | 112.71 🏆 | 48.45 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.27x faster | 2.04 🏆 | 0.90 |
| [every](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.81x faster | 50.58 🏆 | 27.99 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 6.11x faster | 6049.10 🏆 | 989.79 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.54x faster | 6082.54 🏆 | 1098.72 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.18x faster | 1417.04 🏆 | 1197.03 |
| [gt](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.17x faster | 162.16 🏆 | 51.16 |
| [has](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.45x faster | 502.53 🏆 | 205.10 |
| [includes](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.66x faster | 39.31 🏆 | 5.90 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 11.11x faster | 219.34 🏆 | 19.74 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.46x faster | 5.50 🏆 | 0.85 |
| [keys](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 3.01x faster | 16.02 🏆 | 5.31 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.15x faster | 285.55 🏆 | 247.59 |
| [merge](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.24x faster | 274.80 🏆 | 221.35 |
| [omit](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 2.39x faster | 66.53 🏆 | 27.81 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.71x faster | 1709.15 🏆 | 629.77 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.86x faster | 18.68 🏆 | 6.53 |
| [size](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.03x faster | 64.15 🏆 | 62.02 |
| [sum](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.57x faster | 154.91 🏆 | 60.29 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.73x faster | 317.88 🏆 | 85.33 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.10x faster | 95.93 🏆 | 11.85 |
| [toString](https://github.com/NaverPayDev/hidash/blob/117d629e01680a827a03c64978b859aa2d23cd70/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.01x faster | 35.42 🏆 | 17.62 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-02_
