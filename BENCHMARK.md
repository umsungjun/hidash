# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.31x faster | 113.19 🏆 | 48.92 |
| [clone](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.35x faster | 56.85 🏆 | 3.48 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.35x faster | 2.06 🏆 | 0.88 |
| [every](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.84x faster | 50.55 🏆 | 27.42 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.90x faster | 6018.30 🏆 | 1020.69 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.30x faster | 5746.81 🏆 | 1084.21 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.46x faster | 76.07 🏆 | 52.25 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.28x faster | 1618.92 🏆 | 1262.90 |
| [gt](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.28x faster | 168.28 🏆 | 51.38 |
| [has](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.53x faster | 510.79 🏆 | 201.98 |
| [includes](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.23x faster | 36.52 🏆 | 5.86 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.91x faster | 221.91 🏆 | 20.33 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 2.37x faster | 2.00 🏆 | 0.84 |
| [keys](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.98x faster | 15.78 🏆 | 5.30 |
| [lt](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.09x faster | 158.18 🏆 | 51.19 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.23x faster | 304.38 🏆 | 247.01 |
| [merge](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.27x faster | 277.34 🏆 | 218.73 |
| [omit](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.90x faster | 108.52 🏆 | 27.82 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.49x faster | 1665.71 🏆 | 667.95 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.88x faster | 18.97 🏆 | 6.59 |
| [size](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.01x faster | 64.75 | 65.09 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.59x faster | 156.10 🏆 | 60.20 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.37x faster | 295.44 🏆 | 87.54 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.26x faster | 97.89 🏆 | 11.85 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.94x faster | 93.74 🏆 | 31.84 |
| [toString](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.07x faster | 36.11 🏆 | 17.47 |
| [trim](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.88x faster | 35.10 🏆 | 12.19 |
| [union](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.75x faster | 95.41 🏆 | 54.63 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.49x faster | 118.10 🏆 | 79.35 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.69x faster | 63.37 🏆 | 37.52 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.38 | 17.13 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/e82892e98e0c6ef5ec38bf20b0e29d6106cfeba9/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.33x faster | 138.61 🏆 | 6.21 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-11_
