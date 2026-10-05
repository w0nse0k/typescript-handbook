// oxlint-disable no-unused-vars
/**
 * <h3>Array Types</h3>
 * string[]은 Array<string>의 축약형이다.
 * number[]은 Array<number>과 축약형이다.
 * boolean[]은 Array<boolean>의 축약형이다.
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/objects.html#the-array-type
 */

const list: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];

const list3: string[] = ["a", "b", "c"];
const list4: Array<string> = ["a", "b", "c"];

const list5: boolean[] = [true, false, true];
const list6: Array<boolean> = [true, false, true];

// Array 타입의 push() 메서드
list.push(4); // OK
list3.push("d"); // OK
list5.push(false); // OK

// Array 타입의 length 속성
console.log(list.length); // Output: 4
console.log(list3.length); // Output: 4
console.log(list5.length); // Output: 4
