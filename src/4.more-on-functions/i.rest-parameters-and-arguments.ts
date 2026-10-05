/**
 * <h3>Rest Parameters and Arguments</h3>
 * rest paramters를 사용해서 인자 개수에 제한이 없는 함수를 정의할 수 있다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#rest-parameters-and-arguments
 */
// rest parameters. 인자가 없을 경우 빈 배열([])로 처리한다.
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
const a = multiply(10, 1, 2, 3, 4);
console.log(a);

// rest arguments (spread syntax)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push(...arr2); // arr1.push(4, 5, 6);
console.log(arr1);
