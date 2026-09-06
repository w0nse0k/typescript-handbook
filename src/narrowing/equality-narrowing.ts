/**
 * <h3>Equality Narrowing</h3>
 * Equality Narrowing은 변수의 값이 특정 값과 같거나 다른지에 따라 타입을 좁히는 과정이다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/narrowing.html#equality-narrowing
 */
console.log(1 == "1"); // Output: true
console.log(1 === "1"); // Output: false
console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false

function example(x: string | number | null | undefined) {
  if (x !== null) {
    // x가 null이 아닌 경우, 타입이 string | number | undefined으로 좁혀짐
  }

  if (x != null) {
    // x가 null 또는 undefined가 아닌 경우, 타입이 string | number으로 좁혀짐
  }
}
