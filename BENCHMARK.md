# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.42x faster | 27.00 🏆 | 11.15 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.45x faster | 625.16 🏆 | 255.56 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.32x faster | 113.03 🏆 | 48.70 |
| [clone](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.84x faster | 56.67 🏆 | 3.37 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.37x faster | 2.09 🏆 | 0.88 |
| [difference](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.23x faster | 301.83 🏆 | 93.52 |
| [every](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.80x faster | 49.22 🏆 | 27.37 |
| [filter](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 2.89x faster | 17.49 🏆 | 6.04 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.88x faster | 6330.63 🏆 | 1077.08 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 6.22x faster | 6541.44 🏆 | 1051.79 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.25x faster | 73.31 🏆 | 58.58 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.04x faster | 1149.84 | 1193.78 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.51x faster | 167.26 🏆 | 47.59 |
| [has](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.35x faster | 484.17 🏆 | 206.27 |
| [includes](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 7.05x faster | 40.33 🏆 | 5.72 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.64x faster | 207.96 🏆 | 19.54 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.15x faster | 5.45 🏆 | 0.89 |
| [keys](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.97x faster | 15.87 🏆 | 5.34 |
| [lt](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.16x faster | 158.50 🏆 | 50.19 |
| [map](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.64x faster | 584.78 🏆 | 357.13 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.25x faster | 303.72 🏆 | 242.54 |
| [merge](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.28x faster | 277.60 🏆 | 217.14 |
| [omit](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.95x faster | 108.90 🏆 | 27.55 |
| [pick](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.16x faster | 169.89 🏆 | 32.90 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.72x faster | 1705.08 🏆 | 626.98 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.88x faster | 18.61 🏆 | 6.46 |
| [size](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.01x faster | 64.72 | 65.18 🏆 |
| [some](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/some.ts) | src/some.bench.ts > some performance | hidash is 4.00x faster | 18.87 🏆 | 4.71 |
| [sum](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.63x faster | 155.16 🏆 | 59.10 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.49x faster | 129.59 🏆 | 87.15 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.09x faster | 93.62 🏆 | 11.58 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.94x faster | 93.53 🏆 | 31.83 |
| [toString](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.09x faster | 35.68 🏆 | 17.07 |
| [transform](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.90x faster | 241.63 🏆 | 83.46 |
| [trim](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.66x faster | 31.84 🏆 | 11.97 |
| [union](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.73x faster | 95.76 🏆 | 55.44 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.52x faster | 117.68 🏆 | 77.56 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.79x faster | 66.00 🏆 | 36.90 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.29 | 17.07 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/8dd834e597bd3d35a15a755dc41a3276fd344d17/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.43x faster | 139.77 🏆 | 6.23 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2025-01-05_
