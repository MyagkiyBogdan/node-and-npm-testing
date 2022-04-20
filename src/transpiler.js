const sum = (a, b) => a + b;

sum(2, 5);

class Hero {
  #name;
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }
}

const mage = new Hero("Gendalf");
