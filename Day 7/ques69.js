// 9. **Implement a function to check if an array contains duplicates:**  
//    ```javascript
//    console.log(hasDuplicates([1, 2, 3, 1])); // Output: true
//    ```

// Function to check if an array contains duplicates using Set
function hasDuplicates(array) {
    return new Set(array).size !== array.length; // Compare sizes
}

// Usage
console.log(hasDuplicates([1, 2, 3, 1])); // Output: true
