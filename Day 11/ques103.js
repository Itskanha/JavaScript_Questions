// 3. **Calculate the factorial of a number:**  
//    ```javascript
//    console.log(factorial(5)); // Output: 120
//    ```

function factorial(num) {
    // Initialize the result variable to 1 (since factorial of 0 is 1)
    let factorialSum = 1;

    // Loop from 1 to num (inclusive)
    for (let i = 1; i <= num; i++) {
        // Multiply the current factorialSum by the current number i
        factorialSum *= i;
    }

    // Return the computed factorial
    return factorialSum;
}

// Example usage: Calculate the factorial of 5
console.log(factorial(5)); // Output: 120
