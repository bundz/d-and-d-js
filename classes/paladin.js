import { ClassTemplate } from "./classTemplate.js";

export class Paladin extends ClassTemplate {
  constructor() {
    super("Paladin", 10);
  }

  get startingWealth() {
    return "5d4";
  }
}
