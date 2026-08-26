/**
 * <h3>The primitives: string, number, and boolean</h3>
 * 배열은 [] 사용: string[], number[], boolean[]
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean
 */

// 변수의 타입 표기는 필요 없다. 초기화하는 값으로 타입을 추론한다.
let myName = "Alice";

// 함수의 parameter 타입은 표기한다.
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// 함수 반환 타입 표기는 필요없다. 리턴 값으로 타입을 추론한다.
function getFavoriteNumber() {
  return 26;
}
