import { Race } from "./race.js";

export class Elf extends Race {
  constructor() {
    super("Elf");
    this.setTrait("dexterity", 2);
    this.setTrait("speed", 30);
  }
}
