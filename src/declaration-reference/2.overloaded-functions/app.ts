/**
 * <h3>Overloaded Functions</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html#overloaded-functions
 */
import { getWidget, type Widget } from "./widget-lib.js";

let x: Widget = getWidget("Jacob");
let arr: Widget[] = getWidget(3);

console.log(x);
console.log(arr);
