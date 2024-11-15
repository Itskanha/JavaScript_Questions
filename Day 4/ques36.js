// 6. **Set multiple attributes on an element:**  
//    ```javascript
//    // A new div is created with specified class and id attributes.
//    ```

// 6. **Set multiple attributes on an element:**
function createDivWithAttributes(className, id) {
    // Create a new div element
    let newDiv = document.createElement("div");
    
    // Set multiple attributes
    newDiv.className = className; // Set the class attribute
    newDiv.id = id; // Set the id attribute
    
    // Optionally, add some text content to the new div
    newDiv.textContent = "This is a new div with specified attributes.";

    // Append the new div to the body
    document.body.appendChild(newDiv);
}

// Example usage
createDivWithAttributes("my-class", "my-div"); // Create a div with class 'my-class' and id 'my-div'
