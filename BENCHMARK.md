# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.61x faster | 114.05 🏆 | 43.70 |
| [clone](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.34x faster | 57.09 🏆 | 3.49 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.34x faster | 2.13 🏆 | 0.91 |
| [every](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.82x faster | 50.80 🏆 | 27.96 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.76x faster | 6062.36 🏆 | 1052.80 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.64x faster | 5980.16 🏆 | 1060.33 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.32x faster | 1628.58 🏆 | 1231.52 |
| [gt](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.22x faster | 163.54 🏆 | 50.76 |
| [has](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.47x faster | 499.94 🏆 | 202.19 |
| [includes](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.71x faster | 40.53 🏆 | 6.04 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.59x faster | 211.59 🏆 | 19.97 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.54x faster | 5.48 🏆 | 0.84 |
| [keys](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.71x faster | 14.06 🏆 | 5.19 |
| [lt](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.13x faster | 166.12 🏆 | 53.14 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.21x faster | 309.30 🏆 | 254.83 |
| [merge](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.22x faster | 268.57 🏆 | 219.70 |
| [omit](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.97x faster | 109.77 🏆 | 27.64 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.58x faster | 1701.96 🏆 | 659.63 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.94x faster | 18.92 🏆 | 6.43 |
| [size](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.01x faster | 64.62 🏆 | 64.22 |
| [sum](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.36x faster | 139.83 🏆 | 59.29 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.55x faster | 310.17 🏆 | 87.29 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 7.98x faster | 94.51 🏆 | 11.84 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 3.05x faster | 93.65 🏆 | 30.72 |
| [toString](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.96x faster | 35.17 🏆 | 17.90 |
| [trim](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 3.00x faster | 35.37 🏆 | 11.80 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.50x faster | 118.23 🏆 | 78.72 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.70x faster | 64.20 🏆 | 37.81 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/dd7a0373117d4802d39dd323dd2eb000b1706d5e/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.33 | 17.16 🏆 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-11_
