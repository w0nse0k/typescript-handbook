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
