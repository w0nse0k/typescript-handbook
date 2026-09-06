/**
 * <h3>Truthiness Narrowing</h3>
 * Truthiness Narrowing은 조건문에서 값의 "truthy" 또는 "falsy" 여부를 기반으로 타입을 좁히는 과정이다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing
 */
// 다음 값들은 모두 false로 평가되고, 나머지는 true로 평가된다.
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));

// null의 타입은 'object'이다. (자바스크립트의 역사적인 이유로 null은 object로 취급된다.)
console.log(typeof null);

function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    // strs가 true이고, object 타입인 경우
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    // strs가 string 타입인 경우
    console.log(strs);
  }
}
printAll(["hello", "world"]); // Output: 'hello' 'world'
printAll("hello"); // Output: 'hello'
printAll(null); // 아무것도 출력되지 않음
