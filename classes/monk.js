import { ClassTemplate } from "./classTemplate.js";

export class Monk extends ClassTemplate {
  constructor() {
    super("Monk", 8);
  }

  get startingWealth() {
    return "5d4";
  }
}
