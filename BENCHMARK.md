# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.32x faster | 113.02 🏆 | 48.65 |
| [clone](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 14.82x faster | 50.37 🏆 | 3.40 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.33x faster | 2.08 🏆 | 0.89 |
| [every](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.82x faster | 49.61 🏆 | 27.23 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.35x faster | 5760.58 🏆 | 1075.79 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.63x faster | 5926.81 🏆 | 1051.99 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.26x faster | 1566.72 🏆 | 1248.27 |
| [gt](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.09x faster | 161.97 🏆 | 52.38 |
| [has](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.63x faster | 519.14 🏆 | 197.65 |
| [includes](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.96x faster | 39.91 🏆 | 5.74 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 11.12x faster | 222.39 🏆 | 20.00 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.38x faster | 5.47 🏆 | 0.86 |
| [keys](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.94x faster | 15.63 🏆 | 5.31 |
| [lt](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.26x faster | 172.79 🏆 | 53.01 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.26x faster | 313.64 🏆 | 249.75 |
| [merge](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.25x faster | 270.19 🏆 | 216.66 |
| [omit](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 3.97x faster | 110.24 🏆 | 27.75 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.54x faster | 1714.44 🏆 | 675.03 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.87x faster | 18.78 🏆 | 6.54 |
| [size](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.01x faster | 64.57 🏆 | 63.67 |
| [sum](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.76x faster | 155.81 🏆 | 56.40 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.50x faster | 310.20 🏆 | 88.58 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 7.90x faster | 93.15 🏆 | 11.79 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 3.07x faster | 94.27 🏆 | 30.71 |
| [toString](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.02x faster | 35.57 🏆 | 17.58 |
| [trim](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.86x faster | 34.62 🏆 | 12.09 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.51x faster | 118.09 🏆 | 78.16 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.68x faster | 63.16 🏆 | 37.51 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/169c1b436bbcfff65892d97aeeddaa06d5033bd6/src/uniqWith.ts) ⚠️ | src/uniqWith.bench.ts > uniqWith performance | lodash is 1.05x faster | 16.23 | 17.09 🏆 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-11_
