// 3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

function removeKey(arr) {
  arr.forEach((val) => {
    delete val.id;
  });
}

const arr = [
  { name: "Yash", age: 22, id: 1 },
  { name: "prakhar", age: 21, id: 2 },
  { name: "Prasuk", age: 23, id: 3 },
  { name: "rishabh", age: 22, id: 4 },
];

removeKey(arr);

console.log(arr);
