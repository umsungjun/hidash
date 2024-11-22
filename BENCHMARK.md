# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.13x faster | 112.88 🏆 | 52.99 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 3.58x faster | 3.23 🏆 | 0.90 |
| [every](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.89x faster | 51.94 🏆 | 27.55 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/groupBy.ts) | src/groupBy.bench.ts > groupBy basic performance | hidash is 2.06x faster | 622.18 🏆 | 301.76 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/groupBy.ts) | src/groupBy.bench.ts > groupBy complex performance | hidash is 1.26x faster | 36.88 🏆 | 29.28 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/groupBy.ts) | src/groupBy.bench.ts > groupBy large array performance (simple key) | hidash is 1.20x faster | 3575.65 🏆 | 2970.82 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/groupBy.ts) | src/groupBy.bench.ts > groupBy large array performance (complex operations) | hidash is 1.25x faster | 3061.87 🏆 | 2444.18 |
| [has](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.55x faster | 499.27 🏆 | 195.57 |
| [includes](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.55x faster | 40.31 🏆 | 6.16 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.44x faster | 215.46 🏆 | 20.64 |
| [keys](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.94x faster | 15.85 🏆 | 5.39 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.23x faster | 298.96 🏆 | 242.53 |
| [merge](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.30x faster | 280.90 🏆 | 216.50 |
| [omit](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 2.41x faster | 67.26 🏆 | 27.92 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.51x faster | 1697.25 🏆 | 676.26 |
| [size](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.01x faster | 71.16 🏆 | 70.39 |
| [sum](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.59x faster | 155.75 🏆 | 60.12 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.46x faster | 302.74 🏆 | 87.44 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/3eb2879ed3c3f19bf2407847763d82658b5c861e/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.77x faster | 104.58 🏆 | 11.93 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-11-22_
