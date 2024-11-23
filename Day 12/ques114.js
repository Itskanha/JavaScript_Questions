// 4. **Check if a year is a leap year:**  
//    ```javascript
//    console.log(isLeapYear(2024)); // Output: true
//    ```

// Function to check if a year is a leap year
function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // If it is divisible by 100, check if it is also divisible by 400
        if (year % 100 === 0) {
            // If it is divisible by 400, it is a leap year
            if (year % 400 === 0) {
                return true; // Leap year
            } else {
                return false; // Not a leap year
            }
        }
        // If not divisible by 100, it is a leap year
        return true; // Leap year
    } else {
        return false; // Not a leap year
    }
}

// Example usage: checking if 2024 is a leap year
console.log(isLeapYear(2024)); // Output: true