/**
 * <h3>array iteration: filter</h3>
 * @module
 */
function filter<T>(array: T[], fn: (elem: T) => boolean): T[] {
  const result = [];
  for (const elem of array) if (fn(elem)) result.push(elem);
  return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = filter(numbers, (elem) => elem % 2 === 0); // 짝수
console.log(even);
