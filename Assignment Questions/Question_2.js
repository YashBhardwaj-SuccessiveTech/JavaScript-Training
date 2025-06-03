// 2. Write a function to take input(age, name, phone no.) from user and display it

const Name = prompt("enter Name ");
const age = prompt("enter Age ");
const phone = prompt("enter Phone NO. ");

console.log(Name + " " + age + " " + phone);

document.getElementById("name").innerText = "Name: " + Name;
document.getElementById("age").innerText = "Age: " + age;
document.getElementById("phone").innerText = "Phone: " + phone;

