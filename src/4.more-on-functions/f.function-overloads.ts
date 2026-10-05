/**
 * <h3>Function Overloads</h3>
 * union type을 이용해서 overload 하는 것이 좋다.
 * optional parameter나 default value를 이용해서 overloads 할 수 있다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads
 */
// union 타입을 사용해서 여러 타입을 인자로 받을 수 있다.
function len(x: any[] | string) {
  return x.length;
}

len("abc");
len([1, 2, 3, 4, 5]);
// len(10); // error

// default value 또는 optional parameter 사용해서 인자의 갯수를 다르게 받을 수 있다.
// ??: Nullish coalescing. undefined 또는 null 일 경우 오른쪽 값으로 사용
const createPoint = (x: number = 0, y?: number) => [x, y ?? 0];
const p1 = createPoint();
const p2 = createPoint(1);
const p3 = createPoint(2, 2);
console.log(p1);
console.log(p2);
console.log(p3);
