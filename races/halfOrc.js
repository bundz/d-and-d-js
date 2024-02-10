import { Race } from "./race.js";

export class HalfOrc extends Race {
  constructor() {
    super("HalfOrc");
    this.setTrait("strength", 2);
    this.setTrait("constituition", 1);
    this.setTrait("speed", 30);
  }
}
