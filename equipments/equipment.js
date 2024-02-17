export class Equipment {
  #name;
  #price;
  #weight;

  constructor(equipment) {
    this.#name = equipment.name;
    this.#price = equipment.price;
    this.#weight = equipment.weight;
  }

  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }

  get weight() {
    return this.#weight;
  }
}
