/**
 * <h3>any</h3>
 * any는 모든 타입의 상위타입이고 타입 체크를 하지 않는다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any
 */
let obj: any = { x: 0 };
// 아래 이어지는 코드들은 모두 오류 없이 정상적으로 실행됩니다.
// `any`를 사용하면 추가적인 타입 검사가 비활성화되며,
// 당신이 TypeScript보다 상황을 더 잘 이해하고 있다고 가정합니다.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
