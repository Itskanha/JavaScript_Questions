// 5. **Clone an element and append it to the body:**  
//    ```javascript
//    // A clone of the specified div is added to the body.
//    ```

function cloneElement(elementId) {
    // Get the original element by its ID
    let originalElement = document.getElementById(elementId);

    // Check if the original element exists
    if (originalElement) {
        // Clone the element (deep clone, including child nodes)
        let cloneNode = originalElement.cloneNode(true);
        
        // Append the cloned element to the body
        document.body.appendChild(cloneNode);
    } else {
        // Alert the user if the element is not found
        alert(`Element with ID '${elementId}' not found.`);
    }
}

cloneElement("container"); // Clone the element with ID 'container' and append it to the body
