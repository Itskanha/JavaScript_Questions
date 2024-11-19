// 2. **Remove duplicates from an array:**  
//    ```javascript
//    console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]
//    ```

// Method - 1
function removeDuplicates(arr) {
    // Create a new array to hold unique values
    const uniqueValues = [];

    // Iterate through each value in the original array
    for (const value of arr) {
        // Check if the value is not already in the uniqueValues array
        if (!uniqueValues.includes(value)) {
            // If not, add it to the uniqueValues array
            uniqueValues.push(value);
        }
    }

    // Return the array containing only unique values
    return uniqueValues;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]



// Method -2
function removeDuplicates(arr){
   return arr.filter((value, index) => arr.indexOf(value) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
