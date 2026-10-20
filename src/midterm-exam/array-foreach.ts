/**
 * forEach(arr, fn) 함수를 만듭니다.
 * forEach() 함수는 배열의 각 요소에 대해 콜백 함수를 호출합니다.
 */
function forEach<T>(arr: T[], callback: (e: T, i?: number) => void) {
  let i = 0;
  for (const e of arr) callback(e, i++);
}

forEach(["a", "b", "c", "d", "e"], (e, i) => console.log(i, e));
