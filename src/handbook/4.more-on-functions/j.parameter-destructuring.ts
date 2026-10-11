/**
 * <h3>Parameter Destructuring</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#parameter-destructuring
 */
type ABC = { a: number; b: number; c: number };

function sum1(obj: ABC) {
  console.log(obj.a + obj.b + obj.c);
}
sum1({ a: 10, b: 3, c: 9 });

// parameter destructuring
function sum2({ a, b, c }: ABC) {
  console.log(a + b + c);
}
sum2({ a: 10, b: 3, c: 9 });
