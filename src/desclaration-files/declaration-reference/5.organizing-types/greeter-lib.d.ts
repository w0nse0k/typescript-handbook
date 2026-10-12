/**
 * @typedef {{ verbose: boolean; } } GreetingLib.LogOptions
 * @typedef {{ modal: boolean; title: string }} GreetingLib.AlertOptions
 */
export declare namespace GreetingLib {
    export type LogOptions = {
        verbose: boolean;
    };
}
export declare namespace GreetingLib {
    export type AlertOptions = {
        modal: boolean;
        title: string;
    };
}
/**
 * Greeter 객체는 파일에 로그를 기록하거나 알림을 표시할 수 있습니다. `.log(...)`에는 `LogOptions`를, `.alert(...)`에는 알림 옵션을 전달할 수 있습니다.
 */
export declare class Greeter {
    message: string;
    /**
     * @param { string } message
     */
    constructor(message: string);
    /**
     * @param { GreetingLib.LogOptions } logOption
     */
    log(logOption: GreetingLib.LogOptions): void;
    /**
     * @param { GreetingLib.AlertOptions } alertOption
     */
    alert(alertOption: GreetingLib.AlertOptions): void;
}
