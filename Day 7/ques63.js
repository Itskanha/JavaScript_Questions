// 3. **Implement map function:**  
//    ```javascript
//    console.log(map([1, 2, 3], x => x * 2)); // Output: [2, 4, 6]
//    ```

// Custom map function implementation
function map(array, callback) {
    const result = []; // Initialize an empty array to store results
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array)); // Apply the callback and store the result
    }
    return result; // Return the new array
}

// Usage
console.log(map([1, 2, 3], x => x * 2)); // Output: [2, 4, 6]