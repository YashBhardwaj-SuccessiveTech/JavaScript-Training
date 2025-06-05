// 1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)

function calculator(n1, n2,operator){

    if(isNaN(n1) || isNaN(n2)){
        console.log("Invalid Input: One or Both values are not number");
        return NaN;
    }

    switch(operator){
        case '+':
            return n1+n2;
            break;
        case '-':
            return n1-n2;
            break;
        case '/':
            if(n2==0){
                console.log("Invalid Divisor");
                return;
            }
            return n1/n2;
            break;
        case '*':
            return n1*n2;
            break;
        default:
            console.log("choose correct option");
    }
}

console.log(calculator(3,2,'+'));
