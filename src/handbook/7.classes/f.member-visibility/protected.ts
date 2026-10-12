/**
 * <h3>protected</h3>
 * protected 멤버는 해당 멤버가 선언된 클래스의 하위 클래스에서만 접근할 수 있습니다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#protected
 */
class Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}

class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    console.log("Howdy, " + this.getName());
  }
}
const g = new Greeter();
g.greet();
// g.getName(); // error

const sg = new SpecialGreeter();
sg.greet();
sg.howdy();

class Base {
  protected m = 10;
}
class Derived extends Base {
  // 하위 클래스에서 visibility를 넓힐 수 있다.
  m = 15;
}
const d = new Derived();
console.log(d.m); // OK
