// 4. **Wrap another function to catch errors:**  
//    ```javascript
//    // Logs "Caught an error: Test error" when the function is executed.
//    ```

function wrapFunction(fn) {
    return function(...args) {
        try {
            fn(...args);
        } catch (error) {
            console.error(`Caught an error: ${error.message}`);
        }
    };
}

// Example function that may throw an error
function riskyFunction() {
    throw new Error("Test error");
}

// Wrap the risky function
const safeFunction = wrapFunction(riskyFunction);

// Call the wrapped function
safeFunction();  // This will log "Caught an error: Test error"