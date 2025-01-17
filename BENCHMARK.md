# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.41x faster | 26.61 🏆 | 11.04 |
| [chunk](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.42x faster | 638.52 🏆 | 263.94 |
| [clamp](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.31x faster | 111.55 🏆 | 48.32 |
| [clone](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.13x faster | 55.96 🏆 | 3.27 |
| [cloneDeep](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.41x faster | 2.08 🏆 | 0.87 |
| [difference](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.16x faster | 288.82 🏆 | 91.35 |
| [every](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.77x faster | 48.70 🏆 | 27.45 |
| [filter](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 2.94x faster | 16.88 🏆 | 5.74 |
| [findIndex](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 6.35x faster | 6439.37 🏆 | 1014.61 |
| [findLastIndex](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 6.02x faster | 6451.82 🏆 | 1072.54 |
| [flatten](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.24x faster | 69.79 🏆 | 56.36 |
| [groupBy](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.06x faster | 1125.36 | 1195.23 🏆 |
| [gt](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.21x faster | 165.45 🏆 | 51.56 |
| [has](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.25x faster | 466.42 🏆 | 207.52 |
| [includes](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.39x faster | 39.52 🏆 | 6.19 |
| [isEmpty](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.94x faster | 217.74 🏆 | 19.91 |
| [isEqual](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.28x faster | 5.30 🏆 | 0.84 |
| [keys](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.96x faster | 15.25 🏆 | 5.15 |
| [lt](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.26x faster | 168.33 🏆 | 51.69 |
| [map](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.63x faster | 587.87 🏆 | 360.55 |
| [mapValues](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.22x faster | 298.21 🏆 | 243.64 |
| [merge](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.24x faster | 271.42 🏆 | 219.30 |
| [omit](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.02x faster | 108.47 🏆 | 26.95 |
| [pick](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 4.96x faster | 163.62 🏆 | 32.99 |
| [pickBy](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.21x faster | 2.26 🏆 | 1.86 |
| [range](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.60x faster | 30.91 🏆 | 19.37 |
| [repeat](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.55x faster | 1688.60 🏆 | 661.18 |
| [shuffle](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.92x faster | 18.53 🏆 | 6.33 |
| [size](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.01x faster | 64.31 🏆 | 63.51 |
| [some](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/some.ts) | src/some.bench.ts > some performance | hidash is 2.80x faster | 18.60 🏆 | 6.63 |
| [sum](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.56x faster | 153.55 🏆 | 59.96 |
| [sumBy](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.46x faster | 125.60 🏆 | 86.12 |
| [toNumber](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.22x faster | 96.08 🏆 | 11.68 |
| [toPairs](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.97x faster | 91.31 🏆 | 30.73 |
| [toString](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.08x faster | 36.20 🏆 | 17.45 |
| [transform](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.99x faster | 247.47 🏆 | 82.70 |
| [trim](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.98x faster | 35.08 🏆 | 11.76 |
| [union](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.80x faster | 94.78 🏆 | 52.74 |
| [uniq](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.51x faster | 116.10 🏆 | 76.95 |
| [uniqBy](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.74x faster | 65.04 🏆 | 37.44 |
| [uniqWith](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.27 | 17.04 🏆 |
| [values](https://github.com/NaverPayDev2025/hidash/blob/bab13c0a601cb20a942ca87c4904473cc13de64d/src/values.ts) | src/values.bench.ts > values performance | hidash is 21.29x faster | 131.45 🏆 | 6.17 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2025-01-17_
