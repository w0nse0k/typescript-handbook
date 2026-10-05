/**
 * <h3>null and undefined</h3>
 * null과 undefined는 각각 값이 없음을 나타내는 타입이다. null은 의도적으로 값이 없음을 나타내고, undefined는 값이 할당되지 않았음을 나타낸다.
 * tsconfig.json에서 strictNullChecks: true로 설정하면
 * - 반드시 null과 undefined를 체크해야한다.
 * - null과 undefined를 허용하지 않는 타입에 null과 undefined를 할당할 수 없다.
 * - strictNullChecks를 항상 켜는 것을 권장한다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined
 */
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
doSomething(null);
doSomething("World");
