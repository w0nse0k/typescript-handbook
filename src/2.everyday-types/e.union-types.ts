/**
 * <h3>Union Types</h3>
 * Union 타입은 여러 타입 중 하나를 가질 수 있는 타입이다. Union 타입은 | 기호로 구분한다. Union 타입을 사용하면 여러 타입을 허용할 수 있다.
 * Union 타입을 사용할 때는 타입 가드(Type Guard)를 사용하여 타입을 좁힐 수 있다. 타입 가드는 typeof, instanceof, in 연산자 등을 사용하여 타입을 좁힐 수 있다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
 */
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
printId(101); // OK
printId("202"); // OK
// printId({ myID: 22342 }); // error

function printId2(id: number | string) {
  // Narrowing using typeof
  if (typeof id === "string") {
    // 이 분기에서 id는 'string' 타입을 가집니다
    console.log(id.toUpperCase());
  } else {
    // 여기에서 id는 'number' 타입을 가집니다
    console.log(id);
  }
}
printId2(101);
printId2("abc");

function welcomePeople(x: string[] | string) {
  // Narrowing using Array.isArray
  if (Array.isArray(x)) {
    // 여기에서 'x'는 'string[]' 타입입니다
    console.log("Hello, " + x.join(" and "));
  } else {
    // 여기에서 'x'는 'string' 타입입니다
    console.log("Welcome lone traveler " + x);
  }
}
welcomePeople(["Alice", "Bob", "Eve"]);
welcomePeople("Alice");
