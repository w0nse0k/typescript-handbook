/**
 * <h3>Generic Types</h3>
 * parameterized types: 제네릭 타입은 타입을 매개변수화
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/objects.html#generic-object-types
 */
interface AnyBox {
  contents: any;
}

interface UnknownBox {
  contents: unknown;
}

// any: 타입체크를 하지 않음
const anyBox: AnyBox = { contents: 123 };
console.log(anyBox.contents.toFixed(2));
// anyBox.contents.toUpperCase(); // 타입체크를 안하므로 컴파일은 되지만 런타임에서 에러 발생

// unknown: 타입을 모름
const unknownBox: UnknownBox = { contents: "abc" };
// unknownBox.contents.toUpperCase(); // Error: 타입을 모르므로 함수를 바로 사용할 수 없다.
if (typeof unknownBox.contents === "string") {
  // narrowing
  unknownBox.contents.toUpperCase(); // 타입이 string으로 좁혀졌으므로 함수를 사용할 수 있다.
}

interface StringBox {
  contents: string;
}

interface NumberBox {
  contents: number;
}

const numberBox: NumberBox = { contents: 123 };
console.log(numberBox.contents.toFixed(2));

const stringBox: StringBox = { contents: "abc" };
console.log(stringBox.contents.toUpperCase());

// T: type parameter
interface GenericBox<T> {
  contents: T;
}

const numberBox2: GenericBox<number> = { contents: 123 };
console.log(numberBox.contents.toFixed(2));

const stringBox2: GenericBox<string> = { contents: "abc" };
console.log(stringBox.contents.toUpperCase());
