// 8. **Get the last element of an array:**  
//    ```javascript
//    console.log(getLastElement([1, 2, 3])); // Output: 3
//    ```

function getLastElement(arr) {
    // Check if the array is not empty
    if (arr.length === 0) {
        return undefined; // Return undefined if the array is empty
    }
    // Return the last element using the length property
    return arr[arr.length - 1];
}

// Test cases
console.log(getLastElement([1, 2, 3])); // Output: 3
console.log(getLastElement([5, 10, 15, 20])); // Output: 20
console.log(getLastElement([])); // Output: undefined
