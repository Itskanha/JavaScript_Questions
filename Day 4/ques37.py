// 7. **Get the parent element of a given element:**  
//    ```javascript
//    // Logs the parent element of the specified child.
//    ```

function logParentElement(childId) {
    // Get the child element by its ID
    let childElement = document.getElementById(childId);
    
    // Check if the child element exists
    if (childElement) {
        // Get the parent element
        let parentElement = childElement.parentElement;
        
        // Log the parent element to the console
        console.log("Parent element:", parentElement);
    } else {
        // Log a message if the child element is not found
        console.log(`Element with ID '${childId}' not found.`);
    }
}

// Example usage
logParentElement("inputFiled"); // Log the parent of the element with ID 'container'
