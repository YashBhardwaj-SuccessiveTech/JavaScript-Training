// 4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const obj= {
    name:"Yash",
    age:21,
    country: {
        asia: "India",
        africa: "south africa"
    }
}

// const shallowcopy = {...obj};
// shallowcopy.country.asia = "pakistan";

// console.log(obj);
// console.log(shallowcopy);


// const deepcopy = JSON.parse(JSON.stringify(obj));
// deepcopy.country.asia = "afganistan";

// console.log(obj);
// console.log(deepcopy);

function deepclone(obj){
    const deepcopy = JSON.parse(JSON.stringify(obj));
    return deepcopy;
}

deepcopy.country.asia = "china";

console.log(obj);
console.log(deepclone(obj));
