/**
 * <h3>Parameter Destructuring</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#parameter-destructuring
 */
type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });
