# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.45x faster | 26.81 🏆 | 10.93 |
| [chunk](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.50x faster | 641.79 🏆 | 256.60 |
| [clamp](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.30x faster | 112.23 🏆 | 48.76 |
| [clone](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.62x faster | 57.57 🏆 | 3.27 |
| [cloneDeep](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.32x faster | 2.09 🏆 | 0.90 |
| [difference](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.21x faster | 301.59 🏆 | 93.91 |
| [every](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.80x faster | 49.46 🏆 | 27.54 |
| [filter](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 4.20x faster | 17.32 🏆 | 4.12 |
| [findIndex](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.94x faster | 6221.40 🏆 | 1048.07 |
| [findLastIndex](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 6.09x faster | 6398.17 🏆 | 1050.05 |
| [flatten](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.25x faster | 74.94 🏆 | 60.18 |
| [groupBy](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.15x faster | 1078.43 | 1237.45 🏆 |
| [gt](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.29x faster | 166.62 🏆 | 50.63 |
| [has](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.39x faster | 488.83 🏆 | 204.61 |
| [includes](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.59x faster | 40.41 🏆 | 6.14 |
| [isEmpty](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.76x faster | 213.04 🏆 | 19.79 |
| [isEqual](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 2.23x faster | 2.00 🏆 | 0.90 |
| [keys](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 3.07x faster | 15.73 🏆 | 5.12 |
| [lt](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.08x faster | 158.66 🏆 | 51.55 |
| [map](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.59x faster | 574.31 🏆 | 360.28 |
| [mapValues](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.25x faster | 307.40 🏆 | 244.96 |
| [merge](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.32x faster | 276.13 🏆 | 209.03 |
| [omit](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.95x faster | 109.04 🏆 | 27.60 |
| [pick](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 4.80x faster | 159.05 🏆 | 33.16 |
| [pickBy](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.24x faster | 2.32 🏆 | 1.88 |
| [range](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.53x faster | 30.94 🏆 | 20.20 |
| [repeat](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.44x faster | 1655.20 🏆 | 679.25 |
| [shuffle](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.92x faster | 19.07 🏆 | 6.53 |
| [size](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.00x faster | 60.83 🏆 | 60.59 |
| [some](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/some.ts) | src/some.bench.ts > some performance | hidash is 2.49x faster | 18.32 🏆 | 7.36 |
| [sum](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.58x faster | 154.64 🏆 | 60.01 |
| [sumBy](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.43x faster | 124.92 🏆 | 87.20 |
| [toNumber](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.10x faster | 94.46 🏆 | 11.66 |
| [toPairs](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.99x faster | 91.65 🏆 | 30.63 |
| [toString](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.06x faster | 35.95 🏆 | 17.45 |
| [transform](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.82x faster | 240.79 🏆 | 85.29 |
| [trim](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.83x faster | 34.26 🏆 | 12.13 |
| [union](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.74x faster | 95.26 🏆 | 54.61 |
| [uniq](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.53x faster | 118.31 🏆 | 77.48 |
| [uniqBy](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.73x faster | 65.58 🏆 | 37.84 |
| [uniqWith](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.04x faster | 16.14 | 16.71 🏆 |
| [values](https://github.com/NaverPayDev2025/hidash/blob/594c89bc5b735688826df38c3224461da7dc1acc/src/values.ts) | src/values.bench.ts > values performance | hidash is 21.61x faster | 136.33 🏆 | 6.31 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2025-01-17_
