// oxlint-disable no-unused-vars
/**
 * <h3>Functions</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions
 */
// 함수의 parameter 타입은 표기한다.
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// 함수 반환 타입 표기는 필요없다. 리턴 값으로 타입을 추론한다.
function getFavoriteNumber(): number {
  return 26;
}

const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function - s의 타입은 string으로 추론된다.
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

names.forEach((s) => console.log(s.toUpperCase()));
