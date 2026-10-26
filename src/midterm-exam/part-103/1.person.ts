/**
 * 다음과 같은 properties와 method를 갖는 interface와 이 interface 타입으로 오브젝트를 만드세요.
 * - properties: firstName, lastName
 * - method: fullName (firstName과 lastName을 합친 이름)
 *
 * 이 오브젝트의 메서드를 호출해서 제대로 동작하는지 확인하는 코드를 만듭니다.
 */
interface Person {
  firstName: string;
  lastName: string;
  fullName: () => string;
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(john.fullName());
