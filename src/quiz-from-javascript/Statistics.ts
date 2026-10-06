/**
 * <h3>constructor function: Statistics</h3>
 * @module
 */
class Statistis {
  data: number[];
  constructor(arr: number[]) {
    this.data = arr;
  }

  sum() {
    // 합계
    let result = 0;
    for (const elem of this.data) result += elem;
    return result;
  }

  average() {
    // 평균
    return this.sum() / this.data.length;
  }
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stats = new Statistis(data);
console.log(`sum: ${stats.sum()}, average: ${stats.average()}`);
