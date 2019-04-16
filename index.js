let names = ['Alpha', 'Bravo', 'Charlie', 'Delta']
let classes = ['Mammal', 'Human', 'Dog']
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
	dog; // set my dogs as apart of the human
  constructor(name, age) {
    super(name, age)
  }
  speak() {
    console.log(`Hello my name is ${this.name}`);
  }
  mydogsage () {
    let sum = 0
    for(var i = 0; i < Object.keys(this.dog).length; i++){
      sum += this.dog[Object.keys(this.dog)[i]].age
    }
    console.log(sum / Object.keys(this.dog).length)
  }
}
class Dog extends Mammal {
  constructor(name, age) {
    super(name, age); // call the super class constructor and pass in the name & age
  }

  speak() {
  	super.speak()
    console.log(this.name + ' barks.');
  }
  
}
// TODO in future add CAT usage
class Cat extends Mammal {
  constructor(name, age) {
    super(name, age); 
  }

  speak() {
  	// Remove Super Speak And just speak
  	super.speak()
    console.log(this.name + ' meows.');
  }
  
}

const dog = {
a: new Dog('Alpha',14),
b: new Dog('Bravo',10),
c: new Dog('Charlie',8),
d: new Dog('Delta',3) }
// const {...dog} = values
const human = new Human('Justin',31);
human.dog = dog
dog['a'].speak();
human.speak();
human.eat();
human.mydogsage();
dog.a.eat();
