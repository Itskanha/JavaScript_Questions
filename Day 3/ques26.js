// 6. **Stop event propagation:**  
//```javascript
// Only the child click event will trigger an alert  not the parent.
//```

// Get parent and child elements
let parent = document.getElementById("parent");
let child = document.getElementById("child");

// Event listener for the parent element
parent.addEventListener("click", function() {
    alert("Parent Clicked!"); // Alert when the parent is clicked
});

// Event listener for the child element
child.addEventListener("click", function(event) {
    alert("Child Clicked!"); // Alert when the child is clicked
    event.stopPropagation(); // Prevent the event from bubbling to the parent
});