// Q.1. **Listen for click events on a button:**  

// Get the button element by its ID
let btn = document.getElementById("btn");

// Define the function to be called when the button is clicked
function btnClick() {
    alert("button is clicked"); // Alert the user that the button was clicked
}

// Check if the button exists before adding the event listener
if (btn) {
    // Add a click event listener to the button
    btn.addEventListener("click", btnClick);
} else {
    console.warn("Button with ID 'btn' not found."); // Warn if the button is not found
}
