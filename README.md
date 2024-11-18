# @naverpay/hidash

A modern, performance-focused alternative to Lodash.

## Features

-   🚀 **Dual Package Support (CJS, ESM)**: Built for modern JavaScript, optimized for tree-shaking
-   ⚡️ **High Performance**: Consistently faster than Lodash in benchmarks (verified with Vitest)
-   🔄 **Drop-in Replacement**: 100% compatible with Lodash's interface and behavior
-   🎯 **Type Safety**: Written in TypeScript with complete type definitions
-   📦 **Subpath Imports**: Granular imports for minimal bundle size
-   🧪 **Test Coverage**: Every function has test cases that match Lodash's behavior exactly
-   0️⃣ **Zero Dependencies**: No external runtime dependencies, keeping your bundle lean
-   ✅ **Proven Reliability**: Used in production at NAVER Pay

## Installation

```bash
npm install @naverpay/hidash
# or
yarn add @naverpay/hidash
# or
pnpm add @naverpay/hidash
```

## Usage

Import functions individually using subpath imports:

```typescript
import has from '@naverpay/hidash/has'
import isEmpty from '@naverpay/hidash/isEmpty'
import isObject from '@naverpay/hidash/isObject'

// Same interface as Lodash
has(object, 'user.name') // true
isEmpty([]) // true
isObject({}) // true
```

❌ Package does not support namespace imports:

```typescript
// This will not work
import {has, isEmpty} from '@naverpay/hidash'
```

## Why hidash?

-   **Modern**: Built specifically for subpath imports for optimal tree-shaking
-   **Performance**: Optimized implementations that outperform Lodash in most scenarios
-   **Compatibility**: Designed as a drop-in replacement with identical interfaces and behavior
-   **Tested**: Comprehensive test suite ensuring Lodash compatibility and performance benchmarks

## Benchmarks (2024.11.04)

<https://github.com/NaverPayDev/hidash/actions/runs/11855420278/job/33039613302>

```bash
 RUN  v2.1.4 /home/runner/work/hidash/hidash
 ✓ src/sumBy.bench.ts > sumBy performance 1267ms
     name         hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · hidash   304.80   3.1214   4.4432   3.2809   3.3526   3.5577   4.4432   4.4432  ±0.69%      153   fastest
   · lodash  86.5900  11.4434  12.4117  11.5487  11.5666  12.4117  12.4117  12.4117  ±0.41%       44
 ✓ src/groupBy.bench.ts > groupBy basic performance 1236ms
     name                hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · hidash groupBy  612.65  1.5787  2.6086  1.6323  1.6632  1.7710  1.7835  2.6086  ±0.48%      307   fastest
   · lodash groupBy  311.76  3.1278  3.7181  3.2076  3.2371  3.4148  3.7181  3.7181  ±0.33%      156
 ✓ src/groupBy.bench.ts > groupBy complex performance 1481ms
     name                 hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · hidash groupBy  37.5238  26.5137  27.0285  26.6497  26.6829  27.0285  27.0285  27.0285  ±0.21%       19   fastest
   · lodash groupBy  28.4671  34.8767  35.8927  35.1283  35.2423  35.8927  35.8927  35.8927  ±0.47%       15
 ✓ src/groupBy.bench.ts > groupBy large array performance (simple key) 1209ms
     name                  hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · hidash groupBy  3,391.48  0.2690  0.7011  0.2949  0.2937  0.4287  0.5341  0.5727  ±0.52%     1696   fastest
   · lodash groupBy  2,878.71  0.3191  0.5625  0.3474  0.3484  0.4545  0.4744  0.5401  ±0.35%     1440
 ✓ src/groupBy.bench.ts > groupBy large array performance (complex operations) 1209ms
     name                  hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · hidash groupBy  2,938.49  0.3031  1.6135  0.3403  0.3368  0.5341  0.5620  0.6222  ±0.82%     1470   fastest
   · lodash groupBy  2,376.62  0.4019  0.7727  0.4208  0.4169  0.6286  0.6578  0.7624  ±0.52%     1189
 ✓ src/keys.bench.ts > keys performance 4339ms
     name         hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · hidash  15.5929  62.8146  70.0485  64.1319  64.3186  70.0485  70.0485  70.0485  ±2.40%       10   fastest
   · lodash   5.2733   186.37   192.80   189.63   191.65   192.80   192.80   192.80  ±0.82%       10
 ✓ src/has.bench.ts > has performance 1245ms
     name        hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · hidash  500.10  1.9561  2.3719  1.9996  1.9986  2.1787  2.1793  2.3719  ±0.30%      251   fastest
   · lodash  209.38  4.7039  5.4860  4.7761  4.7751  5.0803  5.4860  5.4860  ±0.39%      105
 ✓ src/sum.bench.ts > sum performance 1281ms
     name         hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · hidash   155.03   6.3301   7.2167   6.4504   6.5047   7.2167   7.2167   7.2167  ±0.62%       78   fastest
   · lodash  58.5221  16.6437  18.2681  17.0876  17.1916  18.2681  18.2681  18.2681  ±0.80%       30
 ✓ src/clamp.bench.ts > clamp performance 1298ms
     name               hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · hidash clamp   113.51   8.7395   9.0345   8.8100   8.8311   9.0345   9.0345   9.0345  ±0.17%       57   fastest
   · lodash clamp  51.8345  19.1934  19.4928  19.2922  19.3263  19.4928  19.4928  19.4928  ±0.14%       26
 ✓ src/size.bench.ts > size performance 1307ms
     name         hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · hidash  71.6480  13.7911  14.4221  13.9571  13.9957  14.4221  14.4221  14.4221  ±0.29%       36
   · lodash  72.0733  13.7034  14.4779  13.8748  13.9075  14.4779  14.4779  14.4779  ±0.30%       37   fastest
 ✓ src/isEmpty.bench.ts > isEmpty performance 1489ms
     name         hz      min      max     mean      p75      p99     p995     p999     rme  samples
   · hidash   208.23   4.6614   5.5675   4.8024   4.8284   4.9761   5.5675   5.5675  ±0.39%      105   fastest
   · lodash  19.8324  49.9678  50.8518  50.4226  50.6739  50.8518  50.8518  50.8518  ±0.41%       10
 BENCH  Summary
  hidash clamp - src/clamp.bench.ts > clamp performance
    2.19x faster than lodash clamp
  hidash groupBy - src/groupBy.bench.ts > groupBy basic performance
    1.97x faster than lodash groupBy
  hidash groupBy - src/groupBy.bench.ts > groupBy complex performance
    1.32x faster than lodash groupBy
  hidash groupBy - src/groupBy.bench.ts > groupBy large array performance (simple key)
    1.18x faster than lodash groupBy
  hidash groupBy - src/groupBy.bench.ts > groupBy large array performance (complex operations)
    1.24x faster than lodash groupBy
  hidash - src/has.bench.ts > has performance
    2.39x faster than lodash
  hidash - src/isEmpty.bench.ts > isEmpty performance
    10.50x faster than lodash
  hidash - src/keys.bench.ts > keys performance
    2.96x faster than lodash
  lodash - src/size.bench.ts > size performance
    1.01x faster than hidash
  hidash - src/sum.bench.ts > sum performance
    2.65x faster than lodash
  hidash - src/sumBy.bench.ts > sumBy performance
    3.52x faster than lodash
```

## Available Functions

### Type Checks

```typescript
@naverpay/hidash/isArray    // Check if value is an Array
@naverpay/hidash/isEmpty    // Check if value is empty
@naverpay/hidash/isNil      // Check if value is null or undefined
@naverpay/hidash/isObject   // Check if value is an Object
```

### Object Operations

```typescript
@naverpay/hidash/has        // Check if path exists in object
@naverpay/hidash/keys       // Get object keys
@naverpay/hidash/size       // Get collection size
```

## API Reference

### Type Checks

#### `@naverpay/hidash/isArray`

```typescript
function isArray(value: unknown): value is Array<unknown>
```

Returns `true` if value is an array, else `false`.

#### `@naverpay/hidash/isEmpty`

```typescript
function isEmpty(value: unknown): boolean
```

Returns `true` if value is empty, else `false`. Arrays, strings, or objects with no properties are considered empty.

#### `@naverpay/hidash/isNil`

```typescript
function isNil(value: unknown): value is null | undefined
```

Returns `true` if value is null or undefined, else `false`.

#### `@naverpay/hidash/isObject`

```typescript
function isObject(value: unknown): boolean
```

Returns `true` if value is an Object, else `false`.

### Object Operations

#### `@naverpay/hidash/has`

```typescript
function has(object: unknown, path: string | ReadonlyArray<string>): boolean
```

Checks if path is a direct property of object.

#### `@naverpay/hidash/keys`

```typescript
function keys(object: unknown): string[]
```

Returns an array of object's enumerable property names.

#### `@naverpay/hidash/size`

```typescript
function size(collection: unknown): number
```

Gets the size of collection by returning its length for array-like values or the number of enumerable properties for objects.

## Contributing

Contributions are welcome!

### Feature Requests

Want additional Lodash methods to be implemented? Please create an issue with:

-   The method name
-   Use case description
-   Current workaround (if any)

We prioritize implementing new methods based on community needs.

### Pull Requests

Feel free to submit PRs for:

-   Bug fixes
-   Performance improvements
-   New utility methods
-   Documentation improvements

Please read our contributing guidelines before submitting PRs.

## Benchmarks

Performance comparison with Lodash using Vitest:

```bash
pnpm run bench
```

## Test Coverage

All functions are tested for compatibility with Lodash behavior:

```bash
pnpm run test
```

## License

MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

Made with ❤️ by NAVER Pay frontend team.
