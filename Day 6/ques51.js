// 1. **Throw an error if the input is not a number:**  
//    ```javascript
//    // Throws an error with message "Input must be a number" if the input is invalid.
//    ```

// Function to check if the input is a valid number
function checkNumber(num) {
    // Check if the input is not of type 'number' or if it is NaN
    if (typeof num !== 'number' || isNaN(num)) {
        // Throw an error if the input is invalid
        throw new Error("Input must be a number");
    }
    // Log the valid number to the console
    console.log(num);
}

// Try-catch block to handle potential errors
try {
    // This will throw an error because the input is a string
    checkNumber("seven");
} catch (error) {
    // Catch and log the error message
    console.error(error.message); // Output: Input must be a number
}

