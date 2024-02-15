import { ClassTemplate } from "./classTemplate.js";

export class Sorcerer extends ClassTemplate {
  constructor() {
    super("Sorcerer", 6);
  }

  get startingWealth() {
    return "3d4";
  }
}
