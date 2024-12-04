# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.31x faster | 113.09 🏆 | 48.97 |
| [clone](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.33x faster | 57.05 🏆 | 3.29 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.35x faster | 2.05 🏆 | 0.87 |
| [every](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.83x faster | 50.39 🏆 | 27.55 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.39x faster | 6005.44 🏆 | 1114.43 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.44x faster | 5883.25 🏆 | 1081.28 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.25x faster | 1555.50 🏆 | 1248.78 |
| [gt](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.05x faster | 158.78 🏆 | 52.02 |
| [has](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.36x faster | 493.64 🏆 | 209.04 |
| [includes](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.66x faster | 40.11 🏆 | 6.02 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.20x faster | 201.06 🏆 | 19.70 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.49x faster | 5.49 🏆 | 0.85 |
| [keys](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.95x faster | 15.82 🏆 | 5.36 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.20x faster | 297.79 🏆 | 247.85 |
| [merge](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.27x faster | 274.24 🏆 | 215.21 |
| [omit](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.04x faster | 110.67 🏆 | 27.38 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.80x faster | 1698.92 🏆 | 607.13 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 3.11x faster | 18.81 🏆 | 6.05 |
| [size](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.00x faster | 64.49 | 64.76 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.58x faster | 154.58 🏆 | 59.96 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.18x faster | 278.32 🏆 | 87.50 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.25x faster | 97.06 🏆 | 11.76 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 3.71x faster | 0.93 🏆 | 0.25 |
| [toString](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.99x faster | 35.59 🏆 | 17.84 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.50x faster | 117.73 🏆 | 78.36 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/9e022b8de60e55cce36e17444967ddd3e48f2ffb/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.65x faster | 63.32 🏆 | 38.33 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-04_
