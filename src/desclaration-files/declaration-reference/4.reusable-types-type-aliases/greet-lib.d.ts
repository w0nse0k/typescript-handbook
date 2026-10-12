export declare class Greeter {
    greet(): string;
}
/**
 * 인사가 필요한 곳이라면 어디든 문자열, 문자열을 반환하는 함수, 또는 Greeter 인스턴스를 제공할 수 있습니다.
 * @param { string | (() => string) | Greeter } greetLike
 */
export declare function greet(greetLike: string | (() => string) | Greeter): void;
