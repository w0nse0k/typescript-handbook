/**
 * <h3>Object Types</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types
 */
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

// optional properties
function printName(obj: { first: string; last?: string }) {
  console.log(obj.first, obj.last);
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
