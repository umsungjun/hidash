# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [assign](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/assign.ts) | src/assign.bench.ts > assign performance | hidash is 2.49x faster | 27.95 🏆 | 11.25 |
| [chunk](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/chunk.ts) | src/chunk.bench.ts | hidash is 2.36x faster | 622.73 🏆 | 263.90 |
| [clamp](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.17x faster | 111.72 🏆 | 51.47 |
| [clone](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/clone.ts) | src/clone.bench.ts > clone performance | hidash is 17.43x faster | 56.85 🏆 | 3.26 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.28x faster | 2.00 🏆 | 0.88 |
| [difference](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/difference.ts) | src/difference.bench.ts > difference performance | hidash is 3.16x faster | 291.65 🏆 | 92.38 |
| [every](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.86x faster | 50.61 🏆 | 27.25 |
| [filter](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/filter.ts) | src/filter.bench.ts > filter performance | hidash is 2.14x faster | 17.45 🏆 | 8.17 |
| [findIndex](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/findIndex.ts) | src/findIndex.bench.ts > findIndex performance | hidash is 5.41x faster | 6149.46 🏆 | 1135.99 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.60x faster | 5947.87 🏆 | 1061.91 |
| [flatten](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/flatten.ts) | src/flatten.bench.ts > flatten performance | hidash is 1.29x faster | 73.84 🏆 | 57.03 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/groupBy.ts) ⚠️ | src/groupBy.bench.ts > groupBy performance comparison | lodash is 1.10x faster | 1080.59 | 1185.20 🏆 |
| [gt](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.07x faster | 159.75 🏆 | 51.97 |
| [has](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.36x faster | 495.29 🏆 | 209.44 |
| [includes](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.70x faster | 40.17 🏆 | 5.99 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.97x faster | 223.86 🏆 | 20.40 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 5.92x faster | 5.48 🏆 | 0.92 |
| [keys](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.96x faster | 15.80 🏆 | 5.34 |
| [lt](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/lt.ts) | src/lt.bench.ts > lt performance | hidash is 3.27x faster | 170.13 🏆 | 52.07 |
| [map](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/map.ts) | src/map.bench.ts > map performance | hidash is 1.60x faster | 591.30 🏆 | 368.93 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.32x faster | 327.16 🏆 | 248.39 |
| [merge](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.26x faster | 272.29 🏆 | 215.46 |
| [omit](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 4.06x faster | 110.59 🏆 | 27.27 |
| [pick](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/pick.ts) | src/pick.bench.ts > pick performance | hidash is 5.20x faster | 168.00 🏆 | 32.28 |
| [pickBy](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/pickBy.ts) | src/pickBy.bench.ts > pickBy performance | hidash is 1.24x faster | 2.31 🏆 | 1.87 |
| [range](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/range.ts) | src/range.bench.ts > range performance | hidash is 1.52x faster | 30.89 🏆 | 20.30 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.50x faster | 1698.58 🏆 | 680.09 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.96x faster | 18.90 🏆 | 6.39 |
| [size](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.01x faster | 64.37 🏆 | 64.00 |
| [some](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/some.ts) | src/some.bench.ts > some performance | hidash is 2.60x faster | 18.77 🏆 | 7.23 |
| [sum](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.58x faster | 155.46 🏆 | 60.27 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 1.46x faster | 126.31 🏆 | 86.24 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.26x faster | 96.22 🏆 | 11.65 |
| [toPairs](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/toPairs.ts) | src/toPairs.bench.ts > toPairs performance | hidash is 2.96x faster | 92.66 🏆 | 31.29 |
| [toString](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.06x faster | 36.17 🏆 | 17.53 |
| [transform](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/transform.ts) | src/transform.bench.ts > transform performance | hidash is 3.05x faster | 249.00 🏆 | 81.71 |
| [trim](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/trim.ts) | src/trim.bench.ts > trim performance | hidash is 2.87x faster | 34.96 🏆 | 12.19 |
| [union](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/union.ts) | src/union.bench.ts > union performance | hidash is 1.72x faster | 94.14 🏆 | 54.84 |
| [uniq](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/uniq.ts) | src/uniq.bench.ts > uniq performance | hidash is 1.48x faster | 117.30 🏆 | 79.46 |
| [uniqBy](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/uniqBy.ts) | src/uniqBy.bench.ts > uniqBy performance | hidash is 1.75x faster | 64.80 🏆 | 37.06 |
| [uniqWith](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/uniqWith.ts) | src/uniqWith.bench.ts > uniqWith performance | hidash is 1.02x faster | 7.36 🏆 | 7.22 |
| [values](https://github.com/NaverPayDev/hidash/blob/2f044304bfaa157922e816264e87c6a4a41de801/src/values.ts) | src/values.bench.ts > values performance | hidash is 22.27x faster | 138.59 🏆 | 6.22 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2025-02-19_
