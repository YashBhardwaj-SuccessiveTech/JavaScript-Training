// 8. Write a program to remove dupliacte elements from an array

function removeduplicate(arr){
    let set = new Set();
    for(let i=0;i<arr.length;i++){
        set.add(arr[i]);
    }
    for(let i=0;i<arr.length;i++){
        if(!set.has(arr[i])){
            set.delete(arr[i]);
            arr.remove(i);
        }
    }
    return arr;
}

let arr= [1,1,23,24,23];

console.log(removeduplicate(arr));