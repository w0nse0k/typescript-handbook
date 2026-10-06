/**
 * <h3>array iteration: map</h3>
 * @module
 */
function map<T, R>(array: T[], fn: (elem: T) => R): R[] {
  const result = [];
  for (const elem of array) result.push(fn(elem));
  return result;
}

const numbers = [1, 2, 3];
const numbers2 = map(numbers, (elem) => elem * 2);
console.log(numbers2);

const cars = ["BMW", "Volvo", "Merdeces"];
const carsHtml = map(cars, (elem) => `<li>${elem}</li>`).join("");
console.log(carsHtml);
