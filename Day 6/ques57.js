// 7. **Throw an error if a string is empty:**  
//    ```javascript
//    // Logs "String cannot be empty" if the input string is empty.
//    ```

function checkString(str) {
    if (str === "") {
        throw new Error("String cannot be empty"); // Error message for empty string
    }
}

// Example usage with try-catch blocks
try {
    checkString(""); // This will throw an error
} catch (error) {
    console.log(error.message); // Logs "String cannot be empty"
}

try {
    checkString("kanha"); // This will not throw an error
    console.log("String is valid."); // Log a message for valid strings
} catch (error) {
    console.log(error.message);
}
