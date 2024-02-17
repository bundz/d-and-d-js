import { Armor } from "../armor.js";
import { ARMOR_DATA } from "../../data/armors.js";

export class HalfPlate extends Armor {
  constructor() {
    super(ARMOR_DATA.HALF_PLATE);
  }
}
