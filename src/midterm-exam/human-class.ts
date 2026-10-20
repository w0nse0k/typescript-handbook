/**
 * Animal 클래스와 Human 클래스를 만듭니다.
 * - Animal 클래스에는 species라는 instance property가 있습니다.
 * - species를 초기화하는 constructor가 있습니다.
 * - instance를 문자열로 표현하는 toString() 메서드가 있습니다.
 *
 * Human 클래스는 Animal 클래스를 상속합니다.
 * - Human 클래스에는 name이라는 instance property가 더 있습니다.
 * - species와 name을 초기화하는 constructor가 있습니다. species의 기본값은 "Human" 입니다.
 * - toString()을 override 합니다.
 *
 * Human 클래스 instance를 만들고 출력하는 example 코드를 만드세요.
 */
class Animal {
  species: string;
  constructor(species: string) {
    this.species = species;
  }
  toString() {
    return `species: ${this.species}`;
  }
}

class Human extends Animal {
  name: string;
  constructor(name: string, species = "Human") {
    super(species);
    this.name = name;
  }
  toString() {
    return `species: ${this.species}, name: ${this.name}`;
  }
}

const dog = new Animal("Dog");
console.log(dog.toString());

const jacob = new Human("Jacob");
console.log(jacob.toString());
