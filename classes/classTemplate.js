export class ClassTemplate {
  #hitDie;
  #name;
  constructor(name, hitDie) {
    this.#name = name;
    this.#hitDie = hitDie;
  }

  getHitDie() {
    return this.#hitDie;
  }

  getName() {
    return this.#name;
  }
}
