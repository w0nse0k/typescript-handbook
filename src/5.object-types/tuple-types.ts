/**
 * <h3>Tuple Types</h3>
 * 튜플은 고정된 수의 요소를 가지며 각 요소의 타입이 지정된 배열이다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
 */
type StringNumberPair = [string, number];
const pair: StringNumberPair = ["hello", 42]; // OK
console.log(pair); // Output: ['hello', 42]

const [first, second] = pair; // destructuring
console.log(first, second); // Output: 'hello' 42
