/**
 * <h3>Reusable Types (Interfaces)</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html#reusable-types-interfaces
 */
import { greet, type GreetingSettings } from "./greet-lib.js";

const config: GreetingSettings = {
  greeting: "hello world",
  duration: 4000,
};

greet(config);
