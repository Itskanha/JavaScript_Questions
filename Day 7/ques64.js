// 4. **Implement filter function:**  
//    ```javascript
//    console.log(filter([1, 2, 3, 4], x => x % 2 === 0)); // Output: [2, 4]
//    ```

// Custom filter function implementation
function filter(array, callback) {
    const result = []; // Initialize an empty array to store results
    for (let i = 0; i < array.length; i++) {
        // Check if the callback returns true for the current element
        if (callback(array[i], i, array)) {
            result.push(array[i]); // Add the element to the result if the callback is true
        }
    }
    return result; // Return the new array
}

// Usage
console.log(filter([1, 2, 3, 4], x => x % 2 === 0)); // Output: [2, 4]