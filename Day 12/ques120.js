// 10. **Check if two dates are the same:**  
//     ```javascript
//     console.log(areDatesEqual(new Date('2024-01-01'), new Date('2024-01-01'))); // Output: true
//     ```

// Function to check if two dates are equal
function areDatesEqual(date1, date2) {
    // Check if the year, month, and day are the same for both dates
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}

// Example usage: checking if two specific dates are the same
console.log(areDatesEqual(new Date('2024-01-01'), new Date('2024-01-01'))); // Output: true
