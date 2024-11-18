// 9. **Log detailed error information:**  
//    ```javascript
//    // Logs detailed error information including message and stack.
//    ```


function riskyOperation() {
    throw new Error("Something went wrong!"); // Simulate an error
}

try {
    riskyOperation(); // This will throw an error
} catch (error) {
    console.error("Error message:", error.message); // Log the error message
    console.error("Stack trace:", error.stack); // Log the stack trace for debugging
}
