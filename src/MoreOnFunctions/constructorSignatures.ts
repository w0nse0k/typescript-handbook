/**
 * @file Constructor Signatures. new 를 사용해서 object 를 만들 때 사용하는 contructor 함수는 call signature 앞에 new를 붙인다. 이것을 constructor signature라고 한다.
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#construct-signatures
 */

// constructor function의 타입
type SomeConstructor = {
  new (s: string): SomeObject;
};

// constructor function을 인자로 받는 first-class function
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

// constructor function이 리턴하는 type
interface SomeObject {
  name: string;
}

// constructor function
const SomeObject = function (this: SomeObject, name: string) {
  this.name = name;
} as unknown as SomeConstructor;

const obj1 = new SomeObject("Jacob");
const obj2 = fn(SomeObject);

console.log(obj1.name);
console.log(obj2.name);
