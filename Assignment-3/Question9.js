// 9. Write a program to print fibonaaci series
function fibo(n){
    if(n==0 || n==1){
        return n;
    }
    return fibo(n-1)+fibo(n-2);
}

function printfibonacci(num){
    let series=""
    for(let i=0;i<num;i++){
        series+=fibo(i)+" ";
    }
    console.log(series);
}

printfibonacci(10);