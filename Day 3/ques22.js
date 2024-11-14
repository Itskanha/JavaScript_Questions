// 2. **Change background color of a div on hover:**  

// Get the container element by its ID
let container = document.getElementById("container");

// Function to change the background color when hovering
function changeBackground() {
    container.style.backgroundColor = "yellow"; // Set the background color to yellow
}

// Function to reset the background color when the mouse leaves
function resetBackground() {
    container.style.backgroundColor = ""; // Reset to original color
}

// Check if the container exists before adding event listeners
if (container) {
    // Add mouseover event listener to change the background color
    container.addEventListener("mouseover", changeBackground);
    // Add mouseout event listener to reset the background color
    container.addEventListener("mouseout", resetBackground);
} else {
    alert("Container does not exist."); // Alert if the container is not found
}
