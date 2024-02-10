import { Race } from "./race.js";

export class Dragonborn extends Race {
  constructor() {
    super("Dragonborn");
    this.setTrait("strength", 2);
    this.setTrait("charisma", 1);
    this.setTrait("speed", 30);
  }
}
