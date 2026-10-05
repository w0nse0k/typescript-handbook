// oxlint-disable no-unused-vars
/**
 * <h3>any</h3>
 * any는 모든 타입의 상위타입이고 타입 체크를 하지 않는다. any 타입은 사용하지 않는다. any 타입을 사용하면 타입스크립트의 장점을 잃는다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any
 */
let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
