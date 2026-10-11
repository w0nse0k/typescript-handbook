/**
 * <h3>Parameter Properties</h3>
 * tsx로 실행해야 동작한다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties
 */
class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number,
  ) {
    // No body necessary
  }
}
const a = new Params(1, 2, 3);
console.log(a);
