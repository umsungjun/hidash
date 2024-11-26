# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.27x faster | 111.68 🏆 | 49.16 |
| [cloneDeep](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/cloneDeep.ts) | src/cloneDeep.bench.ts > cloneDeep performance | hidash is 2.24x faster | 2.03 🏆 | 0.91 |
| [every](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.83x faster | 50.26 🏆 | 27.44 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/groupBy.ts) | src/groupBy.bench.ts > groupBy performance comparison | hidash is 1.29x faster | 1604.39 🏆 | 1248.53 |
| [gt](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/gt.ts) | src/gt.bench.ts > gt performance | hidash is 3.20x faster | 158.61 🏆 | 49.63 |
| [has](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.31x faster | 490.79 🏆 | 212.12 |
| [includes](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 7.12x faster | 40.41 🏆 | 5.68 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 11.13x faster | 221.62 🏆 | 19.91 |
| [isEqual](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/isEqual.ts) | src/isEqual.bench.ts > isEqual performance | hidash is 6.51x faster | 5.50 🏆 | 0.84 |
| [keys](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.95x faster | 15.90 🏆 | 5.39 |
| [mapValues](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/mapValues.ts) | src/mapValues.bench.ts > mapValues performance | hidash is 1.15x faster | 287.61 🏆 | 249.89 |
| [merge](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.21x faster | 262.50 🏆 | 216.67 |
| [omit](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 2.44x faster | 66.76 🏆 | 27.36 |
| [repeat](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/repeat.ts) | src/repeat.bench.ts > repeat performance | hidash is 2.62x faster | 1718.78 🏆 | 655.11 |
| [shuffle](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/shuffle.ts) | src/shuffle.bench.ts > shuffle performance | hidash is 2.90x faster | 18.71 🏆 | 6.45 |
| [size](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.01x faster | 70.17 | 71.20 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.59x faster | 154.75 🏆 | 59.72 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.35x faster | 294.55 🏆 | 87.94 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/db728d25a9f527698640998f12fd8398b29e709c/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.24x faster | 97.58 🏆 | 11.85 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
>
> ⚠️ indicates where hidash is slower than lodash.
>
> 🏆 indicates the faster implementation.

_Last updated: 2024-11-26_
