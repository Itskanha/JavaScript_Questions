// 3. **Log errors to the console:**  
//    ```javascript
//    // Logs "An error occurred: [error message]" to the console.
//    ```

// Function to simulate an error and log it to the console
function logError() {
    try {
        // Intentionally throw an error for demonstration
        throw new Error("Something Went Wrong!!");
    } catch (error) {
        // Log the error message to the console
        console.error(`An error occurred: ${error.message}`);
    }
}

// Call the function to see the error logging in action
logError(); // This will log: An error occurred: Something Went Wrong!!
