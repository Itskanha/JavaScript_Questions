### Day 12: Dates and Times
1. **Get the current date and time:**  
   ```javascript
   console.log(getCurrentDateTime()); // Output: Current date and time
   ```

2. **Format a date to a readable string:**  
   ```javascript
   console.log(formatDate(new Date('2024-01-01'))); // Output: "January 1, 2024"
   ```

3. **Calculate the difference between two dates:**  
   ```javascript
   console.log(dateDifference(new Date('2024-01-01'), new Date('2023-01-01'))); // Output: 365
   ```

4. **Check if a year is a leap year:**  
   ```javascript
   console.log(isLeapYear(2024)); // Output: true
   ```

5. **Add days to a date:**  
   ```javascript
   console.log(addDays(new Date('2024-01-01'), 10)); // Output: "January 11, 2024"
   ```

6. **Get the day of the week for a date:**  
   ```javascript
   console.log(getDayOfWeek(new Date('2024-01-01'))); // Output: "Monday"
   ```

7. **Convert a date to a timestamp:**  
   ```javascript
   console.log(dateToTimestamp(new Date('2024-01-01'))); // Output: Unix timestamp
   ```

8. **Get the last day of a month:**  
   ```javascript
   console.log(getLastDayOfMonth(2024, 2)); // Output: 29
   ```

9. **Format a time to HH:MM AM/PM:**  
   ```javascript
   console.log(formatTime(new Date('2024-01-01T14:30:00'))); // Output: "2:30 PM"
   ```

10. **Check if two dates are the same:**  
    ```javascript
    console.log(areDatesEqual(new Date('2024-01-01'), new Date('2024-01-01'))); // Output: true
    ```