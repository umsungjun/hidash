# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.36x faster | 26.58 🏆 | 11.25 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.30x faster | 623.08 🏆 | 270.87 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.29x faster | 113.26 🏆 | 49.42 |
| [clone](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.95x faster | 57.46 🏆 | 3.20 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.35x faster | 2.10 🏆 | 0.89 |
| [difference](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.26x faster | 307.75 🏆 | 94.32 |
| [every](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.81x faster | 50.43 🏆 | 27.81 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.91x faster | 5985.39 🏆 | 1013.01 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.05x faster | 5686.88 🏆 | 1126.26 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.13x faster | 69.10 🏆 | 61.10 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.18x faster | 1496.96 🏆 | 1263.85 |
| [gt](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.22x faster | 162.70 🏆 | 50.51 |
| [has](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.38x faster | 486.93 🏆 | 204.84 |
| [includes](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.45x faster | 39.01 🏆 | 6.05 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 11.09x faster | 218.42 🏆 | 19.69 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.39x faster | 5.47 🏆 | 0.86 |
| [keys](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.96x faster | 15.95 🏆 | 5.38 |
| [lt](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.22x faster | 165.61 🏆 | 51.40 |
| [map](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.22x faster | 448.31 🏆 | 367.48 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.26x faster | 306.91 🏆 | 243.25 |
| [merge](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.23x faster | 269.62 🏆 | 218.37 |
| [omit](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.00x faster | 109.67 🏆 | 27.41 |
| [pick](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.14x faster | 168.19 🏆 | 32.72 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.59x faster | 1699.93 🏆 | 655.84 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.88x faster | 18.83 🏆 | 6.53 |
| [size](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.00x faster | 64.84 | 64.91 🏆 |
| [some](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/some.ts) | src/some.bench.ts > some performance | hidash is 2.57x faster | 18.69 🏆 | 7.26 |
| [sum](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.58x faster | 155.00 🏆 | 60.11 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.51x faster | 303.95 🏆 | 86.70 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.16x faster | 95.78 🏆 | 11.74 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.95x faster | 92.69 🏆 | 31.43 |
| [toString](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.05x faster | 36.27 🏆 | 17.70 |
| [transform](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 3.07x faster | 249.46 🏆 | 81.38 |
| [trim](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.96x faster | 34.96 🏆 | 11.79 |
| [union](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.73x faster | 95.60 🏆 | 55.26 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.49x faster | 116.30 🏆 | 78.25 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.69x faster | 63.97 🏆 | 37.86 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.04x faster | 16.30 | 16.99 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/ae44bc96c4326acad74d6a2507064ebeda1cacb4/src/values.ts) | src/values.bench.ts > values performance | hidash is 21.79x faster | 138.24 🏆 | 6.35 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-20_
