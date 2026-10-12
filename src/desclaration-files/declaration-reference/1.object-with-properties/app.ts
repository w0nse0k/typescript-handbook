/**
 * <h3>Objects with Properties</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html#objects-with-properties
 */
import "./my-lib.js";

let result = myLib.makeGreeting("hello, world");
console.log("The computed greeting is:", result);
let count = myLib.numberOfGreetings;
console.log("count:", count);
