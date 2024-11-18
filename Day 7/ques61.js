// 1. **Create a curry function:**  
//    ```javascript
//    console.log(curry(add)(1)(2)); // Output: 3
//    ```

// Function that adds two numbers
function addNumber(num1, num2) {
    return num1 + num2; // Return the sum of num1 and num2
}

// Curry function to allow partial application of a function
function curry(fn) {
    return function curried(...args) {
        // Check if the number of arguments is sufficient
        if (args.length >= fn.length) {
            return fn(...args); // If so, call the original function
        }
        // Return a function that collects more arguments
        return function(...nextArgs) {
            return curried(...args, ...nextArgs); // Recursively call curried with all arguments
        };
    };
}

// Usage of the curried addNumber function
const result = curry(addNumber)(1)(2); // Call curry with addNumber, then partially apply arguments
console.log(result); // Output: 3
