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

<https://github.com/NaverPayDev/hidash/actions/runs/11722817696/job/32653182268>

```bash
✓ src/sumBy.bench.ts > sumBy performance 1270ms
    name         hz      min      max     mean      p75      p99     p995     p999     rme  samples
  · hidash   302.92   3.1237   6.2324   3.3012   3.3401   4.9049   6.2324   6.2324  ±1.40%      152   fastest
  · lodash  84.6955  11.4229  19.5812  11.8070  11.5609  19.5812  19.5812  19.5812  ±3.42%       43
✓ src/keys.bench.ts > keys performance 4305ms
    name         hz      min      max     mean      p75      p99     p995     p999     rme  samples
  · hidash  15.6756  63.2317  64.5926  63.7935  63.9407  64.5926  64.5926  64.5926  ±0.40%       10   fastest
  · lodash   5.3226   185.72   197.35   187.88   187.64   197.35   197.35   197.35  ±1.33%       10
✓ src/has.bench.ts > has performance 1246ms
    name        hz     min     max    mean     p75     p99    p995    p999     rme  samples
  · hidash  500.06  1.9612  2.5553  1.9997  1.9987  2.2186  2.2419  2.5553  ±0.31%      251   fastest
  · lodash  198.12  4.9729  5.5811  5.0474  5.0686  5.4542  5.5811  5.5811  ±0.34%      100
✓ src/sum.bench.ts > sum performance 1280ms
    name         hz      min      max     mean      p75      p99     p995     p999     rme  samples
  · hidash   152.93   6.3510  11.9313   6.5388   6.4970  11.9313  11.9313  11.9313  ±2.25%       77   fastest
  · lodash  60.1007  16.4401  19.4118  16.6387  16.5817  19.4118  19.4118  19.4118  ±1.16%       31
✓ src/clamp.bench.ts > clamp performance 1286ms
    name               hz      min      max     mean      p75      p99     p995     p999     rme  samples
  · hidash clamp   113.61   8.7456   8.9181   8.8024   8.8269   8.9181   8.9181   8.9181  ±0.12%       57   fastest
  · lodash clamp  49.0610  19.4046  24.2990  20.3828  20.1330  24.2990  24.2990  24.2990  ±3.16%       25
✓ src/size.bench.ts > size performance 1290ms
    name         hz      min      max     mean      p75      p99     p995     p999     rme  samples
  · hidash  71.2244  13.7929  14.3049  14.0401  14.1059  14.3049  14.3049  14.3049  ±0.26%       36
  · lodash  71.4762  13.6747  15.3879  13.9907  14.0141  15.3879  15.3879  15.3879  ±0.71%       36   fastest
✓ src/isEmpty.bench.ts > isEmpty performance 1555ms
    name         hz      min      max     mean      p75      p99     p995     p999     rme  samples
  · hidash   211.80   4.5947   4.9616   4.7215   4.7627   4.9552   4.9616   4.9616  ±0.31%      106   fastest
  · lodash  20.0165  49.2660  51.2919  49.9587  50.3341  51.2919  51.2919  51.2919  ±0.78%       11


BENCH  Summary

 hidash clamp - src/clamp.bench.ts > clamp performance
   2.32x faster than lodash clamp

 hidash - src/has.bench.ts > has performance
   2.52x faster than lodash

 hidash - src/isEmpty.bench.ts > isEmpty performance
   10.58x faster than lodash

 hidash - src/keys.bench.ts > keys performance
   2.95x faster than lodash

 lodash - src/size.bench.ts > size performance
   1.00x faster than hidash

 hidash - src/sum.bench.ts > sum performance
   2.54x faster than lodash

 hidash - src/sumBy.bench.ts > sumBy performance
   3.58x faster than lodash
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
