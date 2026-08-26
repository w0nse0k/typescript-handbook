/**
 * <h3>Static type-checking</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/basic-types.html#static-type-checking
 */
function sayHello(str: string) {
  console.log(str);
}

const message: string = "Hello, World!";
sayHello(message);
