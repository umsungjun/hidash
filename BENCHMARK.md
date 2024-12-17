# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.30x faster | 112.92 🏆 | 49.20 |
| [clone](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.62x faster | 57.08 🏆 | 3.24 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.29x faster | 2.06 🏆 | 0.90 |
| [every](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.84x faster | 50.55 🏆 | 27.54 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.31x faster | 5885.10 🏆 | 1108.86 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.58x faster | 5970.67 🏆 | 1070.08 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.19x faster | 72.62 🏆 | 60.94 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.20x faster | 1463.92 🏆 | 1224.24 |
| [gt](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.18x faster | 161.44 🏆 | 50.70 |
| [has](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.33x faster | 488.80 🏆 | 210.00 |
| [includes](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.88x faster | 40.13 🏆 | 5.83 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.72x faster | 207.87 🏆 | 19.39 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.19x faster | 5.44 🏆 | 0.88 |
| [keys](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.96x faster | 15.90 🏆 | 5.38 |
| [lt](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.37x faster | 166.32 🏆 | 49.35 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.26x faster | 307.70 🏆 | 244.88 |
| [merge](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.24x faster | 270.69 🏆 | 219.06 |
| [omit](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.00x faster | 110.77 🏆 | 27.68 |
| [pick](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.15x faster | 173.03 🏆 | 33.61 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.73x faster | 1703.50 🏆 | 624.88 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.99x faster | 18.82 🏆 | 6.30 |
| [size](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.01x faster | 63.68 | 64.05 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.59x faster | 154.90 🏆 | 59.78 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.43x faster | 302.50 🏆 | 88.17 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.16x faster | 95.07 🏆 | 11.66 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 3.04x faster | 92.35 🏆 | 30.37 |
| [toString](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.02x faster | 35.57 🏆 | 17.62 |
| [transform](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 3.27x faster | 243.82 🏆 | 74.58 |
| [trim](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.84x faster | 35.07 🏆 | 12.35 |
| [union](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.75x faster | 95.38 🏆 | 54.64 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.55x faster | 118.72 🏆 | 76.71 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.68x faster | 63.84 🏆 | 38.05 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.31 | 17.07 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/b31662099d02ddd563936a2bf8d09238ee77c0da/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.01x faster | 137.80 🏆 | 6.26 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-17_
