// 9. **Format a time to HH:MM AM/PM:**  
//    ```javascript
//    console.log(formatTime(new Date('2024-01-01T14:30:00'))); // Output: "2:30 PM"
//    ```

// Function to format a time to HH:MM AM/PM
function formatTime(date) {
    // Get the hours and minutes from the date
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    // Determine AM or PM suffix
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert hours from 24-hour to 12-hour format
    hours = hours % 12; // Convert 0-23 to 0-11
    hours = hours ? hours : 12; // Adjust hour '0' to '12'
    
    // Pad minutes with leading zero if necessary
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Return the formatted time string
    return `${hours}:${minutes} ${ampm}`;
}

// Example usage: formatting a specific time
console.log(formatTime(new Date('2024-01-01T14:30:00'))); // Output: "2:30 PM"