# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.31x faster | 114.04 🏆 | 49.31 |
| [clone](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.94x faster | 57.45 🏆 | 3.39 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.32x faster | 2.09 🏆 | 0.90 |
| [every](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.83x faster | 50.74 🏆 | 27.67 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.66x faster | 6005.26 🏆 | 1060.83 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.53x faster | 5930.78 🏆 | 1071.54 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.23x faster | 73.83 🏆 | 60.19 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.20x faster | 1500.20 🏆 | 1251.52 |
| [gt](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.23x faster | 165.30 🏆 | 51.11 |
| [has](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.55x faster | 513.55 🏆 | 201.71 |
| [includes](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 7.10x faster | 40.20 🏆 | 5.66 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.91x faster | 216.16 🏆 | 19.81 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.44x faster | 5.49 🏆 | 0.85 |
| [keys](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.97x faster | 15.93 🏆 | 5.36 |
| [lt](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.07x faster | 157.84 🏆 | 51.35 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.22x faster | 304.92 🏆 | 250.21 |
| [merge](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.24x faster | 275.93 🏆 | 223.11 |
| [omit](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.98x faster | 110.09 🏆 | 27.69 |
| [pick](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 4.94x faster | 165.82 🏆 | 33.55 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.61x faster | 1641.39 🏆 | 628.41 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.95x faster | 19.20 🏆 | 6.50 |
| [size](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.01x faster | 65.71 🏆 | 65.33 |
| [sum](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.59x faster | 155.45 🏆 | 59.92 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.52x faster | 307.70 🏆 | 87.46 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.10x faster | 96.07 🏆 | 11.86 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 3.05x faster | 94.04 🏆 | 30.88 |
| [toString](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.15x faster | 35.39 🏆 | 16.44 |
| [trim](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.97x faster | 35.38 🏆 | 11.90 |
| [union](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.74x faster | 95.47 🏆 | 54.74 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.50x faster | 117.81 🏆 | 78.42 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.65x faster | 62.63 🏆 | 38.03 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.37 | 17.15 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/104d305376e6f34fe543a3678ecd2284ca731ff8/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.03x faster | 137.84 🏆 | 6.26 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-12_
