/**
 * <h3>The in Operator Narrowing</h3>
 * in 연산자는 객체에 특정 속성이 존재하는지 확인하는 데 사용되며, 이를 통해 타입을 좁힐 수 있다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing
 */
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

const fish: Fish = { swim: () => console.log("Fish is swimming") };
const bird: Bird = { fly: () => console.log("Bird is flying") };

move(fish); // Output: 'Fish is swimming'
move(bird); // Output: 'Bird is flying'
