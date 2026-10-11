/**
 * <h3>Generic Classes</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#generic-classes
 */
class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}

const b = new Box("hello!");
console.log(b.contents);
