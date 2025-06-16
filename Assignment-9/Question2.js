import  lodash from "lodash";
let arr = [1, 2, [2], [3, [9]]];
let arr1 = lodash.flattenDeep(arr);

console.log(arr1);
