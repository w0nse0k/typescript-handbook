/**
 * <h3>public</h3>
 * 클래스 멤버의 기본 가시성은 public입니다. public 멤버는 어디서든 접근할 수 있습니다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#public
 */
class Greeter {
  public greet() {
    console.log("hi!");
  }
}
const g = new Greeter();
g.greet();
