export class Race {
  #name;
  #traits = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
    speed: 0,
  };

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getTrait(name) {
    return this.#traits[name];
  }

  setTrait(name, value) {
    this.#traits[name] = value;
  }
}
