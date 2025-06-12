// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().
class BankAccount {
  constructor(balance, owner) {
    this.balance = balance;
    this.owner = owner;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Money is deposited and current balance is ${this.balance}`);
  }

  withdraw(amount) {
    if (this.balance < amount) {
      console.log("Insufficient Balance");
      return;
    }
    this.balance -= amount;
    console.log(`Money is withdrawn and current balance is: ${this.balance}`);
  }

  displayBalance() {
    console.log(`Your current Account Balance is: ${this.balance}`);
  }
}

const myacc = new BankAccount(0, "Yash");
myacc.deposit(25);
myacc.withdraw(3);
myacc.displayBalance();
console.log(myacc.owner);
