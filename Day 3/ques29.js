// 9. **Change text when a button is pressed:**  
//    ```javascript
//    // Changes the text of the specified element when the button is clicked.
//    ```

// Get the heading element and button element by their IDs
let heading = document.getElementById("heading");
let btn = document.getElementById("btn");

// Function to change the text of the heading
function addText() {
    heading.innerHTML = "Button is clicked"; // Update the heading text
}

// Add event listener to the button to call addText when clicked
btn.addEventListener("click", addText);