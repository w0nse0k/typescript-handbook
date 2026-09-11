/**
 * <h3>this at Runtime in Classes</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#this-at-runtime-in-classes
 */
class MyClass {
  name = "MyClass";
  getCurrentName() {
    // 이 함수를 호출하는 오브젝트에 this가 binding 된다.
    return this.name;
  }

  getOriginalName = () => {
    // arrow 함수에서는 객체가 만들어질때 this가 binding 된다.
    return this.name;
  };

  // this parameters. this parameter는 컴파일할때 없어진다. 컴파일한 javascript에는 없다. 이 클래스의 인스턴스에서 호출하는 것인지 정적으로 체크한다.
  getCheckedName(this: MyClass) {
    return this.name;
  }
}
const c = new MyClass();

const obj = {
  name: "obj",
  fn1: c.getCurrentName,
  fn2: c.getOriginalName,
  fn3: c.getCheckedName,
};

console.log(obj.fn1()); // obj
console.log(obj.fn2()); // MyClass
// console.log(obj.fn3()); // obj가 MyClass의 instance가 아니므로 에러 표시
