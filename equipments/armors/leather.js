import { Armor } from "../armor.js";
import { ARMOR_DATA } from "../../data/armors.js";

export class Leather extends Armor {
  constructor() {
    super(ARMOR_DATA.HIDE);
  }
}
