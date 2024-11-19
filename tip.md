# Tips for Creating Fast Functions

> Tips for optimizing performance over readability

JavaScript engines are constantly evolving. As a result, previous optimization methods may no longer be valid, and sometimes can show results contrary to common sense. This document introduces modern JavaScript/TypeScript optimization techniques verified through actual benchmarks.

## Always use Set for array deduplication

Using Set for array deduplication is dramatically faster. The performance gap with filter and indexOf methods becomes more extreme as the data size increases.

```typescript
const items = [1, 2, 2, 3, 3, 4, 5]

// Bad - filter and indexOf
const unique1 = items.filter((item, index, self) => self.indexOf(item) === index) // Very slow

// Good - Using Set
const unique2 = Array.from(new Set(items)) // Much faster
```

## Use inline functions when performance matters

Thanks to JavaScript engine optimizations, inline functions are faster than reused functions. The difference increases with data size.

1. **Inline Optimization**: Engine can directly optimize inline functions and eliminate function call overhead.
2. **Hidden Class Optimization**: Inline functions are created in the same form at the same location, allowing more precise engine optimization.
3. **Monomorphic Shape**: Since inline functions always process the same type of data at the same location (e.g., always numbers in map operation), the JavaScript engine can optimize the code more efficiently without handling multiple type possibilities.

```typescript
// Good - Use inline when performance matters
numbers.map((x) => x * 2) // Better engine optimization possible
numbers.filter((x) => x > 2)

// When reusability or maintainability matters
const double = (x: number) => x * 2 // For reuse across multiple places
const moreThanTwo = (x: number) => x > 2

numbers.map(double)
numbers.filter(moreThanTwo)
```

## Map is faster than Object

Map performs faster than Object when frequently adding/removing key-value pairs.

```typescript
// Bad - Using Object
const obj: Record<string, number> = {}
obj['key'] = 1
obj['key'] // access
delete obj['key']

// Good - Using Map
const map = new Map<string, number>()
map.set('key', 1)
map.get('key') // access
map.delete('key')
```

## Array and Set have similar performance for simple lookups

There's minimal performance difference between includes and has for simple lookups. No need to convert to Set if simple lookup is your main purpose.

```typescript
const arr = [1, 2, 3, 4, 5]
const set = new Set(arr)

// Both have similar performance
arr.includes(3)
set.has(3)
```

## Use `Object.prototype.toString.call(value)` for non-primitive type checks

Use `typeof` for primitives and `Object.prototype.toString.call` for complex types.

```typescript
// Primitive type check - use typeof
typeof value === 'string'
typeof value === 'number'

// Complex type check
Object.prototype.toString.call(value) === '[object Array]'
Object.prototype.toString.call(value) === '[object Date]'

// For Arrays, Array.isArray is also fast
Array.isArray(value)
```

## Cache frequently accessed values like array length

```typescript
const len = items.length
for (let i = 0; i < len; i++) {
    // Avoid accessing length property repeatedly
}
```

## Delegate type checking to TypeScript instead of lodash

Utilize TypeScript's type system instead of runtime type checks when possible.

```typescript
// Use TypeScript instead of runtime checks
function processArray(arr: number[]) {
    return arr.map((x) => x * 2)
}
```

These optimizations have been verified through actual benchmarks. However, it's always recommended to measure performance in your specific use case.
