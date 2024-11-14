// 10. **Display a message after a delay when an input field is focused:**  
//     ```javascript
//     // Alerts "Input focused!" after 2 seconds when the input is focused.
//     ```

 // Select the input field by its ID
 let inputField = document.getElementById("inputField");

 // Function to execute when the input is focused
 function inputFocus() {
     // Set a timeout to alert the message after 2 seconds
     setTimeout(() => {
         alert("Input focused!");
     }, 2000);
 }

 // Add an event listener for the focus event
 inputField.addEventListener("focus", inputFocus);