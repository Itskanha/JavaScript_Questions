// 10. **Store an array in local storage:**  

// Create an array of items
const items = ['item1', 'item2', 'item3'];

// Convert the array to a JSON string and save it to local storage
localStorage.setItem('items', JSON.stringify(items));

// Retrieve and parse the array back from local storage, then log it
console.log(JSON.parse(localStorage.getItem('items'))); // Output: ['item1', 'item2', 'item3']