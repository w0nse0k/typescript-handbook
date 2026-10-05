/**
 * <h3>private</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#private
 */
class Base {
  private x = 0;
}

class Derived extends Base {
  showX() {
    // console.log(this.x); // 에러
  }
}
new Derived().showX();
