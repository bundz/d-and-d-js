import { Dice } from "./dice.js";
import { Character } from "./character.js";

const dice = new Dice(20);

const data = {
  name: "Dedão",
  strength: dice.roll(),
  dexterity: dice.roll(),
  constituition: dice.roll(),
  intelligence: dice.roll(),
  wisdom: dice.roll(),
  charisma: dice.roll(),
};

const character = new Character(data);

console.log(`
---------- FICHA -----------
${character.getName()}
Strength:      ${character.getStrength()}
Dexterity:     ${character.getDexterity()}
Constituition: ${character.getConstituition()}
Intelligence:  ${character.getIntelligence()}
Wisdom:        ${character.getWisdom()}
Charisma:      ${character.getCharisma()}
`);
