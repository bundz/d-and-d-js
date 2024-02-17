import { Armor } from "../armor.js";
import { ARMOR_DATA } from "../../data/armors.js";

export class ChainShirt extends Armor {
  constructor() {
    super(ARMOR_DATA.CHAIN_SHIRT);
  }
}
