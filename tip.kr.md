# 빠른 함수를 만드는 팁

> 가독성 대신 성능에 올인 하기 위한 방법

## 배열의 중복 제거는 반드시 Set을 사용하세요.

배열의 중복을 제거할 때는 Set을 사용하는 것이 압도적으로 빠릅니다. filter와 indexOf를 사용한 방식보다 데이터가 커질수록 차이가 극단적으로 벌어집니다.

```typescript
const items = [1, 2, 2, 3, 3, 4, 5]

// 나쁨 - filter와 indexOf
const unique1 = items.filter((item, index, self) => self.indexOf(item) === index) // 매우 느림

// 좋음 - Set 사용
const unique2 = Array.from(new Set(items)) // 훨씬 빠름
```

## 성능이 중요한 경우 inline 함수를 사용하세요.

JavaScript 엔진의 최적화 덕분에 inline 함수가 재사용 함수보다 더 빠릅니다. 데이터 크기가 커질수록 그 차이가 더 벌어집니다.

1. **인라인 최적화**: 엔진이 inline 함수를 직접 풀어서 최적화할 수 있고, 함수 호출 오버헤드를 제거할 수 있습니다.
2. **Hidden Class 최적화**: inline 함수는 같은 위치에서 항상 같은 형태로 생성되어 엔진이 더 정확한 최적화를 할 수 있습니다.
3. **단일 형태 유지**: inline 함수는 항상 같은 위치에서 같은 타입의 데이터만 처리하므로, JavaScript 엔진이 해당 함수를 더 효율적으로 최적화할 수 있습니다.

```typescript
// 좋음 - 성능이 중요한 경우 inline 사용
numbers.map((x) => x * 2) // 엔진이 더 잘 최적화 가능
numbers.filter((x) => x > 2)

// 재사용성이나 유지보수가 중요한 경우
const double = (x: number) => x * 2 // 여러 곳에서 사용되는 경우
const moreThanTwo = (x: number) => x > 2

numbers.map(double)
numbers.filter(moreThanTwo)
```

## Map이 Object보다 빠릅니다.

키-값 쌍을 자주 추가/제거하는 경우 Map이 Object보다 더 빠르게 동작합니다.

```typescript
// 나쁨 - Object 사용
const obj: Record<string, number> = {}
obj['key'] = 1
obj['key'] // 접근
delete obj['key']

// 좋음 - Map 사용
const map = new Map<string, number>()
map.set('key', 1)
map.get('key') // 접근
map.delete('key')
```

## 단순 검색은 Array나 Set이나 비슷합니다.

includes나 has를 사용한 단순 검색은 Array나 Set이나 성능 차이가 미미합니다. 단순 검색이 주 목적이라면 굳이 Set으로 변환할 필요가 없습니다.

```typescript
const arr = [1, 2, 3, 4, 5]
const set = new Set(arr)

// 둘 다 비슷한 성능
arr.includes(3)
set.has(3)
```

## 원시값 외의 타입을 확인하기 위해서는 `Object.prototype.toString.call(value)`를 사용하세요.

원시값은 `typeof`로, 복잡한 타입은 `Object.prototype.toString.call`을 사용하세요.

```typescript
// 원시값 체크 - typeof 사용
typeof value === 'string'
typeof value === 'number'

// 복잡한 타입 체크
Object.prototype.toString.call(value) === '[object Array]'
Object.prototype.toString.call(value) === '[object Date]'

// Array의 경우는 Array.isArray도 빠름
Array.isArray(value)
```

## 배열 길이와 같이 자주 접근하는 값은 캐싱하세요.

```typescript
const len = items.length
for (let i = 0; i < len; i++) {
    // length를 매번 접근하지 않음
}
```

## lodash 내부의 타입 체크를 타입스크립트에 양보하세요.

런타임 타입 체크 대신 가능한 한 타입스크립트의 타입 시스템을 활용하세요.

```typescript
// 런타임 체크 대신 타입스크립트 활용
function processArray(arr: number[]) {
    return arr.map((x) => x * 2)
}
```
