/**
 * <h3>Literal Types</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
 */
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre"); // error
