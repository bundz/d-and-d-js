import { ClassTemplate } from "./classTemplate.js";

export class Wizard extends ClassTemplate {
  constructor() {
    super("Wizard", 6);
  }

  get startingWealth() {
    return "4d4";
  }
}
