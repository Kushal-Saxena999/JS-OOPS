let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function(){
    return `${this.make} car got started in ${this.year}`
  },
};

// console.log(car.start());

function Person(name, age){
  this.name = name;
  this.age = age;
}

let kushal = new Person("Kushal Saxena", 22);
// console.log(kushal.name);

function Animal(type){
  this.type = type
}

Animal.prototype.speak = function(){
  return `${this.type} makes a sound`
}

Array.prototype.kushal = function(params){
  return `Custom method ${this}`
}

let myArray = [1, 2, 3];
// console.log(myArray.kushal());

let myNewArray = [1, 2, 3, 4, 5, 6];
// console.log(myNewArray.kushal());

class Vehicle {
  constructor(make, model){
    this.make = make;
    this.model = model;
  }
  start(){
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {//Inheritance
  drive(){
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Toyota", "Corolla");
console.log(vehOne);