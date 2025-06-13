// Find Error in below questions and rectify them

let myArray = [1, 2, 3, 4];
for (let i = 0; i <= myArray.length; i++) {
  //error line
  console.log(myArray[i]);
}

// Error in for loop as in condition equalto (=) will not come as it will result in index out of bond.

// Rectification
let myArray1 = [1, 2, 3, 4];
for (let i = 0; i < myArray1.length; i++) {
  console.log(myArray1[i]);
}
