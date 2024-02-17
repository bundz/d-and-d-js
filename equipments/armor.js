import { Equipment } from "./equipment.js";

export class Armor {
  #type;
  #armorClass;
  #maxDexterityModifier;
  #strengthRequired;
  #stealthStatus;

  constructor(armor) {
    super({ name: armor.name, price: armor.price, weight: armor.weight });
    this.#type = armor.type;
    this.#armorClass = armor.armorClass;
    this.#maxDexterityModifier = armor.maxDexterityModifier;
    this.#strengthRequired = armor.strengthRequired;
    this.#stealthStatus = armor.stealthStatus;
  }

  get type() {
    return this.#type;
  }

  get armorClass() {
    return this.#armorClass;
  }

  get maxDexterityModifier() {
    return this.#maxDexterityModifier;
  }

  get strengthRequired() {
    return this.#strengthRequired;
  }

  get stealthStatus() {
    return this.#stealthStatus;
  }
}

const armor = new Armor({ name: "Padded", type: "Light Armor", price: "5gp", armorClass: 11, strengthRequired: 0, stealthStatus: "disadvantage" });
