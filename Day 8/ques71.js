// 1. **Find the maximum value in an array:**  
//    ```javascript
//    console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
//    ```


function findMax(arr) {
    // Handle the case of an empty array
    if (arr.length === 0) return undefined; 

    // Initialize max to the first element of the array
    let max = arr[0]; 

    // Iterate through each value in the array
    for (const value of arr) {
        // If the current value is greater than max, update max
        if (value > max) {
            max = value;
        }
    }
    
    // Return the maximum value found
    return max;
}

// Test cases
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5
console.log(findMax([-1, -2, -3])); // Output: -1
console.log(findMax([])); // Output: undefined