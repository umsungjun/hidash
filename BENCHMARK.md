# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.61x faster | 27.75 🏆 | 10.63 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.36x faster | 600.98 🏆 | 255.02 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.41x faster | 112.10 🏆 | 46.54 |
| [clone](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.01x faster | 55.48 🏆 | 3.26 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.28x faster | 2.00 🏆 | 0.88 |
| [difference](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.32x faster | 307.14 🏆 | 92.47 |
| [every](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.86x faster | 51.14 🏆 | 27.48 |
| [filter](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 2.30x faster | 17.38 🏆 | 7.56 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 4.36x faster | 4853.63 🏆 | 1114.17 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 4.88x faster | 5091.69 🏆 | 1044.44 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.28x faster | 76.76 🏆 | 60.20 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.24x faster | 1115.30 | 1382.66 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.30x faster | 164.27 🏆 | 49.72 |
| [has](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.49x faster | 478.86 🏆 | 192.55 |
| [includes](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.94x faster | 40.23 🏆 | 5.80 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.97x faster | 214.46 🏆 | 19.56 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.26x faster | 5.39 🏆 | 0.86 |
| [keys](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 3.02x faster | 15.80 🏆 | 5.23 |
| [lt](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.29x faster | 171.75 🏆 | 52.28 |
| [map](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.68x faster | 607.08 🏆 | 360.40 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.44x faster | 485.99 🏆 | 337.40 |
| [merge](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.25x faster | 268.43 🏆 | 214.79 |
| [omit](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.01x faster | 110.09 🏆 | 27.47 |
| [pick](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.03x faster | 164.29 🏆 | 32.65 |
| [pickBy](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.20x faster | 2.28 🏆 | 1.89 |
| [range](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.54x faster | 29.94 🏆 | 19.40 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.56x faster | 1690.82 🏆 | 659.65 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 3.03x faster | 18.73 🏆 | 6.19 |
| [size](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.00x faster | 64.56 🏆 | 64.48 |
| [some](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/some.ts) | src/some.bench.ts > some performance | hidash is 2.45x faster | 18.89 🏆 | 7.70 |
| [sum](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.62x faster | 155.13 🏆 | 59.29 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.35x faster | 134.89 🏆 | 99.83 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.05x faster | 94.47 🏆 | 11.74 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.93x faster | 93.10 🏆 | 31.81 |
| [toString](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.14x faster | 36.17 🏆 | 16.87 |
| [transform](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.95x faster | 243.00 🏆 | 82.34 |
| [trim](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.96x faster | 34.64 🏆 | 11.70 |
| [union](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.67x faster | 95.21 🏆 | 56.98 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.48x faster | 116.34 🏆 | 78.62 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 2.14x faster | 65.26 🏆 | 30.45 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.29 | 17.05 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.60x faster | 138.95 🏆 | 6.15 |
| [zip](https://github.com/NaverPayDev/hidash/blob/073714f2e6d52220c88b41909c956b0a4497ae2a/src/zip.ts) | src/zip.bench.ts > zip performance | hidash is 1.13x faster | 49.07 🏆 | 43.36 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2025-03-12_
