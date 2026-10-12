/**
 * <h3>Generic Types</h3>
 * type parameters를 generic이라고 한다.
 * generic type도 추정되면 생략할 수 있다. (inferred)
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types
 */
// Generic Functions
// 자기 자신을 리턴하는 Generic 함수 (타입 파라미터가 있는 함수)
function identity<Type>(arg: Type): Type {
  return arg;
}

const a1 = identity<string>("abc"); // string으로 추정되므로 생략 가능
const a2 = identity(123); // type inferred
const a3 = identity(["a", "b", 3]); // type inferred
console.log(a1, a2, a3);

// 함수의 타입: <Type>(arg: Type) => Type
const myIdentity: <Type>(arg: Type) => Type = identity;
myIdentity("abc");

// call signature: object의 callable property로 표현
const myIdentify2: { <Type>(arg: Type): Type } = identity;
myIdentify2(123);

// call signature를 interface로 정의
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

const myIdentity3: GenericIdentityFn = identity;
myIdentity3(["a", "b", 3]);

// type alias로 정의
type GenericIdentityFn2 = <Type>(arg: Type) => Type;

const myIdentity4: GenericIdentityFn2 = identity;
myIdentity4(true);
