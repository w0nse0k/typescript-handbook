/**
 * <h3>Optional Parameters</h3> *
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters
 */

function f(n: number) {
  console.log(n.toFixed());
  console.log(n.toFixed(3));
}

// f();
f(10); // OK
