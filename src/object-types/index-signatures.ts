/**
 * <h3>Index Signatures</h3>
 * 객체의 속성 이름과 타입을 동적으로 정의할 수 있다. 예를 들어, 문자열 인덱스를 사용하여 객체의 속성을 정의할 수 있다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures
 */
// string index signature: 문자열 인덱스를 사용하여 객체의 속성을 정의
// NumberDictionary 타입의 속성의 이름은 문자열이고, 속성의 값은 number 타입이다.
interface NumberDictionary {
  [index: string]: number;
  length: number;
  // name: string; // Error: 'name' is not assignable to type 'number'
}

// 동적으로 속성을 추가할 수 있다. key1과 key2 속성 추가
const myNumberDictionary: NumberDictionary = {
  length: 10,
  key1: 42,
  key2: 100,
};

console.log(myNumberDictionary); // Output: { length: 10, key1: 42, key2: 100 }

// string index signature with multiple types: 문자열 인덱스를 사용하여 객체의 속성을 정의할 때, 속성의 값이 여러 타입일 수 있다.
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}

const myNumberOrStringDictionary: NumberOrStringDictionary = {
  length: 10,
  name: "My Dictionary",
  key1: 42,
  key2: "Hello",
};

console.log(myNumberOrStringDictionary); // Output: { length: 10, name: 'My Dictionary', key1: 42, key2: 'Hello' }
