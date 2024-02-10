import { Race } from "./race.js";

export class Gnome extends Race {
  constructor() {
    super("Gnome");
    this.setTrait("intelligence", 2);
    this.setTrait("speed", 25);
  }
}
