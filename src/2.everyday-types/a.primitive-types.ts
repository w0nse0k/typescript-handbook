// oxlint-disable no-unused-vars
/**
 * <h3>The primitives: string, number, and boolean</h3>
 * 타입 표기를 Type Annotation이라고 한다. 타입스크립트는 타입 추론(Type Inference)을 지원한다. 타입스크립트는 초기화하는 값으로 변수의 타입을 추론한다. 함수의 반환값으로 함수의 반환 타입을 추론한다.
 * 배열은 [] 사용: string[], number[], boolean[]
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#the-primitives-string-number-and-boolean
 */

// 변수의 타입 표기는 필요 없다. 초기화하는 값으로 타입을 추론한다.
const hello = "Hello, World!";

const age = 42;

const isDone = false;

const numbers = [1, 2, 3];
