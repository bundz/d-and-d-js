import { ClassTemplate } from "./classTemplate.js";

export class Bard extends ClassTemplate {
  constructor() {
    super("Bard", 8);
  }

  get startingWealth() {
    return "5d4";
  }
}
