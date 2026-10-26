/**
 * filter(arr, test) 함수를 만듭니다.
 * filter() 메서드는 테스트를 통과한 배열 요소들로 구성된 새로운 배열을 생성합니다.
 */
function filter<T>(array: T[], test: (e: T) => boolean) {
  const result: T[] = [];
  for (const e of array) if (test(e)) result.push(e);
  return result;
}

const filtered = filter([1, 2, 3, 4, 5], (e) => e > 3);
console.log(filtered);
