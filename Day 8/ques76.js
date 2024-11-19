// 6. **Check if an array is sorted:**  
//    ```javascript
//    console.log(isSorted([1, 2, 3, 4])); // Output: true
//    ```

function isSorted(arr) {
    // Iterate through the array from the first to the second-to-last element
    for (let i = 0; i < arr.length - 1; i++) {
        // Check if the current element is greater than the next element
        if (arr[i] > arr[i + 1]) {
            // If so, the array is not sorted; return false
            return false;
        }
    }
    // If no elements were found out of order, return true
    return true;
}

// Test cases
console.log(isSorted([1, 2, 3, 4])); // Output: true
console.log(isSorted([4, 3, 2, 1])); // Output: false
console.log(isSorted([1, 2, 2, 3])); // Output: true
console.log(isSorted([])); // Output: true (an empty array is considered sorted)
