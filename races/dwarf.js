import { Race } from "./race.js";

export class Dwarf extends Race {
  constructor() {
    super("Dwarf");
    this.setTrait("constituition", 2);
    this.setTrait("speed", 25);
  }
}
