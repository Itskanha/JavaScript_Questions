// 10. **Implement a function to find the intersection of two arrays:**  
//     ```javascript
//     console.log(intersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
//     ```

// Function to find the intersection of two arrays
function intersection(array1, array2) {
    return array1.filter(item => array2.includes(item)); // Filter elements in array1 that are also in array2
}

// Usage
console.log(intersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]