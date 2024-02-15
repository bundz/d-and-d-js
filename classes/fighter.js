import { ClassTemplate } from "./classTemplate.js";

export class Fighter extends ClassTemplate {
  constructor() {
    super("Fighter", 10);
  }

  get startingWealth() {
    return "5d4";
  }
}
