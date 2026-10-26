/**
 * 다음과 같은 properties와 method를 갖는 interface와 이 interface 타입으로 오브젝트를 만드세요.
 * - properties: brand, model
 * - method: carName (brand와 model을 합친 이름)
 */
interface Car {
  brand: string;
  model: string;
  carName: () => string;
}

const myCar: Car = {
  brand: "Genesis",
  model: "G80",
  carName: function () {
    return `${this.brand} : ${this.model}`;
  },
};

console.log(myCar.carName());
