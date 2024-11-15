// 1. **Add a new element to the DOM:**  
// ```javascript
//  A new div with "Hello, World!" is added to the body.
// ```

function addHelloWorldDiv() {
    let div = document.createElement("div"); // Create a new div element
    div.innerHTML = "Hello, World!"; // Set the inner HTML to "Hello, World!"
    document.body.appendChild(div); // Append the div to the body
}

addHelloWorldDiv(); // Call the function to execute it
