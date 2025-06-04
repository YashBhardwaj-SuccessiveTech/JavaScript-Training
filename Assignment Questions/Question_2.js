// 2. Write a function to take input(age, name, phone no.) from user and display it

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to take input
function getUserDetails() {
  rl.question('Enter your name: ', (name) => {
    rl.question('Enter your age: ', (age) => {
      rl.question('Enter your phone number: ', (phone) => {
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);
        console.log(`Phone: ${phone}`);
        rl.close(); 
      });
    });
  });
}

// Call the function
getUserDetails();
