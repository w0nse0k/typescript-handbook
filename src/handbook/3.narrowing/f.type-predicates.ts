/**
 * <h3>Using Type Predicates</h3>
 * 타입스크립트에서 타입 가드 함수를 정의할 때, 반환 타입으로 `x is T` 형태의 타입 술어를 사용하여 특정 타입으로 좁힐 수 있다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
 */
type Fish = { swim: () => void };
type Bird = { fly: () => void };

/* Type Guard Function
 * 이 함수가 true를 반환한다면, 입력으로 전달된 pet 변수는 Fish 타입이야.
 * 어떤 조건을 만족할때 특정 타입으로 좁히는 역할을 한다.
 * type predicate를 사용하여 타입 가드 함수를 정의할 수 있다. type predicate는 추론 가능하다.
 */
function isFish(pet: Fish | Bird): pet is Fish {
  return "swim" in pet; // pet이 Fish 타입인지 확인
}

const fish: Fish = { swim: () => console.log("Fish is swimming") };
const bird: Bird = { fly: () => console.log("Bird is flying") };

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    return pet.swim();
  }
  return pet.fly();
}

move(fish); // Output: 'Fish is swimming'
move(bird); // Output: 'Bird is flying'
