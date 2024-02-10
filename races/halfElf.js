import { Race } from "./race.js";

export class HalfElf extends Race {
  constructor() {
    super("HalfElf");
    this.setTrait("charisma", 2);
    this.setTrait("speed", 30);
  }
}
