// 8. Write a program to dispaly number from 1-20 using all types of loops

// 1. Using For loop

function printnumbers1(){
    let ans="";
    for(let i=1;i<=20;i++){
        ans+=i+" ";
    }
    console.log(ans);
}
printnumbers1();

// 2.Using While Loop
function printnumbers2(){
    let i=1;
    let ans="";
    while(i<=20){
        ans+=i+" "
        i++;
    }
    console.log(ans);
}
printnumbers2();


// 3. Using Do-While Loop
function printnumbers3(){
    let i=1;
    let ans="";
    do{
        ans+=i+" "
        i++;
    }while(i<=20)
    console.log(ans);
}
printnumbers3();