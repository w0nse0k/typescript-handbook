export const myLib = {
  numberOfGreetings: 0,

  /**
   * @param {string} s
   */
  makeGreeting: function (s) {
    this.numberOfGreetings++;
    return s.toUpperCase();
  },
};
