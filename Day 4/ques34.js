// 4. **Toggle visibility of an element:**  
//    ```javascript
//    // The div will be hidden or shown based on its current state.
//    ```

// Function to toggle the visibility of an element and add a class to it
function toggleVisibility(elementId, newClass) { 
    // Get the element by its ID
    let element = document.getElementById(elementId);
    
    // Add the specified class to the element
    element.classList.add(newClass);

    // Check if the element is currently hidden or not
    if (element.style.display === "none" || element.style.display === "") {
        // If it is hidden, set the display property to "block" to show it
        element.style.display = "block";
    } else {
        // If it is visible, set the display property to "none" to hide it
        element.style.display = "none";
    }
}

// Example usage: Toggle the visibility of the element with ID "container" and add the "box" class
toggleVisibility("container", "box");
