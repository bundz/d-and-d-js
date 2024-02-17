import { ARMOR_DATA } from "../data/armors.js";
import fs from "fs";

const keys = Object.keys(ARMOR_DATA);

for (const key of keys) {
  const armor = ARMOR_DATA[key];
  const fileNameSplit = armor.name.split(" ");

  let fileName = `${fileNameSplit[0].toLowerCase()}.js`;

  if (fileNameSplit[1]) {
    fileName = `${fileNameSplit[0].toLowerCase()}${fileNameSplit[1]}.js`;
  }

  const name = armor.name.replace(" ", "");

  fs.writeFileSync(
    `./equipments/armors/${fileName}`,
    `
import { Armor } from "../armor.js";
import { ARMOR_DATA } from "../../data/armors.js";

export class ${name} extends Armor {
  constructor() {
    super(ARMOR_DATA.${key});
  }
}`
  );
}
