// 2. **Format a date to a readable string:**  
//    ```javascript
//    console.log(formatDate(new Date('2024-01-01'))); // Output: "January 1, 2024"
//    ```

// Function to format a date to a readable string
function formatDate(printdate) {
    // Array of month names for easy reference
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    // Get the day of the month (1-31)
    let day = printdate.getDate(); // Use getDate() instead of getDay()

    // Get the month name using the month index
    let month = monthNames[printdate.getMonth()];

    // Get the full year (e.g., 2024)
    let year = printdate.getFullYear();

    // Return the formatted date string
    return `${month} ${day}, ${year}`;
}

// Example usage: formatting a specific date
console.log(formatDate(new Date('2024-01-01'))); // Output: "January 1, 2024"