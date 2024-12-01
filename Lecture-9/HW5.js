// Encapsulation, Polymorphism, Abstraction, and Getters/Setters
// Task 1: Encapsulation Using Getters and Setters

// Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.



// Task 2: Polymorphism with Method Overriding

// Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.



class BankAccount {
  constructor(balance = 0) {
      // Initialize balance with a non-negative value
      this._balance = balance >= 0 ? balance : 0;
  }

  // Getter for balance
  get balance() {
      return this._balance;
  }

  // Method to deposit money
  deposit(amount) {
      if (amount > 0) {
          this._balance += amount;
          console.log(`Deposited: $${amount}. New balance: $${this._balance}`);
      } else {
          console.log('Deposit amount must be positive.');
      }
  }

  // Method to withdraw money
  withdraw(amount) {
      if (amount > 0 && amount <= this._balance) {
          this._balance -= amount;
          console.log(`Withdrew: $${amount}. New balance: $${this._balance}`);
      } else if (amount > this._balance) {
          console.log('Insufficient funds for withdrawal.');
      } else {
          console.log('Withdrawal amount must be positive.');
      }
  }
}

// Example usage
const myAccount = new BankAccount(100);
console.log(`Current balance: $${myAccount.balance}`); // Output: Current balance: $100

myAccount.deposit(50);   // Output: Deposited: $50. New balance: $150
myAccount.withdraw(30);  // Output: Withdrew: $30. New balance: $120
myAccount.withdraw(200); // Output: Insufficient funds for withdrawal.
console.log(`Final balance: $${myAccount.balance}`); // Output: Final balance: $120


// Base class Shape
class Shape {
  // Method to return the area of the shape
  area() {
      return 0; // Default area for a generic shape
  }
}

// Subclass Circle
class Circle extends Shape {
  constructor(radius) {
      super(); // Call the parent constructor
      this.radius = radius;
  }

  // Override the area method to calculate the area of the circle
  area() {
      return Math.PI * this.radius * this.radius; // Area = πr²
  }
}

// Subclass Rectangle
class Rectangle extends Shape {
  constructor(width, height) {
      super(); // Call the parent constructor
      this.width = width;
      this.height = height;
  }

  // Override the area method to calculate the area of the rectangle
  area() {
      return this.width * this.height; // Area = width * height
  }
}

// Example usage
const shapes = [
  new Circle(5),       // Create a circle with radius 5
  new Rectangle(4, 6)  // Create a rectangle with width 4 and height 6
];

// Calculate and log the area of each shape
shapes.forEach(shape => {
  console.log(`Area: ${shape.area()}`);
});
