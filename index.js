let classes = ['Mammal', 'Human']
class Mammal { 
  // this is the base class for all things living
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  eat () {
     console.log(this.name + ' is eating');
  }
  speak() {
     console.log(this.name + ' makes a noise.');
  }
}
class Human extends Mammal {
  constructor(name, age) {
    super(name, age)
  }
  speak() {
    console.log(`Hello my name is ${this.name}`);
  }
}

const human = new Human('Justin',31);
human.speak();
human.eat();
