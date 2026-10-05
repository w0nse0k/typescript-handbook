/**
 * <h3>Static Members</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#static-members
 */
class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();
