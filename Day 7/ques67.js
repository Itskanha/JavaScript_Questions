// 7. **Implement a function to flatten an array:**  
//    ```javascript
//    console.log(flatten([1, [2, [3, 4]]])); // Output: [1, 2, 3, 4]
//    ```

// Function to flatten an array
function flatten(array) {
    const result = []; // Initialize an empty array to store the flattened result

    // Helper function to recursively flatten the array
    function flattenHelper(arr) {
        for (const item of arr) {
            // Check if the current item is an array
            if (Array.isArray(item)) {
                flattenHelper(item); // Recursively call flattenHelper on the nested array
            } else {
                result.push(item); // If it's not an array, push the item to result
            }
        }
    }

    flattenHelper(array); // Start the flattening process
    return result; // Return the flattened array
}

// Usage
console.log(flatten([1, [2, [3, 4]]])); // Output: [1, 2, 3, 4]