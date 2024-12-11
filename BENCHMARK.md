# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.29x faster | 112.46 🏆 | 49.05 |
| [clone](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 16.16x faster | 54.33 🏆 | 3.36 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.28x faster | 2.05 🏆 | 0.90 |
| [every](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.81x faster | 49.72 🏆 | 27.51 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.64x faster | 5897.96 🏆 | 1046.28 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.41x faster | 5870.75 🏆 | 1085.14 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.29x faster | 73.02 🏆 | 56.53 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.27x faster | 1479.34 🏆 | 1167.39 |
| [gt](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.07x faster | 159.31 🏆 | 51.87 |
| [has](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.60x faster | 515.53 🏆 | 198.41 |
| [includes](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.59x faster | 40.14 🏆 | 6.09 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.72x faster | 210.54 🏆 | 19.64 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.46x faster | 5.45 🏆 | 0.84 |
| [keys](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.93x faster | 15.30 🏆 | 5.22 |
| [lt](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 2.99x faster | 153.59 🏆 | 51.43 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.21x faster | 295.33 🏆 | 244.74 |
| [merge](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.23x faster | 269.14 🏆 | 218.79 |
| [omit](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.97x faster | 108.53 🏆 | 27.31 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.55x faster | 1693.98 🏆 | 664.95 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.90x faster | 18.60 🏆 | 6.41 |
| [size](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.00x faster | 63.94 | 63.99 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.58x faster | 154.96 🏆 | 60.17 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.57x faster | 308.97 🏆 | 86.66 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.32x faster | 97.24 🏆 | 11.69 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.92x faster | 92.28 🏆 | 31.56 |
| [toString](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.99x faster | 35.10 🏆 | 17.63 |
| [trim](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.95x faster | 34.97 🏆 | 11.84 |
| [union](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.79x faster | 93.17 🏆 | 52.04 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.50x faster | 116.46 🏆 | 77.53 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.74x faster | 63.10 🏆 | 36.24 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/a57893c659701186436478acda1cfb0b7f5c6189/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.06x faster | 16.19 | 17.12 🏆 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-11_
