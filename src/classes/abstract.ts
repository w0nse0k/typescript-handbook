/**
 * <h3>abstract Classes and Members</h3>
 * abstract 필드나 메서드는 있는 클래스는 abstract 클래스이다. abstract 클래스는 반드시 하위 클래스에서 abstract 멤버들을 구현해야 인스턴스화 할 수 있다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members
 */
abstract class Base {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}

class Derived extends Base {
  getName() {
    return "world";
  }
}

// const b = new Base();
const d = new Derived();
d.printName();
