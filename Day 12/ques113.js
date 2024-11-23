// 3. **Calculate the difference between two dates:**  
//    ```javascript
//    console.log(dateDifference(new Date('2024-01-01'), new Date('2023-01-01'))); // Output: 365
//    ```

// Function to calculate the difference in days between two dates
function dateDifference(startDate, endDate) {

    // Get the time in milliseconds for both dates
    const startTime = startDate.getTime(); // Convert start date to milliseconds
    const endTime = endDate.getTime(); // Convert end date to milliseconds
    
    // Calculate the difference in milliseconds
    const differenceInMilliseconds = endTime - startTime;

    // Convert the difference from milliseconds to days
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    // Return the absolute value of the difference (in case endDate is before startDate)
    return Math.abs(differenceInDays);
    
}

// Example usage: calculating the difference between two specific dates
console.log(dateDifference(new Date('2024-01-01'), new Date('2023-01-01'))); // Output: 365
