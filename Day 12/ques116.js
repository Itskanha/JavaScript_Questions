// 6. **Get the day of the week for a date:**  
//    ```javascript
//    console.log(getDayOfWeek(new Date('2024-01-01'))); // Output: "Monday"
//    ```


// Function to get the day of the week for a given date
function getDayOfWeek(date) {
    // Array of weekday names for easy reference
    const weekDays = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    
    // Get the day of the week as a number (0-6)
    let dayIndex = date.getDay();

    // Return the corresponding weekday name
    return weekDays[dayIndex];
}

// Example usage: getting the day of the week for a specific date
console.log(getDayOfWeek(new Date('2024-01-01'))); // Output: "Monday"