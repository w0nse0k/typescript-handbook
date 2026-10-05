// oxlint-disable no-unused-private-class-members
/**
 * <h3>hard private</h3>
 */
class MySafe {
  private secretKey = 12345;

  // hard private
  #anotherKey = 67890;
}

const s = new MySafe();
console.log(s["secretKey"]);
// console.log(s["#anotherKey"]); // undefined
