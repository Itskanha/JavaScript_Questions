// 5. **Implement reduce function:**  
//    ```javascript
//    console.log(reduce([1, 2, 3], (acc, x) => acc + x, 0)); // Output: 6
//    ```

// Custom reduce function implementation
function reduce(array, callback, initialValue) {
    let accumulator = initialValue; // Initialize the accumulator with the initial value
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array); // Update the accumulator
    }
    return accumulator; // Return the final accumulated value
}

// Usage
console.log(reduce([1, 2, 3], (acc, x) => acc + x, 0)); // Output: 6