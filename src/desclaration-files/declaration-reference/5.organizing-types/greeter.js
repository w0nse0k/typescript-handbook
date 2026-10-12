/**
 * @description Greeter 객체는 파일에 로그를 기록하거나 알림을 표시할 수 있습니다. `.log(...)`에는 `LogOptions`를, `.alert(...)`에는 알림 옵션을 전달할 수 있습니다.
 */
export class Greeter {
  constructor(message) {
    this.message = message;
  }

  log(logOption) {
    console.log(logOption);
  }

  alert(alertOption) {
    console.log(alertOption);
  }
}
