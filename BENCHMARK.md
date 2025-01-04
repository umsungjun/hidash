# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.42x faster | 27.29 🏆 | 11.27 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.34x faster | 626.11 🏆 | 267.91 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.39x faster | 113.36 🏆 | 47.50 |
| [clone](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.62x faster | 56.98 🏆 | 3.23 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.37x faster | 2.11 🏆 | 0.89 |
| [difference](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.25x faster | 307.43 🏆 | 94.50 |
| [every](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.80x faster | 49.89 🏆 | 27.73 |
| [filter](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 2.76x faster | 17.30 🏆 | 6.27 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 6.04x faster | 6400.99 🏆 | 1059.32 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.93x faster | 6268.19 🏆 | 1057.52 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.23x faster | 75.96 🏆 | 61.65 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.02x faster | 1201.37 | 1226.25 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.31x faster | 166.57 🏆 | 50.33 |
| [has](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.52x faster | 513.48 🏆 | 203.54 |
| [includes](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.72x faster | 40.19 🏆 | 5.98 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 11.09x faster | 217.55 🏆 | 19.61 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.25x faster | 5.49 🏆 | 0.88 |
| [keys](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.98x faster | 15.87 🏆 | 5.33 |
| [lt](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.18x faster | 164.47 🏆 | 51.64 |
| [map](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.62x faster | 590.98 🏆 | 363.91 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.23x faster | 302.38 🏆 | 245.16 |
| [merge](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.28x faster | 280.16 🏆 | 218.83 |
| [omit](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.06x faster | 109.80 🏆 | 27.05 |
| [pick](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.11x faster | 166.54 🏆 | 32.59 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.60x faster | 1695.55 🏆 | 652.49 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.93x faster | 19.07 🏆 | 6.52 |
| [size](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.00x faster | 64.02 | 64.17 🏆 |
| [some](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/some.ts) | src/some.bench.ts > some performance | hidash is 2.96x faster | 18.85 🏆 | 6.36 |
| [sum](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.59x faster | 154.99 🏆 | 59.84 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.47x faster | 305.22 🏆 | 87.99 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.08x faster | 93.98 🏆 | 11.63 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 3.03x faster | 93.29 🏆 | 30.79 |
| [toString](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.95x faster | 34.02 🏆 | 17.44 |
| [transform](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 3.05x faster | 249.65 🏆 | 81.79 |
| [trim](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.82x faster | 34.68 🏆 | 12.29 |
| [union](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.73x faster | 95.65 🏆 | 55.15 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.51x faster | 117.32 🏆 | 77.75 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.73x faster | 66.07 🏆 | 38.28 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.07x faster | 15.97 | 17.03 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/12dd9ef5c2ad004550d4468c5e60e6be6cc87e57/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.17x faster | 139.68 🏆 | 6.30 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2025-01-04_
