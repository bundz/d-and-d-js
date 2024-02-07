export class Character {
  #name;
  #strength;
  #dexterity;
  #constitution;
  #intelligence;
  #wisdom;
  #charisma;

  constructor(character) {
    this.#name = character.name;
    this.#strength = character.strength;
    this.#dexterity = character.dexterity;
    this.#constitution = character.constituition;
    this.#intelligence = character.intelligence;
    this.#wisdom = character.wisdom;
    this.#charisma = character.charisma;
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
    return (
      this.#strength +
      this.#dexterity +
      this.#constitution +
      this.#intelligence +
      this.#wisdom +
      this.#charisma
    );
  }
}
