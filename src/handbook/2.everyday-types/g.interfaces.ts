/**
 * <h3>Interfaces</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
 */
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
