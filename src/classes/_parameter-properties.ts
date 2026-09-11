/**
 * <h3>Parameter Properties</h3>
 * node 실행할 때 다음옵션을 붙여야 동작한다.
 * --experimental-transform-types
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
