// 1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)

function calculator(n1, n2){
    let exp = "add";
    switch(exp){
        case "add":
            console.log(n1+n2);
            break;
        case "subtract":
            console.log(n2-n1);
            break;
        case "divide":
            console.log(n1/n2);
            break;
        case "multiply":
            console.log(n1*n2);
            break;
        default:
            console.log("choose correct option");
    }
}

calculator(4,2);