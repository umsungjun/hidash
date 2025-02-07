# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.39x faster | 26.72 🏆 | 11.18 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.41x faster | 644.86 🏆 | 267.90 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.27x faster | 112.15 🏆 | 49.41 |
| [clone](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.57x faster | 56.93 🏆 | 3.24 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.23x faster | 2.00 🏆 | 0.90 |
| [difference](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.25x faster | 307.66 🏆 | 94.58 |
| [every](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.87x faster | 51.29 🏆 | 27.48 |
| [filter](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 2.83x faster | 17.53 🏆 | 6.20 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.42x faster | 6189.44 🏆 | 1141.95 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.60x faster | 6271.31 🏆 | 1119.49 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.11x faster | 68.77 🏆 | 61.72 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.05x faster | 1130.65 | 1185.59 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.02x faster | 158.48 🏆 | 52.50 |
| [has](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.39x faster | 501.54 🏆 | 210.17 |
| [includes](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.98x faster | 40.32 🏆 | 5.78 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.72x faster | 215.10 🏆 | 20.07 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.52x faster | 5.50 🏆 | 0.84 |
| [keys](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.95x faster | 15.83 🏆 | 5.37 |
| [lt](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.29x faster | 171.57 🏆 | 52.12 |
| [map](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.60x faster | 603.79 🏆 | 376.42 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.20x faster | 302.41 🏆 | 251.24 |
| [merge](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.26x faster | 271.50 🏆 | 216.08 |
| [omit](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.95x faster | 110.44 🏆 | 27.96 |
| [pick](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.05x faster | 165.93 🏆 | 32.87 |
| [pickBy](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.23x faster | 2.34 🏆 | 1.91 |
| [range](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.57x faster | 31.18 🏆 | 19.82 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.54x faster | 1689.94 🏆 | 664.83 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.91x faster | 18.76 🏆 | 6.45 |
| [size](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.00x faster | 63.95 🏆 | 63.68 |
| [some](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/some.ts) | src/some.bench.ts > some performance | hidash is 2.54x faster | 18.71 🏆 | 7.38 |
| [sum](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.56x faster | 154.34 🏆 | 60.18 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.42x faster | 125.32 🏆 | 88.14 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.02x faster | 94.62 🏆 | 11.80 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.94x faster | 93.53 🏆 | 31.77 |
| [toString](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.02x faster | 35.52 🏆 | 17.62 |
| [transform](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.89x faster | 243.06 🏆 | 84.22 |
| [trim](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.80x faster | 33.76 🏆 | 12.08 |
| [union](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.75x faster | 95.44 🏆 | 54.45 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.49x faster | 118.13 🏆 | 79.19 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.83x faster | 66.08 🏆 | 36.16 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.03x faster | 16.23 | 16.78 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/2013663b54d7b314e50aa4831d733564fd13cc80/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.11x faster | 138.36 🏆 | 6.26 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2025-02-07_
