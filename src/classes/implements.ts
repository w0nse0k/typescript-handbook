/**
 * <h3>implements Clauses</h3>
 * @module
 * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses
 */
interface Pingable {
  ping(): void;
}

class Ball implements Pingable {
  // interface의 메서드를 반드시 구현해야 한다.
  ping() {
    console.log("ping!");
  }

  pong() {
    console.log("pong!");
  }
}

const b1 = new Ball();
b1.ping();
b1.pong();
