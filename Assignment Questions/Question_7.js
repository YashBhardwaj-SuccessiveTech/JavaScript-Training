// 7. All of the above questions from 3-6 needs to be done with arrow functions also

// 3. Write a function expression that takes in another function as an argument

const mainFunction = (callback) => {
    console.log("Hello this is main function");
    callback();
}

const callback = () => {
    console.log("hello this is callback");
}

mainFunction(callback);



// 4. Write a function expression that takes in a number and returns its square.

const numsquare = (num)=>{
    return num*num;
}
console.log(numsquare(2));

// 5. Write a function expression that takes in two numbers and returns their sum.

const getsum = (num1, num2)=>{
    return num1+num2;
}

console.log(getsum(2,3));

// 6. Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const checknum = (num)=>{
    return num%2==0;
}

console.log(checknum(10));