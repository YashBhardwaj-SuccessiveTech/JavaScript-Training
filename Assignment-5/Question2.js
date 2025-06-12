// 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

function sortArray(obj) {
  obj.sort((a, b) => a.age - b.age);

  obj.forEach((val) => {
    console.log(`${val.name} -> ${val.age}`);
  });
}

const obj = [
  { name: "Yash", age: 21 },
  { name: "Shreya", age: 22 },
  { name: "Radhika", age: 19 },
];

sortArray(obj);
