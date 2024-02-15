import { Dice } from "./dice.js";

export class Dices {
  #dices = [];
  #number;
  #sides;

  constructor(dices) {
    const [number, sides] = dices.split("d");
    this.#number = Number(number);
    this.#sides = Number(sides);

    for (let i = 0; i < this.#number; i++) {
      this.#dices.push(new Dice(this.#sides));
    }
  }

  roll() {
    let result = {
      total: 0,
      rolls: [],
    };

    for (const dice of this.#dices) {
      const roll = dice.roll();
      result.total = result.total + roll;
      result.rolls.push(roll);
    }

    return result;
  }
}

const dices = new Dices("2d6");

console.log(dices.roll());
