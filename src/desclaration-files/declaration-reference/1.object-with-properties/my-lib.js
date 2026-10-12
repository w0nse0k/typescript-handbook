/**
 * @description 전역 변수 `myLib`에는 인사말을 생성하는 함수 `makeGreeting`과 지금까지 생성된 인사말의 개수를 나타내는 속성 `numberOfGreetings`가 있습니다.
 */
globalThis.myLib = {
  numberOfGreetings: 0,

  makeGreeting(greeting) {
    this.numberOfGreetings++;
    return greeting.toUpperCase();
  },
};
