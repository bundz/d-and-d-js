import { ClassTemplate } from "./classTemplate.js";

export class Cleric extends ClassTemplate {
  constructor() {
    super("Cleric", 8);
  }

  get startingWealth() {
    return "5d4";
  }
}
