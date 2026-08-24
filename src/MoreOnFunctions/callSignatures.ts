/**
 * @file Call Signatures. 자바스크립트 함수는 properties를 가질 수 있다. properties는 function type expression으로는 표현할 수 없고, object 의 callable properties 로 표현한다. 이것을 call signature라고 한다.
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures
 */
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "default description";

doSomething(myFunc);
