# Benchmark Results

Latest benchmark results comparing hidash vs lodash performance.

| Method | Test | Performance Comparison | `hidash` ops/sec | `lodash@4.17.21` ops/sec |
|--------|------|----------------------|----------------|----------------|
| [clamp](https://github.com/NaverPayDev/hidash/blob/38d474d6b98da136e49c852d1fd67cbca81ab3bd/src/clamp.ts) | src/clamp.bench.ts > clamp performance | hidash is 2.38x faster | 112.36 🏆 | 47.27 |
| [every](https://github.com/NaverPayDev/hidash/blob/38d474d6b98da136e49c852d1fd67cbca81ab3bd/src/every.ts) | src/every.bench.ts > every performance | hidash is 1.89x faster | 52.36 🏆 | 27.71 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/38d474d6b98da136e49c852d1fd67cbca81ab3bd/src/groupBy.ts) | src/groupBy.bench.ts > groupBy basic performance | hidash is 1.95x faster | 614.39 🏆 | 314.87 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/38d474d6b98da136e49c852d1fd67cbca81ab3bd/src/groupBy.ts) | src/groupBy.bench.ts > groupBy complex performance | hidash is 1.27x faster | 37.51 🏆 | 29.50 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/38d474d6b98da136e49c852d1fd67cbca81ab3bd/src/groupBy.ts) | src/groupBy.bench.ts > groupBy large array performance (simple key) | hidash is 1.21x faster | 3485.41 🏆 | 2891.65 |
| [groupBy](https://github.com/NaverPayDev/hidash/blob/38d474d6b98da136e49c852d1fd67cbca81ab3bd/src/groupBy.ts) | src/groupBy.bench.ts > groupBy large array performance (complex operations) | hidash is 1.50x faster | 3156.35 🏆 | 2111.15 |
| [has](https://github.com/NaverPayDev/hidash/blob/38d474d6b98da136e49c852d1fd67cbca81ab3bd/src/has.ts) | src/has.bench.ts > has performance | hidash is 2.60x faster | 498.75 🏆 | 192.03 |
| [includes](https://github.com/NaverPayDev/hidash/blob/38d474d6b98da136e49c852d1fd67cbca81ab3bd/src/includes.ts) | src/includes.bench.ts > includes performance | hidash is 7.02x faster | 40.44 🏆 | 5.76 |
| [isEmpty](https://github.com/NaverPayDev/hidash/blob/38d474d6b98da136e49c852d1fd67cbca81ab3bd/src/isEmpty.ts) | src/isEmpty.bench.ts > isEmpty performance | hidash is 10.93x faster | 220.99 🏆 | 20.22 |
| [keys](https://github.com/NaverPayDev/hidash/blob/38d474d6b98da136e49c852d1fd67cbca81ab3bd/src/keys.ts) | src/keys.bench.ts > keys performance | hidash is 2.98x faster | 15.86 🏆 | 5.32 |
| [merge](https://github.com/NaverPayDev/hidash/blob/38d474d6b98da136e49c852d1fd67cbca81ab3bd/src/merge.ts) | src/merge.bench.ts > merge performance | hidash is 1.30x faster | 278.47 🏆 | 213.98 |
| [omit](https://github.com/NaverPayDev/hidash/blob/38d474d6b98da136e49c852d1fd67cbca81ab3bd/src/omit.ts) | src/omit.bench.ts > omit performance | hidash is 2.40x faster | 66.67 🏆 | 27.83 |
| [size](https://github.com/NaverPayDev/hidash/blob/38d474d6b98da136e49c852d1fd67cbca81ab3bd/src/size.ts) ⚠️ | src/size.bench.ts > size performance | lodash is 1.01x faster | 71.23 | 71.72 🏆 |
| [sum](https://github.com/NaverPayDev/hidash/blob/38d474d6b98da136e49c852d1fd67cbca81ab3bd/src/sum.ts) | src/sum.bench.ts > sum performance | hidash is 2.58x faster | 153.95 🏆 | 59.73 |
| [sumBy](https://github.com/NaverPayDev/hidash/blob/38d474d6b98da136e49c852d1fd67cbca81ab3bd/src/sumBy.ts) | src/sumBy.bench.ts > sumBy performance | hidash is 3.48x faster | 302.14 🏆 | 86.79 |
| [toNumber](https://github.com/NaverPayDev/hidash/blob/38d474d6b98da136e49c852d1fd67cbca81ab3bd/src/toNumber.ts) | src/toNumber.bench.ts > toNumber performance | hidash is 8.74x faster | 104.05 🏆 | 11.90 |

> Note: Higher operations per second (ops/sec) numbers are better. Each test compares hidash vs lodash implementation.
> ⚠️ indicates where hidash is slower than lodash.
> 🏆 indicates the faster implementation.

_Last updated: 2024-11-20_
