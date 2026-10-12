/**
 * <h3>Classes</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html#classes
 */
import { Greeter } from "./greeter.js";
const myGreeter = new Greeter("hello, world");
myGreeter.greeting = "howdy";
myGreeter.showGreeting();

class SpecialGreeter extends Greeter {
  constructor() {
    super("Very special greetings");
  }
}
new SpecialGreeter();
