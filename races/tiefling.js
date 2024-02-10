import { Race } from "./race.js";

export class Tiefling extends Race {
  constructor() {
    super("Tiefling");
    this.setTrait("intelligence", 1);
    this.setTrait("charisma", 2);
    this.setTrait("speed", 30);
  }
}
