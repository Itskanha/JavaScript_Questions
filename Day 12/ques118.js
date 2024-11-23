// 8. **Get the last day of a month:**  
//    ```javascript
//    console.log(getLastDayOfMonth(2024, 2)); // Output: 29
//    ```

// Function to get the last day of a specific month in a given year
function getLastDayOfMonth(year, month) {
    // Create a date object for the first day of the next month
    // Note: Month is 0-indexed, so we need to add 1 to the month argument
    const date = new Date(year, month, 0);
    
    // The day property of this date will give us the last day of the previous month
    return date.getDate();
}

// Example usage: getting the last day of February 2024
console.log(getLastDayOfMonth(2024, 2)); // Output: 29