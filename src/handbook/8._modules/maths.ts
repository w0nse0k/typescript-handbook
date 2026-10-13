// export: 1개의 모듈에서 여러개를 export할 수 있다.
export const pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;

// export default: 1개의 모듈에서 1개만 export default를 할 수 있다.
export default class RandomNumberGenerator {}

export function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}
