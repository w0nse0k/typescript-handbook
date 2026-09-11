/**
 * <h3>Initialization Order</h3>
 * 초기화 순서는 다음과 같다.<br>
 * The base class fields 초기화<br>
The base class constructor 실행<br>
The derived class fields 초기화<br>
The derived class constructor 실행<br>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#initialization-order
 */
class Base {
  name = "base";
  constructor() {
    console.log("My name is " + this.name);
  }
}

class Derived extends Base {
  name = "derived";
}

const d = new Derived();
console.log(d.name);
