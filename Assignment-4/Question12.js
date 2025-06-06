// 12. Write a program to display intersection of two array

function intersectionofArray(arr1,arr2){
    let len1 = arr1.length;
    let len2 = arr2.length;

    let resArr=[];
    for(let i=0;i<len1;i++){
        if(arr2.includes(arr1[i])){
            resArr.push(arr1[i]);
        }
    }

    return resArr;
}

let arr1=[1,2,3,4,5];
let arr2=[1,2,3,4,4];
console.log(`Intersection of two array: ${intersectionofArray(arr1,arr2)}`);