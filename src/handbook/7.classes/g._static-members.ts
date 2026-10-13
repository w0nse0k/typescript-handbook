/**
 * <h3>Static Members</h3>
 * static members는 클래스 인스턴스와 관련이 없고 생성자 함수 자체의 properties 이다.
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
