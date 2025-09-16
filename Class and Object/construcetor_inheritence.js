class Animal {
  constructor(name) {
    this.name = name;
  
  console.log("the animal is :" + name);
}
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls parent constructor
    this.breed = breed;
  }

  info() {
    console.log(`${this.name} is a ${this.breed}`);
  }
}

const animal = new  Animal("deer");
const dog2 = new Dog("Bruno", "Labrador");
dog2.info(); // Bruno is a Labrador
