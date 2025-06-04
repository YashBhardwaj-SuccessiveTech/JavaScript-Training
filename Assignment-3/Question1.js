// 1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)

function calculator(n1, n2,operator){

    switch(operator){
        case '+':
            console.log(n1+n2);
            break;
        case '-':
            console.log(n2-n1);
            break;
        case '/':
            console.log(n1/n2);
            break;
        case '*':
            console.log(n1*n2);
            break;
        default:
            console.log("choose correct option");
    }
}

calculator(4,2,'+');