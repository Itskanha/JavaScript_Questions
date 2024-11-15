// 10. **Scroll to a specific element smoothly:**  
//     ```javascript
//     // Smoothly scrolls to the target element in the DOM.
//     ```

function scrollSmoothness(elementId) {
    // Get the element by its ID
    let element = document.getElementById(elementId);

    // Check if the element exists
    if (element) {
        // Scroll to the element smoothly
        element.scrollIntoView({
            behavior: 'smooth', // Enable smooth scrolling
            block: 'start' // Align to the top of the viewport
        });

        // Show an alert after a slight delay to allow for scrolling
        setTimeout(() => {
            alert("This is very smooth scroll");
        }, 300); // Delay for 300 milliseconds
    } else {
        // Log a message if the element is not found
        console.log(`Element with ID '${elementId}' not found.`);
    }
}

// Example usage
scrollSmoothness("inputFiled"); // Scroll smoothly to the element with ID 'inputFiled'
