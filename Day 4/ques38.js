// 8. **List all child elements of a given element:**  
//    ```javascript
//    // Logs an array of all child elements of the specified parent.
//    ```


function listChildElements(parentId) {
    // Get the parent element by its ID
    let parentElement = document.getElementById(parentId);
    
    // Check if the parent element exists
    if (parentElement) {
        // Get all child elements of the parent
        let childElements = parentElement.children; // This returns an HTMLCollection
        
        // Convert the HTMLCollection to an array for easier handling
        let childArray = Array.from(childElements);
        
        // Log the array of child elements to the console
        console.log("Child elements:", childArray);
    } else {
        // Log a message if the parent element is not found
        console.log(`Element with ID '${parentId}' not found.`);
    }
}

// Example usage
listChildElements("parentElement"); // Log the child elements of the element with ID 'parentContainer'
