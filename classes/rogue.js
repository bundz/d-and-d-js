import { ClassTemplate } from "./classTemplate.js";

export class Rogue extends ClassTemplate {
  constructor() {
    super("Rogue", 8);
  }

  get startingWealth() {
    return "4d4";
  }
}
