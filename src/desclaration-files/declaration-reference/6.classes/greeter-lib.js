export class Greeter {
  /**
   * 인사말로 초기화하는 컨스트럭터
   * @param {string} greeting
   */
  constructor(greeting) {
    this.greeting = greeting;
  }

  showGreeting() {
    console.log(this.greeting);
  }
}
