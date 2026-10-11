/**
 * <h3>setTimeout() Promise</h3>
 * @module
 */
// setTimeout() 사용
setTimeout(() => console.log("1 second passed."), 1000);

// setTimeout()을 Promise로 만들기
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// then()을 사용해서 resolve
delay(2000).then(() => console.log("2 seconds passed."));

// await를 사용해서 resolve
(async function () {
  await delay(3000);
  console.log("3 seconds passed.");
})();

console.log("continue...");
