import { Race } from "./race.js";

export class Halfling extends Race {
  constructor() {
    super("Halfling");
    this.setTrait("dexterity", 2);
    this.setTrait("speed", 25);
  }
}
