/**
 * <h3>Class Members</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#class-members
 */
class Point1 {
  x = 0;
  y = 0;
}
const p = new Point1();
p.x = 3;
p.y = 4;
console.log(p);

// class with constructor
class Point2 {
  x: number;
  y: number;
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

const p1 = new Point2();
const p2 = new Point2(1);
const p3 = new Point2(3, 4);
console.log(p1, p2, p3);

class Base {
  protected k = 4;
}

class Derived extends Base {
  constructor() {
    super(); // constructor 상단에 항상 상위 클래스의 constructor 호출
    console.log(this.k);
  }
}

// class with methods
class Point3 {
  x = 10;
  y = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}
const p4 = new Point3();
p4.scale(2);
console.log(p4);
