/**
 * <h3>Other Types</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#other-types-to-know-about
 */
// void: 아무것도 리턴하지 않는다.
function noop(): void {}
noop();

// any와 unknown은 모두 최상위 타입이다.
// any는 type check를 안하므로 기본적으로 쓰지 않는다.
// 타입을 모를때 unknown을 사용한다. unknown은 type narrowing을 해야 properties에 접근 가능하다.

function f1(a: any) {
  console.log(a.toUpperCase());
}

function f2(a: unknown) {
  // type narrowing
  if (typeof a === "string") console.log(a.toUpperCase());
}

const str = 123;
f1(str);
f2(str);
