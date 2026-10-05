/**
 * <h3>Overview</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/objects.html
 */
// anonymous object parameter
function greet(person: { name: string; age: number }) {
  console.log("Hello " + person.name);
}

greet({ name: "John", age: 30 }); // OK

// interface
interface Person {
  name: string;
  age: number;
}

function greetWithInterface(person: Person) {
  console.log("Hello " + person.name);
}

greetWithInterface({ name: "Jane", age: 25 }); // OK

// type alias
type PersonType = {
  name: string;
  age: number;
};

function greetWithTypeAlias(person: PersonType) {
  console.log("Hello " + person.name);
}

greetWithTypeAlias({ name: "Alice", age: 28 }); // OK
