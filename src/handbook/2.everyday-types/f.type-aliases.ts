/**
 * <h3>Type Aliases</h3>
 * Type Alias는 타입에 이름을 붙이는 것이다. Type Alias는 interface와 비슷하지만, interface는 객체의 타입을 정의하는데 사용되고, Type Alias는 모든 타입에 이름을 붙일 수 있다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
 */
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
