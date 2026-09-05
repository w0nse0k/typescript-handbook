/**
 * <h3>Readonly Properties</h3>
 * 객체의 속성을 읽기 전용으로 정의할 수 있다. 읽기 전용 속성은 객체를 생성한 후에 값을 변경할 수 없다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties
 */
interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  console.log(`prop has the value '${obj.prop}'.`);

  // We can't re-assign readonly property.
  // obj.prop = "hello";
}

const myObj: SomeType = { prop: "initial value" };
doSomething(myObj);

interface Home {
  readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
  // resident property는 readonly이므로 reassign할 수 없다.
  // home.resident = { name: "Evictor", age: 42 }; // Error:
  // resident 객체의 속성은 변경할 수 있다.
  home.resident.age++;
  console.log(home.resident.name + " is now " + home.resident.age);
}

visitForBirthday({ resident: { name: "Victor", age: 41 } });
