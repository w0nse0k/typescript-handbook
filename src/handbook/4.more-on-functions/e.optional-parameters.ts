/**
 * <h3>Optional Parameters</h3>
 * optional parameter(?) 이나 default value를 사용해서 인자를 갯수를 다르게 받을 수 있다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters
 */
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
