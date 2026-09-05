/**
 * <h3>Interface Extension vs Intersection Types</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/objects.html#interface-extension-vs-intersection
 */
// interface extension: 인터페이스 확장
// 속성 이름이 같을때 타입이 같으면 합치고 다르면 에러
interface Person1 {
  name: string;
}

interface Person2 {
  name: number;
}

// interface Person3 extends Person1, Person2 {} // Error:

// Intersection type: & 연산자를 사용하여 두 개 이상의 타입을 결합
type Staff = Person1 & Person2;
