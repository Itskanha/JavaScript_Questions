// 8. **Check if a number is even:**  
//    ```javascript
//    console.log(isEven(4)); // Output: true
//    ```

function isEven(num) {
    // Check if the number is even
    if (num % 2 === 0) {
        return true; // Return true for even numbers
    } else {
        return false; // Return false for odd numbers
    }
}

// Test the function with an example
console.log(isEven(4)); // Output: true
console.log(isEven(3)); // Output: false
