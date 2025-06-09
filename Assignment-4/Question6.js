// 6. Write a program to find sum of an array

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let arr = [1, 24, 25, 15];
console.log(sum(arr));

// Through Reduce Method
const initval = 0;
const sumval = arr.reduce(
  (accumulator, currval) => accumulator + currval,
  initval
);

console.log(sumval);
