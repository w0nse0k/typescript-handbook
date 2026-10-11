/**
 * <h3>Generic Constraints</h3>
 * generic type에 제약조건을 걸 수 있다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
 */
interface Lengthwise {
  length: number;
}

// Type에 length property가 있어야 한다.
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

loggingIdentity({ length: 10, value: 3 });
loggingIdentity("abcde"); // "abcde".length
loggingIdentity([1, 2, 3]); // [1, 2, 3].length
// loggingIdentity(10); // error 10.length가 없다.
