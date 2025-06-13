// Original Code

// let myObject = { name: "John", age: 30 };
// for (property in myObject) {
//   console.log(property + ": " + myObject.property); //Error line
// }

// IN this there exist an error in line 5 as we try to access the key literally named as property instead we must use [] to access the keys of Object.


// Rectification

let myObject = { name: "John", age: 30};
for(let property in myObject){
   console.log(property + " " + myObject[property]);
}

