# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.44x faster | 27.71 🏆 | 11.34 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.23x faster | 611.22 🏆 | 273.60 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.18x faster | 111.53 🏆 | 51.24 |
| [clone](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.89x faster | 56.74 🏆 | 3.36 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.14x faster | 1.90 🏆 | 0.89 |
| [difference](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.23x faster | 305.75 🏆 | 94.65 |
| [every](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.87x faster | 51.54 🏆 | 27.53 |
| [filter](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 2.49x faster | 17.60 🏆 | 7.08 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.58x faster | 6357.44 🏆 | 1138.68 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.54x faster | 6475.77 🏆 | 1169.82 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.14x faster | 71.36 🏆 | 62.58 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.06x faster | 1089.03 | 1155.95 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.22x faster | 167.76 🏆 | 52.13 |
| [has](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.38x faster | 493.65 🏆 | 207.23 |
| [includes](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.80x faster | 40.25 🏆 | 5.92 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.78x faster | 218.26 🏆 | 20.24 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 2.14x faster | 1.96 🏆 | 0.91 |
| [keys](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.94x faster | 15.81 🏆 | 5.37 |
| [lt](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.32x faster | 168.24 🏆 | 50.72 |
| [map](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.60x faster | 586.42 🏆 | 367.09 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.36x faster | 347.21 🏆 | 256.12 |
| [merge](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.25x faster | 274.17 🏆 | 220.12 |
| [omit](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.98x faster | 110.70 🏆 | 27.81 |
| [pick](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.24x faster | 170.09 🏆 | 32.45 |
| [pickBy](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.25x faster | 2.31 🏆 | 1.86 |
| [range](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.51x faster | 30.96 🏆 | 20.51 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.07x faster | 1404.11 🏆 | 676.72 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 3.01x faster | 19.10 🏆 | 6.35 |
| [size](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.02x faster | 64.73 🏆 | 63.23 |
| [some](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/some.ts) | src/some.bench.ts > some performance | hidash is 2.07x faster | 18.82 🏆 | 9.10 |
| [sum](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.63x faster | 155.58 🏆 | 59.19 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.45x faster | 126.29 🏆 | 87.37 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 7.95x faster | 93.28 🏆 | 11.73 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.93x faster | 93.09 🏆 | 31.80 |
| [toString](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.15x faster | 35.72 🏆 | 16.59 |
| [transform](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 3.08x faster | 243.17 🏆 | 79.07 |
| [trim](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.88x faster | 35.53 🏆 | 12.32 |
| [union](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.73x faster | 95.39 🏆 | 55.22 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.48x faster | 117.01 🏆 | 78.85 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.77x faster | 65.74 🏆 | 37.05 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.04x faster | 16.25 | 16.97 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/9430c28ac7cbbd2f58c84a2e998e6340235b07d5/src/values.ts) | src/values.bench.ts > values performance | hidash is 21.41x faster | 135.55 🏆 | 6.33 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2025-02-25_
