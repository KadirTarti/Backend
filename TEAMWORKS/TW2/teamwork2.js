class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
  eat() {
    return `${this.name} is eating`;
  }
  sound() {
    return `${this.name} is says`;
  }
}

class Cat extends Animal {
  constructor(name, weight) {
    super(name, weight);
  }
  sound() {
    return `${super.sound()} Meow!`;
  }
}
let felix = new Cat("felix", 5);
console.log(felix.sound());
