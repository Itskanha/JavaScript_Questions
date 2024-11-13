// Q.9. Debounce Function
// Implement a debounce function that limits how often a function can fire.

// Debounce Function: limits how often a function can fire
function debounceFunction(func, wait) {
    let timeout; // Variable to hold the timeout ID
    return function(...args) { // Return a new function that takes any arguments
        let context = this; // Capture the context in which the function is called

        clearTimeout(timeout); // Clear the existing timeout to prevent the function from executing

        // Set a new timeout
        timeout = setTimeout(() => {
            func.apply(context, args); // Call the original function with the captured context and arguments
        }, wait); // Wait time in milliseconds
    }
}

// Example function to be debounced
const lagMessage = () => {
    console.log("Function Execute"); // Log message to console
}

// Create a debounced version of lagMessage with a wait time of 1000ms (1 second)
let debouncelogMessage = debounceFunction(lagMessage, 1000);

// Call the debounced function multiple times
debouncelogMessage(); // First call
debouncelogMessage(); // Second call (this will reset the timer)
debouncelogMessage(); // Third call (this will also reset the timer)