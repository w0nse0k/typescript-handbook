/**
 * 위젯 타입
 * @typedef {{ name: string }} Widget
 */

/**
 * 문자열로 위젯 생성
 * @overload
 * @param {string} value
 * @returns { Widget }
 */

/**
 * 숫자로 위젯 배열 생성
 * @overload
 * @param {number} value
 * @returns {Widget[]}
 */

/**
 * 문자열이나 숫자로 위젯이나 위젯 배열 생성
 * @param { string | number } value
 */
export function getWidget(value) {
  if (typeof value === "string") return { name: value };
  return Array.from({ length: value }, () => ({ name: "" }));
}
