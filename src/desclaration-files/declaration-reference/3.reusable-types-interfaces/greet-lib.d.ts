/**
 *  인사말을 지정할 때는 GreetingSettings 객체를 전달해야 합니다. 이 객체는 다음과 같은 속성을 가집니다.
 * 1 - greeting: 필수 문자열
 * 2 - duration: 선택 사항인 지속 시간(밀리초 단위)
 * 3 - color: 선택 사항인 색상 문자열(예: '#ff00ff')
 * @typedef {{
 *  greeting: string;
 *  duration?: number;
 *  color?: string; }} GreetingSettings
 */
export type GreetingSettings = {
    greeting: string;
    duration?: number;
    color?: string;
};
/**
 * @param {GreetingSettings} greetingSettings
 */
export declare function greet(greetingSettings: GreetingSettings): void;
