// 4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const obj1 = {
  name: "Yash",
  company: "successive",
  age: 22,
};

const shallowcopy = { ...obj1 };
shallowcopy.name = "yash";
console.log(obj1);
console.log(shallowcopy);
