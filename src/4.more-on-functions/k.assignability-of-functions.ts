/**
 * <h3>Assignability of Functions</h3>
 * return type이 void인 함수(아무것도 리턴하지 않는 함수) 타입에 무엇인가를 리턴하는 함수를 할당할 수 있다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#assignability-of-functions
 */
// return type이 void인 function type
type voidFunc = () => void;

const f1: voidFunc = () => {
  return true;
};

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
  return true;
};

const v1 = f1();
const v2 = f2();
const v3 = f3();

console.log(v1, v2, v3);

// voidFunc 타입 함수를 인자로 받는 first-class function
function f4(f: voidFunc) {
  console.log(f());
}

// string을 리턴하는 함수
function sayHello() {
  return "Hello World";
}

f4(sayHello);
