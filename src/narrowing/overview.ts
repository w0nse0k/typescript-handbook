/**
 * <h3>Narrowing</h3>
 * Narrowing은 타입스크립트에서 변수의 타입을 더 구체적으로 좁히는 과정이다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 */
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    // type narrowing: padding이 number 타입으로 좁혀짐
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
console.log(padLeft(4, "Hello")); // Output: '    Hello'
console.log(padLeft(">>", "Hello")); // Output: '>>Hello'
