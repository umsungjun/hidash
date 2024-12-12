# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.30x faster | 113.71 🏆 | 49.47 |
| [clone](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.66x faster | 56.38 🏆 | 3.38 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.33x faster | 2.06 🏆 | 0.89 |
| [every](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.82x faster | 49.94 🏆 | 27.44 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.65x faster | 6013.62 🏆 | 1064.87 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.76x faster | 6004.55 🏆 | 1042.93 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.22x faster | 69.58 🏆 | 57.08 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.18x faster | 1420.24 🏆 | 1203.14 |
| [gt](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.27x faster | 168.24 🏆 | 51.41 |
| [has](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.47x faster | 500.16 🏆 | 202.15 |
| [includes](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 7.01x faster | 39.87 🏆 | 5.69 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 9.69x faster | 191.16 🏆 | 19.72 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.52x faster | 5.46 🏆 | 0.84 |
| [keys](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.97x faster | 15.86 🏆 | 5.35 |
| [lt](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.20x faster | 170.92 🏆 | 53.41 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.16x faster | 283.64 🏆 | 243.56 |
| [merge](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.25x faster | 274.57 🏆 | 219.08 |
| [omit](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.81x faster | 105.07 🏆 | 27.60 |
| [pick](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 4.69x faster | 164.49 🏆 | 35.08 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.59x faster | 1698.00 🏆 | 655.78 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.92x faster | 18.90 🏆 | 6.47 |
| [size](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.00x faster | 63.90 🏆 | 63.60 |
| [sum](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.58x faster | 155.69 🏆 | 60.28 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.51x faster | 308.44 🏆 | 87.94 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 7.64x faster | 90.73 🏆 | 11.87 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.98x faster | 93.03 🏆 | 31.23 |
| [toString](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.01x faster | 35.86 🏆 | 17.84 |
| [trim](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.96x faster | 35.78 🏆 | 12.08 |
| [union](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.76x faster | 93.78 🏆 | 53.21 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.49x faster | 117.29 🏆 | 78.45 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.78x faster | 63.13 🏆 | 35.42 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.04x faster | 16.46 | 17.17 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/252a72573fc39a87229f8106eae7b32e8f720216/src/values.ts) | src/values.bench.ts > values performance | hidash is 21.84x faster | 136.16 🏆 | 6.23 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-12_
