/**
 * Point와 Point3D 클래스를 만듭니다.
 * - Point 클래스에는 instance properties x와 y가 있습니다.
 * - 두 점을 초기화하는 constructor가 있습니다. 기본값은 모두 0 입니다.
 * - instance를 문자열로 표현하는 toString() 메서드가 있습니다.
 *
 * Point3D 클래스는 Point를 확장하는 클래스입니다.
 * - Point3D 클래스에는 z property 가 추가로 더 있습니다.
 * - 세 점을 초기화하는 constructor가 있습니다. 기본값은 모두 0 입니다.
 * - toString() 메서드를 override 합니다.
 *
 * Point3D 클래스 instance를 만들고 출력하는 example 코드를 만드세요.
 */
class Point {
  x: number;
  y: number;
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `x:${this.x}, y:${this.y}`;
  }
}

class Point3D extends Point {
  z: number;
  constructor(x = 0, y = 0, z = 0) {
    super(x, y);
    this.z = z;
  }
  toString() {
    return `x:${this.x}, y:${this.y}, z:${this.z}`;
  }
}

const p = new Point(10, 10);
console.log(p.toString());

const p3 = new Point3D(3, 4, 5);
console.log(p3.toString());
