import { ClassTemplate } from "./classTemplate.js";

export class Barbarian extends ClassTemplate {
  constructor() {
    super("Barbarian", 12);
  }

  get startingWealth() {
    return "2d4";
  }
}
