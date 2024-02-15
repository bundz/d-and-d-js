import { Dice } from "./utils/dice.js";
export class Character {
  #name;
  #race;
  #class;
  #level;
  #hp;
  #strength;
  #dexterity;
  #constitution;
  #intelligence;
  #wisdom;
  #charisma;
  #speed;
  #gold;

  constructor(character) {
    this.#name = character.name;
    this.#race = character.race;
    this.#class = character.class;
    this.#level = character.level;
    this.#strength = character.strength + this.#race.getTrait("strength");
    this.#dexterity = character.dexterity + this.#race.getTrait("dexterity");
    this.#constitution = character.constituition + this.#race.getTrait("constituition");
    this.#intelligence = character.intelligence + this.#race.getTrait("intelligence");
    this.#wisdom = character.wisdom + this.#race.getTrait("wisdom");
    this.#charisma = character.charisma + this.#race.getTrait("charisma");
    this.#speed = this.#race.getTrait("speed");
    this.#gold = character.gold;
    this.#setInitialHp();
  }

  get name() {
    return this.#name;
  }

  getName() {
    return this.#name;
  }

  getRace() {
    return this.#race;
  }

  getClass() {
    return this.#class;
  }

  getLevel() {
    return this.#level;
  }

  getHp() {
    return this.#hp;
  }

  #setInitialHp() {
    const dice = new Dice(this.#class.getHitDie());
    this.#hp = this.#class.getHitDie() + this.getConstituitionModifier();

    for (let i = 1; i < this.#level; i++) {
      let hpRolled = dice.roll();

      if (hpRolled < 7) {
        hpRolled = 7;
      }

      this.#hp = this.#hp + hpRolled + this.getConstituitionModifier();
    }
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

  getSpeed() {
    return this.#speed;
  }

  get gold() {
    return this.#gold;
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
