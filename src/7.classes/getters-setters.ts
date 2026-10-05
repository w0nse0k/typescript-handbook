/**
 * <h3>Getters / Setters</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters
 */
class C {
  private _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value >= 0 ? value : 0;
  }
}

const c1 = new C();
c1.length = -1;
console.log(c1.length);

c1.length = 1;
console.log(c1.length);
