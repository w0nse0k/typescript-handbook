/**
 * <h3>Overview</h3>
 * JavaScript에서 데이터를 그룹화하고 전달하는 기본적인 방법은 객체를 사용하는 것입니다. TypeScript에서는 이를 객체 타입으로 표현합니다.
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
