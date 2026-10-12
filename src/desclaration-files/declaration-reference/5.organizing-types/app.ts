/**
 * <h3>Organizing Types</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html#organizing-types
 */
import { Greeter } from "./greeter-lib.js";
const g = new Greeter("Hello");

g.log({ verbose: true });
g.alert({ modal: false, title: "Current Greeting" });
