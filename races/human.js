import { Race } from "./race.js";

export class Human extends Race {
  constructor() {
    super("Human");
    this.setTrait("speed", 30);
  }
}
