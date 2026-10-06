/**
 * <h3>array iteration: forEach</h3>
 * @module
 */
function forEach<T>(array: T[], fn: (elem: T, index?: number) => void) {
  let i = 0;
  for (const elem of array) fn(elem, i++);
}

const cars = ["BMW", "Volvo", "Merdeces"];

let text = "";
forEach(cars, (elem, i) => (text += `${i}: ${elem}\n`));
console.log(text);

text = "<ul>";
forEach(cars, (elem) => (text += `<li>${elem}</li>`));
text += "</ul>";
console.log(text);
