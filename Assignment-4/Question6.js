// 6. Write a program to find sum of an array

function sum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

let arr=[1,24,25,15];
console.log(sum(arr));