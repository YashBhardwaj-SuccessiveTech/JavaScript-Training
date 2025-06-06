// 8. Write a program to remove duplicate elements from an array

function removeduplicate(arr){
    let set= new Set();
    let ans=[];
    for(let i=0;i<arr.length;i++){
        set.add(arr[i]);
    }
    for (const value of set) {
        ans.push(value);
    }
    return ans;
}

let arr=[1,2,3,4,1];
console.log(removeduplicate(arr));