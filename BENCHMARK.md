# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.46x faster | 26.36 🏆 | 10.73 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.36x faster | 629.58 🏆 | 267.06 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.28x faster | 110.72 🏆 | 48.50 |
| [clone](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.95x faster | 55.28 🏆 | 3.26 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.30x faster | 2.01 🏆 | 0.88 |
| [difference](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.23x faster | 293.15 🏆 | 90.80 |
| [every](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.82x faster | 48.53 🏆 | 26.59 |
| [filter](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 2.98x faster | 16.75 🏆 | 5.63 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.90x faster | 6412.61 🏆 | 1086.72 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.84x faster | 6377.19 🏆 | 1092.90 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.27x faster | 69.82 🏆 | 55.08 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.02x faster | 1165.82 | 1193.27 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.21x faster | 163.70 🏆 | 50.98 |
| [has](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.20x faster | 462.96 🏆 | 210.28 |
| [includes](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.51x faster | 38.94 🏆 | 5.98 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.95x faster | 218.57 🏆 | 19.95 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.24x faster | 5.35 🏆 | 0.86 |
| [keys](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.97x faster | 15.61 🏆 | 5.26 |
| [lt](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.23x faster | 156.94 🏆 | 48.63 |
| [map](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.62x faster | 585.66 🏆 | 361.21 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.17x faster | 286.65 🏆 | 245.38 |
| [merge](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.26x faster | 274.38 🏆 | 218.20 |
| [omit](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.97x faster | 104.89 🏆 | 26.43 |
| [pick](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.48x faster | 170.92 🏆 | 31.17 |
| [pickBy](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.22x faster | 2.26 🏆 | 1.85 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.77x faster | 1677.00 🏆 | 605.96 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.89x faster | 18.51 🏆 | 6.40 |
| [size](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.03x faster | 61.10 🏆 | 59.57 |
| [some](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/some.ts) | src/some.bench.ts > some performance | hidash is 3.94x faster | 18.72 🏆 | 4.75 |
| [sum](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.60x faster | 154.63 🏆 | 59.54 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.50x faster | 128.39 🏆 | 85.46 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.15x faster | 95.51 🏆 | 11.71 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.92x faster | 90.29 🏆 | 30.94 |
| [toString](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.94x faster | 34.19 🏆 | 17.66 |
| [transform](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 2.93x faster | 241.76 🏆 | 82.57 |
| [trim](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.99x faster | 34.85 🏆 | 11.64 |
| [union](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.76x faster | 94.53 🏆 | 53.66 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.49x faster | 115.63 🏆 | 77.64 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.83x faster | 65.08 🏆 | 35.65 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.06x faster | 16.08 | 17.03 🏆 |
| [values](https://github.com/NaverPayDev/hidash/blob/31174165c5542b89bcc272d774276887e680bb49/src/values.ts) | src/values.bench.ts > values performance | hidash is 21.46x faster | 130.39 🏆 | 6.08 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2025-01-10_
