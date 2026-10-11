/**
 * <h3>Optional Parameters</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters
 */
function f(n: number) {
  console.log(n.toFixed()); // arguments가 없음
  console.log(n.toFixed(3)); // arguments가 1개
}
f(10);

// ?를 사용해서 optional parameter 정의
function square(x?: number) {
  if (x === undefined) x = 0;
  return x ** 2;
}
console.log("square(10):", square(10));
console.log("square():", square());

// default값 제공하기
function square2(x = 0) {
  return x ** 2;
}
console.log("square2(5):", square2(5));
console.log("square2():", square2());
