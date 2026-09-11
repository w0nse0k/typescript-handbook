/**
 * <h3>Generic Classes</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-classes
 */
class GenericNumber<NumType> {
  constructor(initValue: NumType, fn: (x: NumType, y: NumType) => NumType) {
    this.zeroValue = initValue;
    this.add = fn;
  }
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

const myGenericNumber = new GenericNumber<number>(0, function (x, y) {
  return x + y;
});

console.log(myGenericNumber.add(10, 20));

const stringGeneric = new GenericNumber<string>("", function (x, y) {
  return x + y;
});

console.log(stringGeneric.add("", "text"));
