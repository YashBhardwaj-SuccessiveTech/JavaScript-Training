// 3. Write a function expression that takes in another function as an argument

const mainFunction = function(callback){
    console.log("Hello this is main function");
    callback();
}

const callback = function(){
    console.log("hello this is callback");
}

mainFunction(callback);