/**
 * <h3>Narrowing</h3>
 * Narrowing은 타입을 분석하는 특별한 검사(Type Guard)를 통해 변수의 타입을 더 구체적으로 좁히는 과정이다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/narrowing.html
 */
// typeof type guards
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    // type narrowing: padding is a number
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
console.log(padLeft(4, "Hello")); //    Hello
console.log(padLeft(">>", "Hello")); // >>Hello
