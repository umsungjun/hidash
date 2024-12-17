# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [chunk](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.29x faster | 615.38 🏆 | 269.15 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.20x faster | 108.49 🏆 | 49.40 |
| [clone](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.26x faster | 56.83 🏆 | 3.29 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.37x faster | 2.07 🏆 | 0.87 |
| [difference](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.22x faster | 296.97 🏆 | 92.11 |
| [every](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.79x faster | 48.82 🏆 | 27.23 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.19x faster | 5721.77 🏆 | 1103.29 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.78x faster | 5875.80 🏆 | 1016.14 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.14x faster | 67.97 🏆 | 59.58 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.29x faster | 1547.61 🏆 | 1196.62 |
| [gt](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.08x faster | 157.23 🏆 | 51.09 |
| [has](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.39x faster | 482.31 🏆 | 202.07 |
| [includes](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.75x faster | 39.55 🏆 | 5.86 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 11.12x faster | 211.24 🏆 | 19.00 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.41x faster | 5.45 🏆 | 0.85 |
| [keys](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.96x faster | 15.80 🏆 | 5.34 |
| [lt](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.12x faster | 160.17 🏆 | 51.27 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.19x faster | 293.81 🏆 | 246.26 |
| [merge](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.27x faster | 273.47 🏆 | 216.17 |
| [omit](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.02x faster | 108.89 🏆 | 27.11 |
| [pick](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.05x faster | 167.83 🏆 | 33.22 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.55x faster | 1686.88 🏆 | 662.55 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.94x faster | 18.64 🏆 | 6.35 |
| [size](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.02x faster | 63.11 🏆 | 61.94 |
| [sum](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.59x faster | 154.94 🏆 | 59.79 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.36x faster | 293.83 🏆 | 87.52 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.06x faster | 91.22 🏆 | 11.32 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 3.10x faster | 92.21 🏆 | 29.75 |
| [toString](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.87x faster | 32.95 🏆 | 17.62 |
| [transform](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 3.11x faster | 247.63 🏆 | 79.64 |
| [trim](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.94x faster | 34.71 🏆 | 11.83 |
| [union](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.79x faster | 94.87 🏆 | 52.92 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.55x faster | 118.38 🏆 | 76.44 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.70x faster | 63.64 🏆 | 37.54 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.28 | 17.03 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/8ea84b7d417089b746724a816e8902e531c1cfbf/src/values.ts) | src/values.bench.ts > values performance | hidash is 21.90x faster | 135.39 🏆 | 6.18 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-17_
