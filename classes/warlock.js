import { ClassTemplate } from "./classTemplate.js";

export class Warlock extends ClassTemplate {
  constructor() {
    super("Warlock", 8);
  }

  get startingWealth() {
    return "4d4";
  }
}
