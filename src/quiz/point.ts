/**
 * <h3>Point and Point3D</h3>
 * @module
 */
// 클래스는 constructor function의 다른 표기법이다.
class Point {
  // properties는 이 클래스의 instance에 들어간다.
  x: number;
  y: number;
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  // methods는 Point.prototype에 들어간다.
  printPosition() {
    console.log(this);
  }
}

class Point3D extends Point {
  z: number;
  constructor(x = 0, y = 0, z = 0) {
    super(x, y);
    this.z = z;
  }
}

const p = new Point(3, 4);
const p3 = new Point3D(10, 20, 30);
p.printPosition(); // printPosition의 this에 p가 바인딩된다.
p3.printPosition(); // printPosition의 this에 p3가 바인딩된다.

// 메서드는 prototype에 있다.
console.log(Object.getPrototypeOf(p) === Point.prototype);
console.log(p.printPosition === Point.prototype.printPosition);
