# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.31x faster | 113.83 🏆 | 49.25 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.30x faster | 2.06 🏆 | 0.90 |
| [every](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.83x faster | 50.60 🏆 | 27.69 |
| [findLastIndex](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/findLastIndex.ts) | src/findLastIndex.bench.ts > findLastIndex performance | hidash is 5.83x faster | 6053.57 🏆 | 1038.46 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.25x faster | 1632.44 🏆 | 1301.65 |
| [gt](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.02x faster | 154.79 🏆 | 51.21 |
| [has](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.50x faster | 494.42 🏆 | 198.06 |
| [includes](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 6.90x faster | 40.41 🏆 | 5.85 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.66x faster | 216.36 🏆 | 20.29 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.20x faster | 5.50 🏆 | 0.89 |
| [keys](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.95x faster | 15.93 🏆 | 5.41 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.22x faster | 308.33 🏆 | 252.44 |
| [merge](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.28x faster | 276.96 🏆 | 216.74 |
| [omit](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 2.38x faster | 65.38 🏆 | 27.47 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.61x faster | 1715.95 🏆 | 657.62 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.86x faster | 18.71 🏆 | 6.53 |
| [size](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/size.ts) | src/size.bench.ts > size performance | hidash is 1.03x faster | 63.89 🏆 | 61.86 |
| [sum](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.56x faster | 153.36 🏆 | 59.83 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.39x faster | 289.65 🏆 | 85.47 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.28x faster | 98.20 🏆 | 11.87 |
| [toString](https://github.com/NaverPayDev/hidash/blob/7581750ad3be7e934aec8e1faf130f5f073cecf3/src/toString.ts) | src/toString.bench.ts > toString performance | hidash is 2.03x faster | 36.32 🏆 | 17.85 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-12-01_
