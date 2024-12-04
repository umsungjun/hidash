# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.32x faster | 113.72 🏆 | 48.93 |
| [clone](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.69x faster | 57.78 🏆 | 3.27 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.37x faster | 2.09 🏆 | 0.88 |
| [every](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.82x faster | 50.72 🏆 | 27.87 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.43x faster | 6060.96 🏆 | 1115.26 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.50x faster | 5842.88 🏆 | 1063.07 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.33x faster | 1604.10 🏆 | 1207.40 |
| [gt](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.12x faster | 158.09 🏆 | 50.62 |
| [has](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.46x faster | 497.62 🏆 | 202.03 |
| [includes](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.49x faster | 40.52 🏆 | 6.24 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.77x faster | 212.01 🏆 | 19.68 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.47x faster | 5.47 🏆 | 0.85 |
| [keys](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.94x faster | 15.91 🏆 | 5.42 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.24x faster | 309.13 🏆 | 248.62 |
| [merge](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.25x faster | 272.44 🏆 | 218.30 |
| [omit](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.94x faster | 108.99 🏆 | 27.69 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.60x faster | 1707.73 🏆 | 657.66 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 3.01x faster | 19.03 🏆 | 6.32 |
| [size](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.01x faster | 64.63 | 64.99 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.59x faster | 155.47 🏆 | 60.00 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.45x faster | 304.17 🏆 | 88.11 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.05x faster | 94.35 🏆 | 11.73 |
| [toString](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 1.94x faster | 34.73 🏆 | 17.93 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.51x faster | 117.60 🏆 | 77.63 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/d1cc9bd6a9b65b4af1ac09df89d7334c07476729/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.66x faster | 63.75 🏆 | 38.31 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-04_
