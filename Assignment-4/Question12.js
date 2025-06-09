// 12. Write a program to display intersection of two array

function intersectionofArray(arr1, arr2) {
  let len1 = arr1.length;
  let len2 = arr2.length;

  let resArr = [];

  arr1.forEach((number) => {
    if (arr2.includes(number)) {
      resArr.push(number);
    }
  });

  return resArr;
}

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 4, 4, 6];
console.log(`Intersection of two array: ${intersectionofArray(arr1, arr2)}`);
