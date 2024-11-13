// Q.10. Throttle Function
// Implement a throttle function that ensures a function is only called at most once in a specified time frame.

// Throttle Function: ensures a function is only called at most once in a specified time frame
function throttleFunction(func, delay) {
    let prev = 0; // Store the last execution time

    return (...args) => { // Return a new function that takes any arguments
        let now = new Date().getTime(); // Get the current timestamp

        // Check if the time since the last execution exceeds the delay
        if (now - prev > delay) {
            prev = now; // Update the last execution time
            return func(...args); // Call the original function with the arguments
        }
    };
}

// Example usage of the throttle function
const throttledClick = throttleFunction(() => {
    console.log("Button is Clicked!");
}, 1500);

// Simulate button clicks
throttledClick(); // This will log the message
setTimeout(throttledClick, 500); // This call will be ignored
setTimeout(throttledClick, 1000); // This call will be ignored
setTimeout(throttledClick, 2000); // This will log the message again after 2 seconds
