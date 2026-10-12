/**
 * <h3>Constructor Signatures</h3>
 * new 를 사용해서 object 를 만들 때 사용하는 contructor 함수는 call signature 앞에 new를 붙인다. 이것을 constructor signature라고 한다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#construct-signatures
 */
// constructor function을 인자로 받아서 객체를 생성해서 리턴하는 함수
// constructor signature를 갖고 있는 클래스를 인자로 받을 수 있다.
function create<T>(ctor: new (s: string) => T): T {
  return new ctor("hello");
}

// SomeConstructor constructor signature를 갖고 있는 클래스를 정의한다.
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const person = create(Person);
console.log(person); // hello

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const animal = create(Animal);
console.log(animal); // hello
