# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.43x faster | 27.12 🏆 | 11.18 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.32x faster | 625.77 🏆 | 269.51 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.26x faster | 112.61 🏆 | 49.94 |
| [clone](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.94x faster | 57.55 🏆 | 3.40 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.29x faster | 2.07 🏆 | 0.90 |
| [difference](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.19x faster | 303.44 🏆 | 95.09 |
| [every](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.90x faster | 49.23 🏆 | 25.88 |
| [filter](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 3.71x faster | 17.44 🏆 | 4.70 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.49x faster | 5935.48 🏆 | 1082.11 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.36x faster | 5929.29 🏆 | 1106.55 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.14x faster | 71.45 🏆 | 62.44 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.24x faster | 1490.55 🏆 | 1205.73 |
| [gt](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.32x faster | 162.41 🏆 | 48.92 |
| [has](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.41x faster | 495.25 🏆 | 205.92 |
| [includes](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.73x faster | 40.36 🏆 | 6.00 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.63x faster | 210.13 🏆 | 19.77 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.66x faster | 5.47 🏆 | 0.82 |
| [keys](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.97x faster | 15.91 🏆 | 5.36 |
| [lt](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.05x faster | 156.59 🏆 | 51.32 |
| [map](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.20x faster | 447.67 🏆 | 372.93 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.28x faster | 308.89 🏆 | 242.18 |
| [merge](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.23x faster | 268.76 🏆 | 218.27 |
| [omit](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.92x faster | 109.47 🏆 | 27.96 |
| [pick](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.04x faster | 170.32 🏆 | 33.80 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.65x faster | 1700.16 🏆 | 641.12 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.96x faster | 19.13 🏆 | 6.47 |
| [size](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.00x faster | 64.13 🏆 | 63.95 |
| [some](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/some.ts) | src/some.bench.ts > some performance | hidash is 3.04x faster | 18.66 🏆 | 6.14 |
| [sum](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.58x faster | 154.88 🏆 | 59.94 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.45x faster | 303.92 🏆 | 88.09 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 7.79x faster | 91.32 🏆 | 11.73 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.93x faster | 91.96 🏆 | 31.42 |
| [toString](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.02x faster | 35.62 🏆 | 17.60 |
| [transform](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.90x faster | 243.96 🏆 | 84.02 |
| [trim](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.80x faster | 33.65 🏆 | 12.00 |
| [union](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.73x faster | 95.76 🏆 | 55.37 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.51x faster | 118.02 🏆 | 78.00 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.67x faster | 62.36 🏆 | 37.31 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.31 | 17.08 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/59036f7cfad8ea986a05e72000e71c15cfde5a73/src/values.ts) | src/values.bench.ts > values performance | hidash is 21.78x faster | 137.64 🏆 | 6.32 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-20_
