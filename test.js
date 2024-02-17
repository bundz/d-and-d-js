import { Dice } from "./utils/dice.js";
import { Character } from "./character.js";
import { Dwarf } from "./races/dwarf.js";
import { Barbarian } from "./classes/barbarian.js";
import { Plate } from "./equipments/armors/plate.js";
import { Padded } from "./equipments/armors/padded.js";

const dice = new Dice(20);

const data = {
  name: "Dedão",
  race: new Dwarf(),
  class: new Barbarian(),
  level: 1,
  strength: 2 || dice.roll(),
  dexterity: dice.roll(),
  constituition: dice.roll(),
  intelligence: dice.roll(),
  wisdom: dice.roll(),
  charisma: dice.roll(),
  gold: 4000,
};

const character = new Character(data);

console.log(`
---------- FICHA -----------
${character.getName()}
Race:          ${character.getRace().getName()}
Class:         ${character.getClass().getName()}
Level:         ${character.getLevel()}
Hp:            ${character.getHp()}
Strength:      ${character.getStrength()}
Dexterity:     ${character.getDexterity()}
Constituition: ${character.getConstituition()}
Intelligence:  ${character.getIntelligence()}
Wisdom:        ${character.getWisdom()}
Charisma:      ${character.getCharisma()}
-----Modifiers------     
Strength:      ${character.getStrengthModifier()}
Dexterity:     ${character.getDexterityModifier()}
Constituition: ${character.getConstituitionModifier()}
Intelligence:  ${character.getIntelligenceModifier()}
Wisdom:        ${character.getWisdomModifier()}
Charisma:      ${character.getCharismaModifier()}
`);

const plate = new Plate();
const padded = new Padded();

character.addEquipment(padded);

if (!character.addEquipment(plate)) {
  console.log("Character cannot carry this equipment.");
}
console.log(plate.weight);
console.log(character.equipments);
console.log(character.totalCarryingWeight);
console.log(character.carringCapacity);
