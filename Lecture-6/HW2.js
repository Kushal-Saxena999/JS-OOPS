

// Functional Constructor and Errors
// Task 1: Create a Functional Constructor

// Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".



// Task 2: Handle Errors

// Modify the Person constructor to throw an error if the age is not a positive number.


//1st Way

// function Person(name, age) {
//   if (age <= 0) {
//     throw new Error('Age must be a positive number');
//   }
 
//   this.name = name;
//   this.age = age;
 
//   this.greet = function() {
//     return `Hello, my name is ${this.name}`;
//   };
// }


//2nd Way

// Functional constructor for Person
function Person(name, age) {
  // Validate parameters
  if (typeof name !== 'string' || name.trim() === '') {
      throw new Error('Name must be a non-empty string.');
  }
  
  // Set properties
  this.name = name;
  
  // Set age with validation
  this.setAge(age);
}

// Method to greet
Person.prototype.greet = function() {
  return `Hello, my name is ${this.name}.`;
};

// Method to set age with validation
Person.prototype.setAge = function(age) {
  if (typeof age !== 'number' || age <= 0) {
      throw new Error('Age must be a positive number.');
  }
  this.age = age;
};

// Example usage
try {
  const person1 = new Person('Alice', 30);
  console.log(person1.greet()); // Output: Hello, my name is Alice.
  
  const person2 = new Person('Bob', -5); // This will throw an error
} catch (error) {
  console.error(error.message); // Output: Age must be a positive number.
}