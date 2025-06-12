// 1. Write a program to iterate over object.

function iterate(obj) {
  for (let [key, value] of Object.entries(obj)) {
    console.log(`${key} -> ${value} `);
  }
}

let obj = {
  Name: "Yash",
  Company: "Successive Digital",
  age: "22",
};

iterate(obj);
