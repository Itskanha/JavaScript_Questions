// 7. **Remove a value from session storage:**  

// Remove the item with the key 'sessionKey' from session storage
sessionStorage.removeItem('sessionKey');

// Check if the item is removed by trying to get it
console.log(sessionStorage.getItem('sessionKey')); // Output: null