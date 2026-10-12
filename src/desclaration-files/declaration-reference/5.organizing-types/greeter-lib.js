/**
 * @typedef {{ verbose: boolean; } } GreetingLib.LogOptions
 * @typedef {{ modal: boolean; title: string }} GreetingLib.AlertOptions
 */

/**
 * Greeter 객체는 파일에 로그를 기록하거나 알림을 표시할 수 있습니다. `.log(...)`에는 `LogOptions`를, `.alert(...)`에는 알림 옵션을 전달할 수 있습니다.
 */
export class Greeter {
  /**
   * @param { string } message
   */
  constructor(message) {
    this.message = message;
  }

  /**
   * @param { GreetingLib.LogOptions } logOption
   */
  log(logOption) {
    console.log(logOption);
  }

  /**
   * @param { GreetingLib.AlertOptions } alertOption
   */
  alert(alertOption) {
    console.log(alertOption);
  }
}
