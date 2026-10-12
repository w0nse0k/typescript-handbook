/**
 * <h3>Generic Classes</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-classes
 */
// 값 1개를 갖고 있는 클래스
class Box<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

const numberBox = new Box<number>(10);
console.log(numberBox.value.toFixed(3));

const stringBox = new Box<string>("abc");
console.log(stringBox.value.toUpperCase());
