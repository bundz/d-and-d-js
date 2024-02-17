import { Equipment } from "./equipment.js";
import { ARMOR_DATA } from "../data/armors.js";

export class Armor extends Equipment {
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

const armor = new Armor(ARMOR_DATA.PADDED);

console.log(armor.name);
console.log(armor.armorClass);
console.log(armor.type);
