import { ClassTemplate } from "./classTemplate.js";

export class Druid extends ClassTemplate {
  constructor() {
    super("Druid", 8);
  }

  get startingWealth() {
    return "2d4";
  }
}
