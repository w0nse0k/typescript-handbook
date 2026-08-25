/**
 * <h3>Generic Functions</h3>
 * 타입을 인자로 받는 함수를 generic function이라 한다. 타입 인자는 diamond(<>) 내에 들어간다. 타입 추정이 가능한 경우 (type inference) 타입 인자를 넣을 필요가 없다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions
 */

function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

console.log(s);
console.log(n);
console.log(u);

// type constraints. 타입 제약조건.
// length: number  property가 있는 타입만 가능
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);

console.log(longerArray);
console.log(longerString);

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
const arr = combine<string | number>([1, 2, 3], ["hello"]);
console.log(arr);
