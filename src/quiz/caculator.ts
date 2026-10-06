/**
 * <h3>Calculate</h3>
 * @module
 */
type Calculator = (a: number, b: number) => number;
function calculate(a: number, b: number, fn: Calculator) {
  return fn(a, b);
}
const add: Calculator = (a, b) => a + b;
const multiply: Calculator = (a, b) => a * b;
console.log(calculate(3, 5, add));
console.log(calculate(3, 5, multiply));
console.log(calculate(3, 5, (a, b) => a - b));
console.log(calculate(3, 5, (a, b) => a / b));
