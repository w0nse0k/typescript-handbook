/**
 * <h3>Reusable Types (Type Aliases)</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html#reusable-types-type-aliases
 */
import { greet } from "./greet-lib.js";

class Greeter {}

function getGreeting() {
  return "howdy";
}

class MyGreeter extends Greeter {}
greet("hello");
greet(getGreeting);
greet(new MyGreeter());
