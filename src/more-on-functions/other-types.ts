/**
 * <h3>Other Types</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#other-types-to-know-about
 */
// any와 unknown은 모두 최상위 타입이다.
// any는 type check를 비활성화하므로 기본적으로 쓰지 않는다.
// 타입을 모를때 unknown을 사용한다. unknown은 type narrowing을 해야 properties에 접근 가능하다.
let a: any = "abc";
console.log(a.toUpperCase());

let u: unknown = "abc";
// u.toUpperCase(); // error
// type narrowing
if (typeof u === "string") u.toUpperCase();
