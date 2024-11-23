// 7. **Convert a date to a timestamp:**  
//    ```javascript
//    console.log(dateToTimestamp(new Date('2024-01-01'))); // Output: Unix timestamp
//    ```

// Function to convert a date to a Unix timestamp as a string
function dateToTimestamp(date) {
    // Get the time in milliseconds since January 1, 1970
    const milliseconds = date.getTime();
    
    // Convert milliseconds to seconds and then to a string
    const secondsString = Math.floor(milliseconds / 1000);
    
    // Return the Unix timestamp as a string
    return secondsString;
}

// Example usage: converting a specific date to a Unix timestamp string
console.log(dateToTimestamp(new Date('2024-01-01'))); // Output: 1704067200
