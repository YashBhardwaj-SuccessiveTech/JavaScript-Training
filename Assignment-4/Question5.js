// 5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

function toCamelCase(str) {
    let ans = "";
    let capitalizeNext = false; // Flag to capitalize the next letter after a space

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);

        if (char === " ") {
            capitalizeNext = true;
        } else {
            // If flag is true, capitalize the character
            if (capitalizeNext) {
                ans += char.toUpperCase();
                capitalizeNext = false;
            } else {
                ans += char.toLowerCase();
            }
        }
    }

    return ans;
}

let str = "hello john doe";
console.log(toCamelCase(str)); // Output: helloJohnDoe
