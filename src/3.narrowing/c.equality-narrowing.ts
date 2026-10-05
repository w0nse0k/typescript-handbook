/**
 * <h3>Equality Narrowing</h3>
 * Equality Narrowing은 변수의 값이 특정 값과 같거나 다른지에 따라 타입을 좁히는 과정이다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/narrowing.html#equality-narrowing
 */
function example(x: string | number | null | undefined) {
  if (x !== null && x !== undefined) {
    // x가 null 또는 undefined가 아닌 경우, 타입이 string | number으로 좁혀짐
    console.log("x is a string or number");
  } else {
    console.log("x is null or undefined");
  }
}

example("Hello");
example(42);
example(null);
example(undefined);
