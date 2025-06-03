// 1. Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same)

function generaterandom(){
    // generating random numbers
    let num= Math.floor((Math.random()*10)+1);
    return num;
}

let n1= generaterandom();
let n2= generaterandom();

if(n1==n2){
    console.log("Acceptance Criteria not fulfilled as simultaneous numbers are same");
}else{
    console.log(generaterandom());
}

