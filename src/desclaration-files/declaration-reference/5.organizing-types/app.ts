/**
 * <h3>Organizing Types</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html#organizing-types
 */
import { Greeter, type GreetingLib } from "./greeter.js";
const g = new Greeter("Hello");

const logOptions: GreetingLib.LogOptions = { verbose: true };
g.log(logOptions);
g.alert({ modal: false, title: "Current Greeting" });
