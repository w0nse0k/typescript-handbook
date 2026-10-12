/**
 * 위젯 타입
 * @typedef {{ name: string }} Widget
 */
export type Widget = {
    name: string;
};
export declare function getWidget(value: string): Widget;
export declare function getWidget(value: number): Widget[];
