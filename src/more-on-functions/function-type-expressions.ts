/**
 * <h3>Function Type Expressions</h3>
 * 함수의 타입을 표현하는 법
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions
 */

function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
  fn("Hello, World");
}
