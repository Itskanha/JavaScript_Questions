// 9. **Change the style of an element:**  
//    ```javascript
//    // Changes the color of the specified element to blue.
//    ```

function changeElementColor(elementId, color) {
    // Get the element by its ID
    let element = document.getElementById(elementId);
    
    // Check if the element exists
    if (element) {
        // Change the color of the element
        element.style.color = color; // Set the color style
    } else {
        // Log a message if the element is not found
        console.log(`Element with ID '${elementId}' not found.`);
    }
}

changeElementColor("container", "blue"); // Change the color of the element with ID 'container' to blue
