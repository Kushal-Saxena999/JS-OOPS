//Encapsulation

class BankAccount {
  #balance = 0;

  deposit(amount){
    this.#balance += amount;
    return this.#balance;
  };
  getBalance(){
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());


//Abstraction

class CoffeMachine {
  start() {
    //call DB
    //filter value
    return `Starting the machine...`;
  }
  brewCoffee() {
    //complex calculation
    return `Brewing coffee`;
  }
  pressStartButton(){
    let msgone =this.start();
    let msgtwo = this.brewCoffee();
    return `${msgone} + ${msgtwo}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());



//Polymorphism

class Bird{

  fly(){
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly(){
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());


//Static Method

class Calculator{
   add(a,b){
    return a+b;
  }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2,3));

// console.log(Calculator.add(2,3));


//Getters and Setters

class Employee{
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    }
    this.name = name;
    this.#salary = salary;//Underscore is good practice means something about to come.
  }

  get salary(){
    return `You are not allowed to see salary`;
  }

  set salary(value){
    if (value < 0) {
      console.log("Invalid Salary");
    }else {
      this._salary = value;
    }
  }
}

let emp = new Employee("Alice", 5000);
console.log(emp._salary);
emp.salary = -60000;




