// 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")Add commentMore actions

let str = "Hello John";
str=str.split(" ");
let str2="";

for(word of str){
    reverse(word);
    str2+=" ";
}

function reverse(word){
    for(let i=word.length-1;i>=0;i--){
        str2+= word[i];
    }
}

console.log(str2);