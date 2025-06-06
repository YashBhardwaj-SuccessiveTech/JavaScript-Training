// 11. Write a program to sort an array (bubble sort)

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    for (let i = 0; i < n - 1; i++) {
        swapped = false;  
        
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        if (!swapped) break;
    }

    return arr;
}

let arr = [5, 2, 9, 1, 5, 6];
let sortedArr = bubbleSort(arr);
console.log("Sorted array:", sortedArr);
