
// Prototypes in JavaScript
// Task: Prototype Chaining

// Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

// Then create another constructor Dog that inherits from Animal using prototypes.

// The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.



//1st Way

// function Animal() {
// }
 
// Animal.prototype.speak = function() {
//   return 'Animal speaking';
// };
 
// function Dog() {
// }
 
// Dog.prototype = Object.create(Animal.prototype);
 
// Dog.prototype.bark = function() {
//   return 'Woof!';
// };
 
// Dog.prototype.constructor = Dog;




//2nd Way


// // Constructor function for Animal
// function Animal() {}

// // Adding a method to Animal's prototype
// Animal.prototype.speak = function() {
//     return 'Animal speaking';
// };

// // Constructor function for Dog
// function Dog() {}

// // Setting Dog's prototype to an instance of Animal
// Dog.prototype = Object.create(Animal.prototype);

// // Adding a method to Dog's prototype
// Dog.prototype.bark = function() {
//     return 'Woof!';
// };

// // Creating an instance of Dog
// const myDog = new Dog();

// // Demonstrating the prototype chain
// console.log(myDog.speak()); // Output: 'Animal speaking'
// console.log(myDog.bark());  // Output: 'Woof!'

// // Checking the prototype chain
// console.log(Object.getPrototypeOf(myDog) === Dog.prototype); // true
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(myDog)) === Animal.prototype); // true