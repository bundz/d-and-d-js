import { ClassTemplate } from "./classTemplate.js";

export class Ranger extends ClassTemplate {
  constructor() {
    super("Ranger", 10);
  }

  get startingWealth() {
    return "5d4";
  }
}
