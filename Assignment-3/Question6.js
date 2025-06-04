// 6. Write a program to display prime numbers from 1 to 50

// function to check if the number is prime or not 
function isprime(num){
    if(num < 2){
        return false;
    }
    for(let i=2;i<Math.sqrt(num);i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

// function to print prime number

function printprime(num){
    for(let i=1;i<=num;i++){
        if(isprime(i)){
            console.log(i);
        }
    }
}

printprime(50);