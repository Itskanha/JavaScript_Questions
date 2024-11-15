// 3. **Change the text of an element:**  
//    ```javascript
//    // The text of the specified element will be updated.
//    ```

function changeText(elementId, elementText) {
    let element = document.getElementById(elementId); // Get the element by its ID
    if (element) {
        element.textContent = elementText; // Update the text content
    } else {
        console.log(`Element with ID '${elementId}' not found.`); // Log a message if not found
    }
}

changeText("container", "kanha Yadav"); // Change the text of the element with ID 'container'
