export class Character {
  #name;
  #strength;
  #dexterity;
  #constitution;
  #intelligence;
  #wisdom;
  #charisma;

  constructor(data) {
    this.#name = data.name;
    this.#strength = data.strength;
    this.#dexterity = data.dexterity;
    this.#constitution = data.constituition;
    this.#intelligence = data.intelligence;
    this.#wisdom = data.wisdom;
    this.#charisma = data.charisma;
  }

  getName() {
    return this.#name;
  }

  getStrength() {
    return this.#strength;
  }

  getDexterity() {
    return this.#dexterity;
  }

  getConstituition() {
    return this.#constitution;
  }

  getIntelligence() {
    return this.#intelligence;
  }

  getWisdom() {
    return this.#wisdom;
  }

  getCharisma() {
    return this.#charisma;
  }

  sumAttributes() {
    return this.#strength + this.#dexterity + this.#constitution + this.#intelligence + this.#wisdom + this.#charisma;
  }
}
