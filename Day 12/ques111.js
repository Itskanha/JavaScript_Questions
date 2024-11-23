// 1. **Get the current date and time:**  
//    ```javascript
//    console.log(getCurrentDateTime()); // Output: Current date and time
//    ```

// Function to get the current date and time
function getCurrentDateTime() {
    // Create a new Date object that holds the current date and time
    let dateTime = new Date();
    
    // Return the date and time in a readable format
    return dateTime.toLocaleString();
}

// Call the function and log the output to the console
console.log(getCurrentDateTime()); // Output: Current date and time in a readable format
