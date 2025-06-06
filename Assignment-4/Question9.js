// 9. Write a program to find the last duplicate index in an array

// function lastindx(arr){
//     let ans="";
//     let map = new Map();
//     for(let i=0;i<arr.length;i++){
//         if(!map.has(arr[i])){
//             map.set(arr[i],i);
//         }else{
//             let currindx= i;
//             map.set(arr[i],currindx);
//         }
//     }
//     console.log(map);
// }

// let arr=[1,2,3,1,2];
// lastindx(arr);


const lastindx= (arr)=>{
    const map= new Map();
    arr.forEach((element, index)=>{
        if(map.has(element)){
            map.set(element, index);
        }else{
            map.set(element,-1);
        }
    });
    map.forEach((value, key)=>{
        if(value === -1){
            map.delete(key);
        }
    });

    return map;
}

const lastindxes = lastindx([1,2,3,5,2,1,2]);
console.log(lastindxes);