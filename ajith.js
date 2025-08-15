let name = "Ajit";
const age = 25;
var isActive = true;


function greet(user) {
  return `Hello, ${user}!`;
}
console.log(greet(name)); 


const square = function (x) {
  return x * x;
};
console.log(square(4)); 


const add = (a, b) => a + b;
console.log(add(5, 3)); 


function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayHi = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const ajit = new Person("Ajit", 25);
ajit.sayHi(); 


class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex");
dog.speak(); 


const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

const filtered = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", filtered);


for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 3) {
    console.log(`${numbers[i]} is greater than 3`);
  }
}
