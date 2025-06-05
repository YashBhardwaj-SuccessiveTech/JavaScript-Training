// // 1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

let str = "Hello Yellow";
let set = new Set();
let str2="";

for(let i=0;i<str.length;i++){
    if(!set.has(str.charAt(i))){
        set.add(str.charAt(i));
        str2+=str.charAt(i);
    }
}

console.log(str2);



