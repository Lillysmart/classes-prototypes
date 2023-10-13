//@ts-check

class counter {
  static firstName = "leona";
  static surname = "smart";
  static greet() {
    console.log("yo yo ");
  }
  #value = 1;
  #label = undefined;

  /**
   *
   * @param {string} label
   */
  constructor(label) {
    this.#label = label;
  }
  /**
   *
   * @param {number} amount
   */
  increase(amount) {
    this.#value += amount || 1;
  }
  /**
   *
   * @param {number} amount
   */
  decrease(amount) {
    this.#value -= amount || 1;
  }
  /**
   *
   */
  display() {
    console.log(`${this.#value}  ${this.#label}`);
  }
}

console.log(counter.surname, counter.firstName, counter.greet());
const example = new counter("lilly");
//example.decrease
