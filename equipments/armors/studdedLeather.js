import { Armor } from "../armor.js";
import { ARMOR_DATA } from "../../data/armors.js";

export class StuddedLeather extends Armor {
  constructor() {
    super(ARMOR_DATA.STUDDED_LEATHER);
  }
}
