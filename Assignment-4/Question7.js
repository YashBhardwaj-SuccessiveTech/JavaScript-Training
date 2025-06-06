// 7. Write a program to find index of duplicate elements in an array

function findduplicate(arr){
    let set= new Set();
    let ans=[];
    for(let i=0;i<arr.length;i++){
        if(!set.has(arr[i])){
            set.add(arr[i]);
        }else{
            ans.push(i);
        }
    }
    return ans;
}

let arr=[1,2,3,4,2,1];

console.log(`The Indexes of duplicates elements are ${findduplicate(arr)}`);