// 5. **Find the intersection of two arrays:**  
//    ```javascript
//    console.log(intersect([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
//    ```

function intersect(arr1, arr2) {
    // Use filter to create a new array that contains only elements present in both arr1 and arr2
    return arr1.filter(value => 
        // Check if the current value from arr1 is included in arr2
        arr2.includes(value)
    );
}

// Test case
console.log(intersect([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
