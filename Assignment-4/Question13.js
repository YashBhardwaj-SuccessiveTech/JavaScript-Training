// 13. Write a program to return inverse of an array

let arr = [5,4,3,2,1,0];

const inverseArray = (arr)=>{
    let inverse =[];
    for(let i=0;i< arr.length; i++){
        inverse[arr[i]] = i;
    }

    return inverse;
};

console.log("original array " + arr);
console.log("inverted array "+ inverseArray(arr));