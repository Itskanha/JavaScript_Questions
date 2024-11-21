### Day 10: Local Storage and Session Storage
1. **Save a value to local storage:**  
   ```javascript
   localStorage.setItem('key', 'value');
   console.log(localStorage.getItem('key')); // Output: "value"
   ```

2. **Remove a value from local storage:**  
   ```javascript
   localStorage.removeItem('key');
   console.log(localStorage.getItem('key')); // Output: null
   ```

3. **Clear all local storage items:**  
   ```javascript
   localStorage.clear();
   console.log(localStorage.length); // Output: 0
   ```

4. **Save an object to local storage:**  
   ```javascript
   const user = { name: 'Alice', age: 25 };
   localStorage.setItem('user', JSON.stringify(user));
   console.log(JSON.parse(localStorage.getItem('user'))); // Output: { name: 'Alice', age: 25 }
   ```

5. **Check if a key exists in local storage:**  
   ```javascript
   console.log(localStorage.getItem('key') !== null); // Output: false
   ```

6. **Store data in session storage:**  
   ```javascript
   sessionStorage.setItem('sessionKey', 'sessionValue');
   console.log(sessionStorage.getItem('sessionKey')); // Output: "sessionValue"
   ```

7. **Remove a value from session storage:**  
   ```javascript
   sessionStorage.removeItem('sessionKey');
   console.log(sessionStorage.getItem('sessionKey')); // Output: null
   ```

8. **Clear all session storage items:**  
   ```javascript
   sessionStorage.clear();
   console.log(sessionStorage.length); // Output: 0
   ```

9. **Check the number of items in local storage:**  
   ```javascript
   console.log(localStorage.length); // Output: (number of items in local storage)
   ```

10. **Store an array in local storage:**  
    ```javascript
    const items = ['item1', 'item2', 'item3'];
    localStorage.setItem('items', JSON.stringify(items));
    console.log(JSON.parse(localStorage.getItem('items'))); // Output: ['item1', 'item2', 'item3']
    ```