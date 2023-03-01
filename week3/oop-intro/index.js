// OOP - object oriented programming

// we represent reality with objects

// object literal syntax
const dog1 = {
  name: 'Benji',
  age: 2
};

const dog2 = {
  name: 'Uva',
  age: 4
};

// factory function -> returns the dog object
function dogFactory(dogName, dogAge) {
  return {
    name: dogName,
    age: dogAge,
    bark: function () {
      console.log('WOOF!');
    },
    growOlder: function () {
      this.age += 1;
    }
  };
}

const dog3 = dogFactory('Olivia', 3);
console.log(dog3);
dog3.bark();
dog3.growOlder();
console.log(dog3.age);

// create a factory function for a person
// with firstName, lastName
// and greet -> returns "Hi, I'm XXXX YYYY, welcome to Ironhack"

function personFactory(first, last) {
  return {
    firstName: first,
    lastName: last,
    greet: function () {
      console.log(
        `Hi, I'm ${this.firstName} ${this.lastName}, welcome to Ironhack!`
      );
    }
  };
}

const person1 = personFactory('Lúcia', 'Duarte');
person1.greet();

// class
// class is a blueprint for an object
// class names should be Uppercased -> PascalCase
class Person {
  // special method in classes that instantiates the class itself
  constructor(name, job) {
    this.name = name;
    this.job = job;
    this.energy = 100;
    this.age = 0;
  }

  greet() {
    console.log(`Hi, my name is ${this.name}!`);
  }

  work() {
    this.energy -= 10;
  }

  sleep() {
    this.energy += 10;
  }
}

// creating an instance of the class Person
const xico = new Person('Xico', 'developer');
console.log(xico.job);

const henrique = new Person('Henrique', 'student');
henrique.greet();

// Inheritance
// One of the benefits of using classes is that we can extend them
// we can get everything the other class has, avoiding repetition
class Baby extends Person {
  constructor(name, job, gender) {
    super(name, job);
    this.gender = gender;
  }

  cry() {
    console.log('BUAHAHAH');
    this.energy -= 20;
  }
}

const carlos = new Baby('Carlos', 'baby', 'boy');
console.log(carlos.energy);
carlos.cry();
carlos.sleep();
carlos.work();
console.log(carlos.energy);

// create an animal class
// extend that class to create a cat class
class Animal {
  constructor(habitat, legs) {
    this.habitat = habitat;
    this.nrOfLegs = legs;
    this.age = 0;
    this.energy = 100;
  }

  play() {
    this.energy -= 10;
  }

  sleep() {
    this.energy += 10;
  }

  growOlder() {
    this.age++;
  }

  makeNoise() {
    console.log('Generic animal noise');
  }
}

class Cat extends Animal {
  constructor(name, habitat, legs) {
    super(habitat, legs);
    this.name = name;
    this.evilness = 0;
  }

  scratchPeople() {
    this.energy--;
    this.evilness++;
  }

  makeNoise() {
    console.log('Miau');
  }
}

const monkey = new Animal('Jungle', 2);
const kitty = new Cat('Kitty', 'House', 4);
kitty.makeNoise();
kitty.scratchPeople();
// abstraction - the methods are hidden because the implementation is not necessary to know
console.log(kitty);

// Polyphormism instances of different classes having the same methods
monkey.growOlder();
kitty.growOlder();

console.log(kitty instanceof Cat); // true
console.log(kitty instanceof Animal); // true
console.log(monkey instanceof Cat); // false
console.log(monkey instanceof Animal); // true
