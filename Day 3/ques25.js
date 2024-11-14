// Q.5. **Toggle a class on an element when clicked:**  
//```javascript
// The class 'active' will be toggled on the div when the button is clicked.
//```

// Function to toggle the 'box' class on the container
function toggleClass() {
    let container = document.getElementById("container"); // Get the container element
    container.classList.toggle("box"); // Toggle the 'box' class (no dot needed)
}

// Get the button element
let btn = document.getElementById("btn");

// Add an event listener to the button for the click event
btn.addEventListener("click", toggleClass); // Call toggleClass on button click
