
// 4. **Rotate an array to the right by `k` steps:**  
//    ```javascript
//    console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
//    ```

function rotateArray(arr, k) {
    // Normalize k to ensure it's within the bounds of the array length
    k = k % arr.length; 

    // Slice the last k elements and concatenate them with the remaining elements
    // arr.slice(-k) gets the last k elements
    // arr.splice(0, arr.length - k) removes and returns the first part of the array
    return arr.slice(-k).concat(arr.splice(0, arr.length - k));
}

// Test case
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
