# @naverpay/hidash

A modern, performance-focused alternative to Lodash.

## Features

-   🚀 **ES Module Only**: Built for modern JavaScript, optimized for tree-shaking
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

-   **Modern**: Built specifically for ES modules with subpath imports for optimal tree-shaking
-   **Performance**: Optimized implementations that outperform Lodash in most scenarios
-   **Compatibility**: Designed as a drop-in replacement with identical interfaces and behavior
-   **Tested**: Comprehensive test suite ensuring Lodash compatibility and performance benchmarks

## Benchmarks (2024.11.04)

```bash
✓ src/isEmpty.bench.ts (2) 1323ms
  ✓ isEmpty performance (2) 1322ms
    · hidash   324.23 ops/sec ±0.40% (0 samples) fastest
    · lodash  35.6400 ops/sec ±0.42% (0 samples)
✓ src/keys.bench.ts (2) 3031ms
  ✓ keys performance (2) 3030ms
    · hidash  27.6429 ops/sec ±0.38% (0 samples) fastest
    · lodash   7.5177 ops/sec ±0.47% (0 samples)
✓ src/size.bench.ts (2) 1265ms
  ✓ size performance (2) 1263ms
    · hidash  119.83 ops/sec ±1.05% (0 samples) fastest
    · lodash  114.94 ops/sec ±1.65% (0 samples)


BENCH  Summary

 hidash - src/isEmpty.bench.ts > isEmpty performance
   9.10x faster than lodash

 hidash - src/keys.bench.ts > keys performance
   3.68x faster than lodash

 hidash - src/size.bench.ts > size performance
   1.04x faster than lodash
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
