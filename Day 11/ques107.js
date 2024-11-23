// 7. **Calculate the power of a number:**  
//    ```javascript
//    console.log(power(2, 3)); // Output: 8
//    ```

// Method 1
// function power(number, exponent) {
//     // Calculate the power of the number using the exponentiation operator
//     let result = number ** exponent; // Raise 'number' to the power of 'exponent'
//     return result; // Return the calculated result
    
// }

// // Test the function with an example
// console.log(power(2, 3)); // Output: 8

//Method 2
function power(number, exponent) {
    // Calculate the power of the number using Math.pow()
    let result = Math.pow(number, exponent); // Raise 'number' to the power of 'exponent'
    return result; // Return the calculated result
}

// Test the function with an example
console.log(power(2, 3)); // Output: 8