import { Race } from "./race.js";

export class Dwarf extends Race {
  constructor() {
    super("Dwarf");
  }

  getTrait(attribute) {
    if (attribute == "constituition") {
      return 2;
    }

    return 0;
  }
}
