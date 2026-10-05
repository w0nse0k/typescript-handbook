/**
 * <h3>extends Clauses</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#extends-clauses
 */
class Animal {
  move() {
    console.log("Moving along!");
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}

const d = new Dog();
d.move(); // Base class method
d.woof(3); // Derived class method

class Base {
  greet() {
    console.log("Hello, world!");
  }
}

class Derived extends Base {
  // Overriding Methods
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const d2 = new Derived();
d2.greet();
d2.greet("reader");
