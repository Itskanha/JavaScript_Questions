//4. **Log mouse coordinates on mouse move:**  
//   ```javascript
   // Logs current mouse coordinates as you move the mouse.
//   ```

// Function to log the current mouse coordinates
function logMouseCoordinates(event) {
    const x = event.clientX; // Get the horizontal coordinate
    const y = event.clientY; // Get the vertical coordinate
    console.log(`Mouse Coordinates: X: ${x}, Y: ${y}`); // Log the coordinates
}

// Add an event listener for the mousemove event
window.addEventListener("mousemove", logMouseCoordinates);
