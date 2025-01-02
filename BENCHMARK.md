# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.47x faster | 26.58 🏆 | 10.76 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.30x faster | 625.09 🏆 | 271.90 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.32x faster | 112.54 🏆 | 48.43 |
| [clone](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 18.12x faster | 57.48 🏆 | 3.17 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.32x faster | 2.06 🏆 | 0.89 |
| [difference](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.29x faster | 303.37 🏆 | 92.15 |
| [every](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.82x faster | 50.35 🏆 | 27.68 |
| [filter](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 2.55x faster | 17.47 🏆 | 6.84 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.96x faster | 6402.98 🏆 | 1073.78 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.87x faster | 6467.91 🏆 | 1101.57 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.20x faster | 70.63 🏆 | 58.80 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.03x faster | 1181.39 | 1216.96 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.04x faster | 157.30 🏆 | 51.68 |
| [has](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.47x faster | 509.87 🏆 | 206.61 |
| [includes](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.87x faster | 39.88 🏆 | 5.80 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.72x faster | 208.68 🏆 | 19.46 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.36x faster | 5.45 🏆 | 0.86 |
| [keys](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 3.10x faster | 15.81 🏆 | 5.10 |
| [lt](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.05x faster | 159.78 🏆 | 52.31 |
| [map](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.59x faster | 581.51 🏆 | 365.92 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.25x faster | 307.68 🏆 | 245.72 |
| [merge](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.27x faster | 274.30 🏆 | 215.15 |
| [omit](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.93x faster | 108.42 🏆 | 27.59 |
| [pick](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 4.95x faster | 166.15 🏆 | 33.54 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.57x faster | 1707.20 🏆 | 664.19 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.89x faster | 19.01 🏆 | 6.58 |
| [size](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.02x faster | 63.85 | 65.14 🏆 |
| [some](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/some.ts) | src/some.bench.ts > some performance | hidash is 2.94x faster | 18.84 🏆 | 6.40 |
| [sum](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.58x faster | 154.56 🏆 | 59.85 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.42x faster | 300.90 🏆 | 87.92 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.13x faster | 94.99 🏆 | 11.68 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.99x faster | 92.91 🏆 | 31.04 |
| [toString](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.98x faster | 34.50 🏆 | 17.40 |
| [transform](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.84x faster | 241.08 🏆 | 84.85 |
| [trim](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 3.03x faster | 36.46 🏆 | 12.03 |
| [union](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.77x faster | 95.26 🏆 | 53.78 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.52x faster | 118.45 🏆 | 77.71 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.74x faster | 64.86 🏆 | 37.30 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.23 | 17.04 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/5d8909c938d7fc4807137a0a591de7ab3aa4ccc1/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.12x faster | 137.55 🏆 | 6.22 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2025-01-02_
