export class Dice {
  #sides;

  constructor(sides) {
    this.#sides = sides;
  }

  roll() {
    return Math.ceil(Math.random() * this.#sides);
  }
}
