# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.29x faster | 113.21 🏆 | 49.33 |
| [clone](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.58x faster | 57.07 🏆 | 3.25 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.44x faster | 2.11 🏆 | 0.87 |
| [difference](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.25x faster | 309.88 🏆 | 95.29 |
| [every](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.82x faster | 50.51 🏆 | 27.82 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.43x faster | 6008.18 🏆 | 1106.64 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.24x faster | 5933.63 🏆 | 1131.84 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.08x faster | 66.78 🏆 | 61.68 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.27x faster | 1653.93 🏆 | 1301.20 |
| [gt](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.21x faster | 165.33 🏆 | 51.45 |
| [has](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.35x faster | 500.91 🏆 | 213.06 |
| [includes](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.88x faster | 40.12 🏆 | 5.83 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 11.14x faster | 219.11 🏆 | 19.66 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.39x faster | 5.50 🏆 | 0.86 |
| [keys](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.99x faster | 16.12 🏆 | 5.39 |
| [lt](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.33x faster | 171.69 🏆 | 51.58 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.26x faster | 310.27 🏆 | 246.77 |
| [merge](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.26x faster | 272.26 🏆 | 216.09 |
| [omit](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.94x faster | 109.63 🏆 | 27.81 |
| [pick](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 4.78x faster | 166.66 🏆 | 34.84 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.63x faster | 1701.85 🏆 | 647.92 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.91x faster | 19.07 🏆 | 6.55 |
| [size](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.03x faster | 63.62 🏆 | 61.72 |
| [sum](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.60x faster | 156.34 🏆 | 60.09 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.51x faster | 312.53 🏆 | 89.08 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 7.79x faster | 91.76 🏆 | 11.77 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.91x faster | 93.27 🏆 | 32.02 |
| [toString](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.99x faster | 35.70 🏆 | 17.98 |
| [transform](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.95x faster | 246.70 🏆 | 83.50 |
| [trim](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.86x faster | 34.81 🏆 | 12.19 |
| [union](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.76x faster | 95.99 🏆 | 54.53 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.53x faster | 117.82 🏆 | 77.20 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.76x faster | 64.70 🏆 | 36.75 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.08x faster | 15.95 | 17.26 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/a490894747466729625c2faa5a332634ca285b53/src/values.ts) | src/values.bench.ts > values performance | hidash is 21.66x faster | 137.75 🏆 | 6.36 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-17_
