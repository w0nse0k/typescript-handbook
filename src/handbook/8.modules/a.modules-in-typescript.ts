/**
 * <h3>Modules in TypeScript</h3>
 * 모듈을 import할 때 확장자를 .js로 한다. 실행할 때 npx tsx 또는 node --import=tsx로 한다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/modules.html#modules-in-typescript
 */
// 다른 모듈에서 export default 한 것을 {} 없이 import 한다. 이름을 바꿀 수 있다.
import helloWorld from "./hello.js";
helloWorld();

// 다른 모듈에서 export 한 것을 {}를 사용해서 import 한다.
import { pi, phi, absolute } from "./maths.js";
console.log(pi);
const absPhi = absolute(phi);
console.log(absPhi);

// default와 아닌 것을 같이 import 할 수 있다. as를 사용해서 이름을 바꿀 수 있다.
import RandomNumberGenerator, { pi as π } from "./maths.js";
new RandomNumberGenerator();
console.log(π);

// * as 를 사용해서 단일 namespace에 넣을 수 있다.
import * as math from "./maths.js";
console.log(math.pi);
const positivePhi = math.absolute(math.phi);
console.log(positivePhi);
