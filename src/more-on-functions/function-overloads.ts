/**
 * <h3>Function Overloads</h3>
 * overload 대신 union type을 이용하는 것이 좋다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads
 */
function len(x: any[] | string) {
  return x.length;
}

len("abc");
len([1, 2, 3, 4, 5]);
// len(10); // error
