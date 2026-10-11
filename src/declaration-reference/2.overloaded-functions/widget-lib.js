/**
 * @description getWidget 함수는 문자열을 입력받아 Widget을 반환하거나, 숫자를 입력받아 Widget 배열을 반환합니다.
 */
export function getWidget(value) {
  if (typeof value === "string") return { name: value };
  return Array.from({ length: value }, () => ({ name: "" }));
}
