// 5. **Add days to a date:**  
//    ```javascript
//    console.log(addDays(new Date('2024-01-01'), 10)); // Output: "January 11, 2024"
//    ```

// Function to add a specific number of days to a date and return the new date as a readable string
function addDays(printdate, add) {
    // Create a new Date object based on the input date
    let newDate = new Date(printdate);
    
    // Use setDate to add the specified number of days
    newDate.setDate(newDate.getDate() + add);

    // Array of month names for easy reference
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Get the day of the month (1-31)
    let day = newDate.getDate();

    // Get the month name using the month index
    let month = monthNames[newDate.getMonth()];

    // Get the full year (e.g., 2024)
    let year = newDate.getFullYear();

    // Return the formatted date string
    return `${month} ${day}, ${year}`;
}

// Example usage: adding 10 days to a specific date
console.log(addDays(new Date('2024-01-01'), 10)); // Output: "January 11, 2024"
