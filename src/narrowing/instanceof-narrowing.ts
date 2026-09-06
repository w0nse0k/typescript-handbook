/**
 * <h3>Instanceof Narrowing</h3>
 * instanceof 연산자는 객체가 특정 클래스의 인스턴스인지 확인하는 데 사용되며, 이를 통해 타입을 좁힐 수 있다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing
 */
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

logValue(new Date()); // Output: 현재 날짜와 시간의 UTC 문자열
logValue("hello"); // Output: 'HELLO'
