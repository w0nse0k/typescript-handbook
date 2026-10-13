/**
 * <h3>Parameter Properties</h3>
 * 이것은 그냥 node로만 실행할 수 없다. node는 typescript 소스에서 type annotation만 제거하고 실행한다. 이것은 소스를 변환하는 작업이므로 npx tsx나 node --import=tsx 로 실행해야 한다.
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
