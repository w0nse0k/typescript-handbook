/**
 * <h3>Relationships Between Classes</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#relationships-between-classes
 */
class Person {
  name = "";
  age = 0;
}

class Employee {
  name = "";
  age = 0;
  salary = 0;
}

// 부모 타입에 자식 타입 할당 가능
const p: Person = new Employee();
p.name = "Jacob";
p.age = 20;

// 자식 타입에 부모 타입을 할당하려면 강제 형변환
const e: Employee = p as Employee;
console.log(e);
