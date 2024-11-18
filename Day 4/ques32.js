// 2. **Remove an element from the DOM:**  
//    ```javascript
//    // The specified element will be removed from the DOM.
//    ```

function removeElement() {
    let div = document.getElementById("container"); // Get the element with the ID container
    document.body.removeChild(div); // Remove the element from the body
}

removeElement(); // Call the function to execute it

