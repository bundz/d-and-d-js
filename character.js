export class Character {
  #name;
  #race;
  #strength;
  #dexterity;
  #constitution;
  #intelligence;
  #wisdom;
  #charisma;

  constructor(character) {
    this.#race = character.race;
    this.#name = character.name;
    this.#strength = character.strength + this.#race.getTrait("strength");
    this.#dexterity = character.dexterity + this.#race.getTrait("dexterity");
    this.#constitution = character.constituition + this.#race.getTrait("constituition");
    this.#intelligence = character.intelligence + this.#race.getTrait("intelligence");
    this.#wisdom = character.wisdom + this.#race.getTrait("wisdom");
    this.#charisma = character.charisma + this.#race.getTrait("charisma");
  }

  getName() {
    return this.#name;
  }

  getRace() {
    return this.#race;
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

  setConstituition(constituition) {
    this.#constitution = constituition;
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

  getModifier(attribute) {
    return Math.floor((attribute - 10) / 2);
  }

  getStrengthModifier() {
    return this.getModifier(this.#strength);
  }

  getDexterityModifier() {
    return this.getModifier(this.#dexterity);
  }

  getConstituitionModifier() {
    return this.getModifier(this.#constitution);
  }

  getIntelligenceModifier() {
    return this.getModifier(this.#intelligence);
  }

  getWisdomModifier() {
    return this.getModifier(this.#wisdom);
  }

  getCharismaModifier() {
    return this.getModifier(this.#charisma);
  }
}
