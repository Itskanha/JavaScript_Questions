// 4. **Save an object to local storage:**  

// Create a user object
const user = { name: 'Alice', age: 25 };

// Convert the object to a JSON string and save it to local storage
localStorage.setItem('user', JSON.stringify(user));

// Retrieve and parse the object back from local storage, then log it
console.log(JSON.parse(localStorage.getItem('user'))); // Output: { name: 'Alice', age: 25 }
