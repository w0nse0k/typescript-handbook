/**
 * <h3>step1, step2, step3 를 async ~ await로 만들기</h3>
 * @module
 */
// async 함수로 Promise 만들기
const step1 = async () => "step1 result";
const step2 = async (value: string) => `${value}:step2 result`;
const step3 = async (value: string) => `${value}:step3 result`;

// promise를 then()으로 실행
step1().then(step2).then(step3).then(console.log);

// promise를 async ~ await로 실행
(async () => {
  const result1 = await step1();
  const result2 = await step2(result1);
  const result3 = await step3(result2);
  console.log(result3);
})();

console.log("continue...");
