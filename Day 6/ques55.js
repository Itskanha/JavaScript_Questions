// 5. **Validate user input and throw custom

//  errors:**  
//    ```javascript
//    // Logs "Input cannot be empty" if the input validation fails.
// //    ```

function validateInput(input) {
    if (!input || input.trim() === "") {
        throw new Error("Input cannot be empty");
    }
    // Additional validation logic can go here if needed
}

// Example usage
try {
    validateInput("");  // This will throw an error
} catch (error) {
    console.error(error.message);  // Logs "Input cannot be empty"
}
