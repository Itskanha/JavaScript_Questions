// 3. **Flatten a multi-dimensional array:**  
//    ```javascript
//    console.log(flattenArray([[1, 2], [3, 4], [5]])); // Output: [1, 2, 3, 4, 5]
//    ```


function flattenArray(arr) {
    // Use the flat method to flatten the array
    return arr.flat();
}

// Test case
console.log(flattenArray([[1, 2], [3, 4], [5]])); // Output: [1, 2, 3, 4, 5]
