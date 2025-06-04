// 5. Write a program to print all even number first and then all odd numbers using only one iteration

function printevenodd(range){
    let even = "";
    let odd = "";
    for(let i=1;i<=range;i++){
        if(i%2==0){
            even = even + " " + i
        }else{
            odd = odd + " " + i
        }
    }
    console.log("even numbers are: " + even);
    console.log("odd numbers are: " + odd);
}

printevenodd(50);