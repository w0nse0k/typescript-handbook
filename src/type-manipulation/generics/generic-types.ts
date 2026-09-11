/**
 * <h3>Generic Types</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types
 */
function identity<Type>(arg: Type): Type {
  return arg;
}
// 함수의 타입: <Type>(arg: Type) => Type
const myIdentity: <Type>(arg: Type) => Type = identity;

// call signature: object의 callable property로 표현
const myIdentify2: { <Type>(arg: Type): Type } = identity;

interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

const myIdentity3: GenericIdentityFn = identity;
