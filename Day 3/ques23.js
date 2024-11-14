// Q.3. **Debounce an event handler:**  

// Debounce function to limit how often a function can be executed
function debounce(func, delay) {
    let timeout; // Variable to hold the timeout ID

    // Return a new function that wraps the original function
    return function(...args) {
        let context = this; // Preserve the context (this) of the calling function
        clearTimeout(timeout); // Clear the previous timeout if it exists

        // Set a new timeout to call the original function after the specified delay
        timeout = setTimeout(() => func.apply(context, args), delay);
    }
}

// Function to handle window resize events
function handleResize() {
    console.log("Window Resize");
}

// Create a debounced version of the handleResize function
let WindowResize = debounce(handleResize, 300);

// Add an event listener to the window object for the resize event
window.addEventListener("resize", WindowResize);
